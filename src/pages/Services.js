export default function Services() {
    return (
      <div className="relative z-30 w-full bg-white pt-32 pb-20 px-6 md:px-20">
  
        <h2 className="text-4xl font-bold mb-12 text-center">
          Our Services
        </h2>
  
        <div className="grid md:grid-cols-3 gap-10">
  
          {/* CARD 1 */}
          <div className="p-8 bg-[#F5F1E8] rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-3">Service 1</h3>
            <p className="text-gray-700">
              Short description of service 1 goes here.
            </p>
          </div>
  
          {/* CARD 2 */}
          <div className="p-8 bg-[#F5F1E8] rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-3">Service 2</h3>
            <p className="text-gray-700">
              Short description of service 2 goes here.
            </p>
          </div>
  
          {/* CARD 3 */}
          <div className="p-8 bg-[#F5F1E8] rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-3">Service 3</h3>
            <p className="text-gray-700">
              Short description of service 3 goes here.
            </p>
          </div>
  
        </div>
      </div>
    );
  }
  