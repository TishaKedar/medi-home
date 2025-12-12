import React, { useState, useEffect } from "react";
import { Leaf, Phone } from "lucide-react";

const Contact = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment submitted (stub)");
  };

  return (
    <section
      aria-label="Book an appointment"
      className="w-full relative overflow-hidden min-h-[800px] sm:min-h-[1000px] md:min-h-[1200px] lg:min-h-[1400px]"
      style={{
        background: isDesktop
          ? "#b7d1c8 url('/assests/footer.png') no-repeat center 500px / 100% 90%"
          : `linear-gradient(
              to bottom,
              #b7d1c8 0px,
              #b7d1c8 500px,
              #1F775B 500px,
              #1F775B 100%
            )`,
      }}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-16">

        {/* ================= MOBILE VIEW ================= */}
        <div className="block md:hidden">
          <div className="w-full mb-6 sm:mb-8 overflow-hidden">
            <h2 className="text-slate-800 font-extrabold relative max-w-2xl">
              <span className="block text-4xl sm:text-5xl">Book an</span>
              <span className="block text-6xl sm:text-7xl tracking-tight leading-tight mt-4">
                APPOINTMENT
              </span>
            </h2>
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[250px] sm:w-[300px] h-[200px] sm:h-[250px] bg-[#1F775B] rounded-full opacity-50 blur-3xl -z-10 pointer-events-none"></div>

            <div className="grid grid-cols-1 gap-0 items-start overflow-hidden">

              {/* Form */}
              <div className="relative mt-8 sm:mt-12 flex justify-center px-0">
                <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl h-[600px] sm:h-[700px] w-[400px] sm:w-[500px]">
                  <div className="flex flex-col justify-center h-full space-y-6 sm:space-y-7">

                    <input type="text" placeholder="Name"
                      className="w-full bg-transparent border-b-2 border-white/60 py-3 sm:py-4 px-2 text-white placeholder-white/80" />

                    <input type="email" placeholder="Email"
                      className="w-full bg-transparent border-b-2 border-white/60 py-3 sm:py-4 px-2 text-white placeholder-white/80" />

                    <input type="text" placeholder="Contact Number"
                      className="w-full bg-transparent border-b-2 border-white/60 py-3 sm:py-4 px-2 text-white placeholder-white/80" />

                    <input type="text" placeholder="Age"
                      className="w-full bg-transparent border-b-2 border-white/60 py-3 sm:py-4 px-2 text-white placeholder-white/80" />

                    <input type="text" placeholder="City"
                      className="w-full bg-transparent border-b-2 border-white/60 py-3 sm:py-4 px-2 text-white placeholder-white/80" />

                    <input type="text" placeholder="Message / Reason"
                      className="w-full bg-transparent border-b-2 border-white/60 py-3 sm:py-4 px-2 text-white placeholder-white/80" />

                    <div className="flex justify-center">
                      <button onClick={handleSubmit}
                        className="bg-white text-[#3d8b74] px-12 sm:px-16 py-3 sm:py-4 rounded-full font-medium text-lg sm:text-xl shadow-lg">
                        Submit
                      </button>
                    </div>

                  </div>
                </div>
              </div>

              {/* Doctor Image */}
              <div className="relative mt-4 sm:mt-8 flex justify-center px-10">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl border-4 sm:border-6 border-white/40">
                  <img src="/assests/docp.png" className="w-full h-full object-cover" />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ================= TABLET VIEW (FIXED STACKED LAYOUT) ================= */}
<div className="hidden md:block lg:hidden">
  <div className="w-full mb-8 overflow-hidden">
    <h2 className="text-slate-800 font-extrabold relative max-w-2xl">
      <span className="block text-6xl">Book an</span>
      <span className="block text-8xl tracking-tight leading-tight mt-4">
        APPOINTMENT
      </span>
    </h2>
  </div>

  <div className="relative w-full overflow-hidden">

    {/* Soft green glow */}
    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[320px] h-[280px] 
        bg-[#1F775B] rounded-full opacity-50 blur-3xl -z-10"></div>

    {/* 🔥 Entire tablet layout is now STACKED */}
    <div className="flex flex-col justify-center items-center w-full">

      {/* -------- FORM -------- */}
      <div className="w-full flex justify-center mt-10">
        <div className="bg-white/20 backdrop-blur-md rounded-3xl p-10 shadow-xl 
            w-[90%] max-w-[650px]">

          <div className="flex flex-col justify-center h-full space-y-8">

            <input type="text" placeholder="Name"
              className="w-full bg-transparent border-b-2 border-white/60 py-4 px-2 
              text-white placeholder-white/80" />

            <input type="email" placeholder="Email"
              className="w-full bg-transparent border-b-2 border-white/60 py-4 px-2 
              text-white placeholder-white/80" />

            <input type="text" placeholder="Contact Number"
              className="w-full bg-transparent border-b-2 border-white/60 py-4 px-2 
              text-white placeholder-white/80" />

            <input type="text" placeholder="Age"
              className="w-full bg-transparent border-b-2 border-white/60 py-4 px-2 
              text-white placeholder-white/80" />

            <input type="text" placeholder="City"
              className="w-full bg-transparent border-b-2 border-white/60 py-4 px-2 
              text-white placeholder-white/80" />

            <input type="text" placeholder="Message / Reason"
              className="w-full bg-transparent border-b-2 border-white/60 py-4 px-2 
              text-white placeholder-white/80" />

            {/* Button responsive */}
            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                className="bg-white text-[#3d8b74] px-16 py-4 rounded-full 
                text-xl font-medium shadow-lg w-full sm:w-auto">
                Submit
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* -------- DOCTOR IMAGE BELOW FORM -------- */}
      <div className="mt-10 flex justify-center">
        <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full 
            overflow-hidden shadow-2xl border-8 border-white/40">
          <img
            src="/assests/docp.png"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  </div>
</div>

        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden lg:block">
          <div className="w-full mb-8 overflow-hidden">
            <h2 className="text-slate-800 font-extrabold">
              <span className="block text-7xl">Book an</span>
              <span className="block text-[130px] leading-tight mt-6">
                APPOINTMENT
              </span>
            </h2>
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[350px] h-[320px] bg-[#5a9b85] rounded-full opacity-50 blur-3xl -z-10"></div>

            <div className="grid grid-cols-12 gap-0 items-start">

              {/* Form */}
              <div className="relative mt-20 col-span-6 flex justify-start pr-4">
                <div className="bg-white/20 backdrop-blur-md rounded-3xl p-12 shadow-xl h-[800px] w-full max-w-[900px]">
                  <div className="flex flex-col justify-center h-full space-y-8">

                    <input type="text" placeholder="Name"
                      className="w-full bg-transparent border-b-2 border-white/60 py-4 px-2 text-white placeholder-white/80" />

                    <input type="email" placeholder="Email"
                      className="w-full bg-transparent border-b-2 border-white/60 py-4 px-2 text-white placeholder-white/80" />

                    <input type="text" placeholder="Contact Number"
                      className="w-full bg-transparent border-b-2 border-white/60 py-4 px-2 text-white placeholder-white/80" />

                    <input type="text" placeholder="Age"
                      className="w-full bg-transparent border-b-2 border-white/60 py-4 px-2 text-white placeholder-white/80" />

                    <input type="text" placeholder="City"
                      className="w-full bg-transparent border-b-2 border-white/60 py-4 px-2 text-white placeholder-white/80" />

                    <input type="text" placeholder="Message / Reason"
                      className="w-full bg-transparent border-b-2 border-white/60 py-4 px-2 text-white placeholder-white/80" />

                    <div className="flex justify-center">
                      <button onClick={handleSubmit}
                        className="bg-white text-[#3d8b74] px-20 py-4 rounded-full font-medium text-xl shadow-lg">
                        Submit
                      </button>
                    </div>

                  </div>
                </div>
              </div>

              {/* Doctor Image */}
              <div className="relative mt-[300px] col-span-6 flex justify-end pl-4 -translate-x-25">
  <div className="w-[350px] h-[350px] rounded-full overflow-hidden shadow-2xl">
    <img src="/assests/docp.png" className="w-full h-full object-cover" />
  </div>
</div>

            </div>
          </div>
        </div>

      </div>

      {/* ================= FOOTER CONTENT ================= */}
      <footer className="w-full text-white py-20 sm:py-28 lg:py-40 px-2 sm:px-3 lg:px-4 text-center sm:text-left">

  <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 lg:gap-20 place-items-center sm:place-items-start">

    {/* Brand */}
    <div className="flex flex-col items-center sm:items-start">
    <div className="flex items-center gap-4 mb-8">
    <div className="flex items-center gap-4 mb-8"> <Leaf className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16" />  </div>

  <h3 className="text-3xl sm:text-4xl lg:text-3xl font-bold whitespace-nowrap">
  MEDI HOME
</h3>

</div>



      <p className="text-lg sm:text-xl lg:text-1xl text-white/80">
        Our mission is to provide you with the best care solutions.
      </p>
    </div>

    {/* Clinic Links */}
    <div className="flex flex-col items-center sm:items-start">
      <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8">Clinic</h4>

      <ul className="space-y-8 text-lg sm:text-xl lg:text-3xl text-white/80">
        <li className="hover:text-white">Home</li>
        <li className="hover:text-white">Services</li>
        <li className="hover:text-white">About Us</li>
        <li className="hover:text-white">Contact Us</li>
      </ul>
    </div>

    {/* Contact */}
    <div className="flex flex-col items-center sm:items-start">
      <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8">
        Contact Us
      </h4>

      <div className="space-y-6 text-lg sm:text-xl lg:text-3xl text-white/80">

        <div className="flex items-start gap-4">
          <Phone className="w-6 h-6 sm:w-7 sm:h-7 lg:w-10 lg:h-10 mt-1" />
          <div>
            <p>Reception 1</p>
            <p>+91 1234567891</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Phone className="w-6 h-6 sm:w-7 sm:h-7 lg:w-10 lg:h-10 mt-1" />
          <div>
            <p>Reception 2</p>
            <p>+91 1234567891</p>
          </div>
        </div>

      </div>
    </div>

    {/* Address */}
    <div className="flex flex-col items-center sm:items-start">
      <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8">
        Address
      </h4>

      <p className="text-lg sm:text-xl lg:text-3xl text-white/80">
        Medi Home,<br />
        Varacha,<br />
        Surat.
      </p>
    </div>

  </div>
</footer>



    </section>
  );
};

export default Contact;

