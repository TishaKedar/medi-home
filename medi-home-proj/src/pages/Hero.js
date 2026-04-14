import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full bg-[#F5F1E8]">

      {/* Sidebar */}
      <Sidebar />

      {/* ADMIN BUTTON */}
      <button
        onClick={() => navigate("/admin")}
        className="absolute top-5 right-5 z-50 bg-[#1E6D4E] text-white px-5 py-2 rounded-full shadow-lg hover:bg-[#145a40] transition"
      >
        Admin
      </button>

      {/* Hero background image */}
      <div className="relative z-10 w-full">
        <img
          src="/assests/Hero.png"
          alt="Healthcare hero banner"
          className="w-full h-auto sm:h-[800px] md:h-[600px] lg:h-[1030px] object-cover"
        />
      </div>

      {/* Tablet circles */}
      <div className="hidden md:flex lg:hidden flex-row items-center gap-32 mt-10 z-20 bg-[#FFF9EC] w-full py-10 justify-center">
        <div className="w-[260px] h-[260px] bg-white rounded-full shadow-xl flex items-center justify-center text-center">
          <p className="text-[#1E6D4E] text-3xl font-bold leading-snug px-4">
            Your Health,<br />Our Priority
          </p>
        </div>

        <div className="w-[140px] h-[140px] bg-[#1E6D4E] rounded-full shadow-xl flex items-center justify-center">
          <img src="/assests/Frame.png" alt="Healthcare icon" className="w-[90px] h-[90px] object-contain" />
        </div>
      </div>

      {/* Mobile circles */}
      <div className="md:hidden flex flex-col items-center gap-10 mt-10 z-20">
        <div className="w-[250px] h-[250px] bg-white rounded-full shadow-xl flex items-center justify-center text-center">
          <p className="text-black text-2xl sm:text-3xl font-semibold leading-snug px-4">
            Your Health,<br />Our Priority
          </p>
        </div>

        <div className="w-[120px] h-[120px] bg-[#1E6D4E] rounded-full shadow-xl flex items-center justify-center">
          <img src="/assests/Frame.png" alt="Healthcare icon" className="w-[80px] h-[80px] object-contain" />
        </div>
      </div>

      {/* Curved desktop image */}
      <div className="absolute top-[300px] left-0 w-full z-20 pointer-events-none hidden lg:block">
        <img src="/assests/curvyy.png" alt="" className="w-full h-auto block" />
      </div>

      {/* MOBILE SERVICES */}
      <div className="md:hidden relative z-30 w-[95%] sm:w-[90%] mx-auto px-4 sm:px-0 pt-10 pb-10">
        <h2 className="text-center text-4xl sm:text-5xl font-bold text-black mb-6 sm:mb-8 font-heading">
          SERVICES WE PROVIDE
        </h2>

        <p className="text-center text-lg sm:text-xl tracking-wide text-black mb-12">
          HEALTHCARE SOLUTIONS, TAILORED FOR YOU
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-center">
          {[
            { title: "Physiotherapy", img: "/assests/pic1.png" },
            { title: "X-Ray Service", img: "/assests/pic2.png" },
            { title: "ECG Checkup", img: "/assests/pic3.png" },
            { title: "Blood Test", img: "/assests/pic4.png" }
          ].map((service, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="relative w-[250px]">
                <img
                  src={i === 3 ? "/assests/greenbox.png" : "/assests/box.png"}
                  alt=""
                  className="w-full h-auto"
                />
                <p className="absolute top-3 left-3 text-black font-semibold text-xl z-20">
                  {service.title}
                </p>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[200px] h-[200px] rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
                  <img src={service.img} alt={service.title} className="w-full h-full object-contain"/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP SERVICES */}
      <div className="hidden lg:block relative z-30 w-[80%] mx-auto px-4 -mt-40">
        <h2 className="text-center text-5xl font-bold text-black mb-16 pt-12">
          SERVICES WE PROVIDE
        </h2>

        <p className="text-center text-3xl mb-6">
          HEALTHCARE SOLUTIONS, TAILORED FOR YOU
        </p>

        <div className="grid grid-cols-4 gap-6 justify-center">
          {[
            { title: "Physiotherapy", img: "/assests/pic1.png" },
            { title: "X-Ray Service", img: "/assests/pic2.png" },
            { title: "ECG Checkup", img: "/assests/pic3.png" },
            { title: "Blood Test", img: "/assests/pic4.png" }
          ].map((service, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="relative w-[230px]">
                <img
                  src={i === 3 ? "/assests/greenbox.png" : "/assests/box.png"}
                  alt=""
                  className="w-full h-auto"
                />
                <p className="absolute top-3 left-3 text-black font-semibold text-lg">
                  {service.title}
                </p>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[200px] h-[200px] rounded-full overflow-hidden flex items-center justify-center bg-gray-300">
                  <img src={service.img} alt={service.title} className="w-full h-full object-contain"/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}