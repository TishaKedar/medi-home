import Sidebar from "./Sidebar";

export default function Hero() {
  return (
    <div className="relative w-full bg-[#F5F1E8]">

      {/* Sidebar */}
      <Sidebar />

      {/* Hero background image */}
      <div className="relative z-10 w-full">
        <img
          src="/assests/Hero.png"
          className="w-full h-auto sm:h-[800px] md:h-[600px] lg:h-[1030px] object-cover"
        />
      </div>

      {/* --------- Tablet-only circles --------- */}
      <div className="hidden md:flex lg:hidden flex-row items-center gap-32 mt-10 z-20 bg-[#FFF9EC] w-full py-10 justify-center">
        <div className="w-[260px] h-[260px] bg-white rounded-full shadow-xl flex items-center justify-center text-center">
          <p className="text-[#1E6D4E] text-3xl font-bold leading-snug px-4">
            Your Health,<br />Our Priority
          </p>
        </div>

        <div className="w-[140px] h-[140px] bg-[#1E6D4E] rounded-full shadow-xl flex items-center justify-center">
          <img src="/assests/Frame.png" className="w-[90px] h-[90px] object-contain" />
        </div>
      </div>

      {/* --------- Mobile circles --------- */}
      <div className="md:hidden flex flex-col items-center gap-10 mt-10 z-20">
        <div className="w-[250px] h-[250px] bg-white rounded-full shadow-xl flex items-center justify-center text-center">
          <p className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug px-4">
            Your Health,<br />Our Priority
          </p>
        </div>

        <div className="w-[120px] h-[120px] bg-[#1E6D4E] rounded-full shadow-xl flex items-center justify-center">
          <img src="/assests/Frame.png" className="w-[80px] h-[80px] object-contain" />
        </div>
      </div>

      {/* --------- Curved desktop image --------- */}
      <div className="absolute top-[300px] left-0 w-full z-20 pointer-events-none hidden lg:block">
        <img src="/assests/curvyy.png" className="w-full h-auto block" />
      </div>

      {/* --------- MOBILE SERVICES --------- */}
      <div className="md:hidden relative z-30 w-[95%] sm:w-[90%] mx-auto px-4 sm:px-0 pt-10 pb-10">
        <h2 className="text-center text-4xl sm:text-5xl font-bold text-black mb-6 sm:mb-8 font-heading">
          SERVICES WE PROVIDE
        </h2>

        <div className="relative mb-12">
          <p className="text-center text-lg sm:text-xl tracking-wide text-black font-display">
            HEALTHCARE SOLUTIONS, TAILORED FOR YOU
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-center">
          {[
            { title: "Physiotherapy", img: "/assests/pic1.png" },
            { title: "X-Ray Service", img: "/assests/pic2.png" },
            { title: "ECG Checkup", img: "/assests/pic3.png" },
            { title: "Blood Test", img: "/assests/pic4.png" }
          ].map((service, i) => (
            <div key={i} className="relative flex flex-col items-center">
              <div className="relative w-[250px] sm:w-[250px]">
                <img
                  src={i === 3 ? "/assests/greenbox.png" : "/assests/box.png"}
                  className="w-full h-auto object-contain"
                />
                <p className="absolute top-3 left-3 text-black font-semibold text-xl !sm:text-2xl !md:text-2xl z-20">
                  {service.title}
                </p>
                <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2
                                w-[200px] sm:w-[200px] h-[200px] sm:h-[200px]
                                rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
                  <img src={service.img} className="w-full h-full object-contain"/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --------- TABLET SERVICES --------- */}
      <div className="hidden md:block lg:hidden relative z-30">
        {/* Top light section */}
        <div className="w-full bg-[#FFF9EC] py-14">
          <div className="w-[90%] mx-auto">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-black mb-6 font-heading">
              SERVICES WE PROVIDE
            </h2>

            <div className="relative mb-12">
              <p className="text-center text-lg md:text-2xl tracking-wide text-black font-display">
                HEALTHCARE SOLUTIONS, TAILORED FOR YOU
              </p>

              <p className="text-center text-base md:text-lg text-black opacity-80">
                Delivering trust, comfort & care.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10 justify-center">
              {[
                { title: "Physiotherapy", img: "/assests/pic1.png" },
                { title: "X-Ray Service", img: "/assests/pic2.png" }
              ].map((service, i) => (
                <div key={i} className="flex flex-col items-center justify-center">
                  <div className="relative w-full max-w-[210px]">
                    <img
                      src={i === 3 ? "/assests/greenbox.png" : "/assests/box.png"}
                      className="w-full h-auto"
                    />
                    <p className="absolute top-4 left-4 text-black font-semibold text-[20px]">
                      {service.title}
                    </p>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2
                                    w-[170px] h-[170px] rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
                      <img src={service.img} className="w-full h-full object-contain" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Green section */}
        <div className="w-full bg-[#09B37D] py-14">
          <div className="w-[90%] mx-auto">
            <div className="grid grid-cols-2 gap-10 justify-center">
              {[
                { title: "ECG Checkup", img: "/assests/pic3.png" },
                { title: "Blood Test", img: "/assests/pic4.png" }
              ].map((service, i) => (
                <div key={i} className="flex flex-col items-center justify-center">
                  <div className="relative w-full max-w-[210px]">
                    <img
                      src={i === 3 ? "/assests/greenbox.png" : "/assests/box.png"}
                      className="w-full h-auto"
                    />
                    <p className="absolute top-4 left-4 text-black font-semibold text-[20px]">
                      {service.title}
                    </p>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2
                                    w-[170px] h-[170px] rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
                      <img src={service.img} className="w-full h-full object-contain" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --------- DESKTOP SERVICES --------- */}
      <div className="hidden lg:block relative z-30 w-[80%] mx-auto px-4 -mt-40">
        <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold text-black mb-6 md:mb-12 lg:mb-16 pt-12">
          SERVICES WE PROVIDE
        </h2>

        <div className="relative mb-16">
          <p className="text-center text-xl md:text-3xl lg:text-4xl tracking-wide mb-6 text-black leading-tight">
            HEALTHCARE SOLUTIONS, TAILORED FOR YOU
          </p>

          <p className="text-center text-base md:text-xl lg:text-xl text-black opacity-80 whitespace-nowrap">
            Delivering trust, comfort & care in the best way possible.
          </p>
        </div>

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
                  className="w-full h-auto"
                />

                <p className="absolute top-3 left-3 text-black font-semibold text-lg">
                  {service.title}
                </p>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2
                                w-[200px] h-[200px]
                                rounded-full overflow-hidden flex items-center justify-center bg-gray-300">
                  <img src={service.img} className="w-full h-full object-contain"/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
