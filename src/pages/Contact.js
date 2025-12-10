import React from "react";
import { Leaf } from "lucide-react";
import { Phone } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment submitted (stub)");
  };

  return (
    <section
      aria-label="Book an appointment"
      className="w-full relative overflow-hidden min-h-[800px] sm:min-h-[1000px] md:min-h-[1200px] lg:min-h-[2000px]"
      style={{
        backgroundColor: "#b7d1c8",
        backgroundImage: "url('/assests/footer.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 500px",
        backgroundSize: "100% 90%",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-16">

        {/* Heading */}
        <div className="w-full mb-6 sm:mb-8 md:mb-8 lg:mb-8">
          <h2 className="text-slate-800 font-extrabold relative lg:-ml-80 md:-ml-40">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Book an
            </span>
            <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[140px] tracking-tight leading-tight mt-4 lg:mt-6">
              APPOINTMENT
            </span>
          </h2>
        </div>

        {/* ================= FORM + DOCTOR IMAGE ================= */}
        <div className="relative w-full">

          {/* Decorative circle */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] bg-[#5a9b85] rounded-full opacity-50 blur-3xl -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-12 items-start">

            {/* Left: Taller Frosted Glass Form */}
            <div className="relative mt-8 sm:mt-12 md:mt-16 lg:mt-20 lg:-ml-80 flex justify-center md:justify-start">
              <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px] w-[300px] sm:w-[400px] md:w-[500px] lg:w-[900px]">
                <div className="flex flex-col justify-center h-full space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-8">

                  <input type="text" placeholder=""
                    className="w-full bg-transparent border-b-2 border-white/60 py-3 sm:py-4 md:py-4 lg:py-4 px-2 text-white placeholder-white/70 focus:outline-none focus:border-white transition text-sm sm:text-base md:text-base lg:text-base"
                  />

                  <input type="email" placeholder=""
                    className="w-full bg-transparent border-b-2 border-white/60 py-3 sm:py-4 md:py-4 lg:py-4 px-2 text-white placeholder-white/70 focus:outline-none focus:border-white transition text-sm sm:text-base md:text-base lg:text-base"
                  />

                  <input type="text" placeholder=""
                    className="w-full bg-transparent border-b-2 border-white/60 py-3 sm:py-4 md:py-4 lg:py-4 px-2 text-white placeholder-white/70 focus:outline-none focus:border-white transition text-sm sm:text-base md:text-base lg:text-base"
                  />

                  <input type="text" placeholder=""
                    className="w-full bg-transparent border-b-2 border-white/60 py-3 sm:py-4 md:py-4 lg:py-4 px-2 text-white placeholder-white/70 focus:outline-none focus:border-white transition text-sm sm:text-base md:text-base lg:text-base"
                  />

                  <input type="text" placeholder=""
                    className="w-full bg-transparent border-b-2 border-white/60 py-3 sm:py-4 md:py-4 lg:py-4 px-2 text-white placeholder-white/70 focus:outline-none focus:border-white transition text-sm sm:text-base md:text-base lg:text-base"
                  />

                  <input type="text" placeholder=""
                    className="w-full bg-transparent border-b-2 border-white/60 py-3 sm:py-4 md:py-4 lg:py-4 px-2 text-white placeholder-white/70 focus:outline-none focus:border-white transition text-sm sm:text-base md:text-base lg:text-base"
                  />

                  <div className="flex justify-center">
                    <button
                      onClick={handleSubmit}
                      className="bg-white text-[#3d8b74] px-12 sm:px-16 md:px-18 lg:px-20 py-3 sm:py-4 md:py-4 lg:py-4 rounded-full font-medium text-lg sm:text-xl md:text-xl lg:text-xl hover:bg-gray-100 transition shadow-lg"
                    >
                      Submit
                    </button>
                  </div>

                </div>
              </div>
            </div>

            {/* Right: Larger Doctor Image */}
            <div className="flex justify-center md:justify-end mt-4 sm:mt-8 md:mt-12 lg:mt-[300px] md:translate-x-[250px]">
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 sm:border-6 md:border-8 lg:border-8 border-white/40">
                <img
                  src="/assests/docp.png"
                  alt="Doctor consultation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ================= FOOTER CONTENT ON IMAGE ================= */}
      <footer className="w-full text-white py-20 sm:py-28 lg:py-40 px-2 sm:px-3 lg:px-4">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 lg:gap-20">
          {/* Brand Section */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <Leaf className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0" />
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">MEDI HOME</h3>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/80 leading-relaxed">
              Our mission is to provide you with the best care solutions.
            </p>
          </div>

          {/* Clinic Links */}
          <div className="flex flex-col">
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8">Clinic</h4>
            <ul className="space-y-4 text-lg sm:text-xl lg:text-2xl text-white/80">
              <li className="hover:text-white cursor-pointer transition">Home</li>
              <li className="hover:text-white cursor-pointer transition">Services</li>
              <li className="hover:text-white cursor-pointer transition">About Us</li>
              <li className="hover:text-white cursor-pointer transition">Contact Us</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col">
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8">Contact Us</h4>
            <div className="space-y-6 text-lg sm:text-xl lg:text-2xl text-white/80">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mt-1 flex-shrink-0" />
                <div>
                  <p>Reception 1</p>
                  <p>+91 1234567891</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mt-1 flex-shrink-0" />
                <div>
                  <p>Reception 2</p>
                  <p>+91 1234567891</p>
                </div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col">
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8">Address</h4>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/80 leading-relaxed">
              Medi Home,
              <br />
              Varacha,
              <br />
              Surat.
            </p>
          </div>
        </div>
      </footer>

    </section>
  );
};

export default Contact;