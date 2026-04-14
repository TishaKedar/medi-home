import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Leaf, Search, LogOut, Trash2 } from "lucide-react";

const STATUS_COLORS = {
  Pending:   "bg-yellow-100 text-yellow-700",
  Confirmed: "bg-blue-100 text-blue-700",
  Completed: "bg-green-100 text-green-700",
};

const NEXT_STATUS = {
  Pending:   "Confirmed",
  Confirmed: "Completed",
  Completed: "Pending",
};

export default function AdminPanel() {
  const [appointments, setAppointments] = useState([]);
  const [search, setSearch]             = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [error, setError]               = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!token) { navigate("/admin"); return; }
    fetchAppointments();
  }, [fetchAppointments, navigate, token]);

  const fetchAppointments = async () => {
    try {
      const res = await fetch("/api/appointments", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) { navigate("/admin"); return; }
      const data = await res.json();
      setAppointments(data);
    } catch {
      setError("Failed to load appointments");
    }
  };

  const handleStatusCycle = async (id, current) => {
    const next = NEXT_STATUS[current];
    try {
      const res = await fetch(`/api/appointments/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: next }),
      });
      const updated = await res.json();
      setAppointments((prev) =>
        prev.map((a) => (a._id === id ? updated : a))
      );
    } catch {
      alert("Failed to update status");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this appointment?")) return;
    try {
      await fetch(`/api/appointments/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      setAppointments((prev) => prev.filter((a) => a._id !== id));
    } catch {
      alert("Failed to delete");
    }
  };

  const filtered = appointments.filter((a) => {
    const matchSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.email.toLowerCase().includes(search.toLowerCase()) ||
      (a.city || "").toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "All" || a.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const counts = {
    All:       appointments.length,
    Pending:   appointments.filter((a) => a.status === "Pending").length,
    Confirmed: appointments.filter((a) => a.status === "Confirmed").length,
    Completed: appointments.filter((a) => a.status === "Completed").length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#1F775B] text-white px-6 py-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-3">
          <Leaf className="w-7 h-7" />
          <span className="text-2xl font-bold tracking-wide">MEDI HOME</span>
          <span className="ml-3 text-white/70 text-sm font-medium">Admin Dashboard</span>
        </div>
        <button
          onClick={() => { localStorage.removeItem("adminToken"); navigate("/admin"); }}
          className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition text-sm"
        >
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Stat Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {["All", "Pending", "Confirmed", "Completed"].map((s) => (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`rounded-2xl p-4 text-left shadow-sm border-2 transition ${
                filterStatus === s
                  ? "border-[#1F775B] bg-white"
                  : "border-transparent bg-white hover:border-gray-200"
              }`}
            >
              <p className="text-3xl font-bold text-[#1F775B]">{counts[s]}</p>
              <p className="text-sm text-gray-500 mt-1">{s}</p>
            </button>
          ))}
        </div>

        {/* Search + Filter */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-4 flex flex-col sm:flex-row gap-3 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email or city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1F775B]/30 text-sm"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {["All", "Pending", "Confirmed", "Completed"].map((s) => (
              <button
                key={s}
                onClick={() => setFilterStatus(s)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                  filterStatus === s
                    ? "bg-[#1F775B] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-gray-100 text-gray-500 text-xs uppercase tracking-wider">
                <th className="px-5 py-4">Name</th>
                <th className="px-5 py-4">Email</th>
                <th className="px-5 py-4">Phone</th>
                <th className="px-5 py-4">Age</th>
                <th className="px-5 py-4">City</th>
                <th className="px-5 py-4">Message</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Date</th>
                <th className="px-5 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={9} className="text-center py-12 text-gray-400">
                    No appointments found.
                  </td>
                </tr>
              ) : (
                filtered.map((a) => (
                  <tr key={a._id} className="border-t border-gray-50 hover:bg-gray-50 transition">
                    <td className="px-5 py-4 font-medium text-gray-800">{a.name}</td>
                    <td className="px-5 py-4 text-gray-600">{a.email}</td>
                    <td className="px-5 py-4 text-gray-600">{a.phone}</td>
                    <td className="px-5 py-4 text-gray-600">{a.age || "—"}</td>
                    <td className="px-5 py-4 text-gray-600">{a.city || "—"}</td>
                    <td className="px-5 py-4 text-gray-600 max-w-[150px] truncate">{a.message || "—"}</td>
                    <td className="px-5 py-4">
                      <button
                        onClick={() => handleStatusCycle(a._id, a.status)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold cursor-pointer transition hover:opacity-80 ${STATUS_COLORS[a.status]}`}
                      >
                        {a.status}
                      </button>
                    </td>
                    <td className="px-5 py-4 text-gray-400 text-xs">
                      {a.createdAt ? new Date(a.createdAt).toLocaleDateString("en-IN") : "—"}
                    </td>
                    <td className="px-5 py-4">
                      <button
                        onClick={() => handleDelete(a._id)}
                        className="text-red-400 hover:text-red-600 transition"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-3 text-right">
          Showing {filtered.length} of {appointments.length} appointments · Click status badge to cycle it
        </p>
      </div>
    </div>
  );
}