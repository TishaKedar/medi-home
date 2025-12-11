import Sidebar from "./Sidebar";

export default function Hero() {
  return (
    <div className="relative w-full bg-[#F5F1E8]">

      <Sidebar />

      {/* Hero background */}
      <div className="relative z-10 w-full">
        <img
          src="/assests/Hero.png"
          className="w-full h-[1030px] sm:h-[800px] md:h-[600px] lg:h-[1030px] object-cover"
        />
      </div>

      {/* ---- Mobile Circles ---- */}
      <div className="md:hidden flex flex-col items-center gap-10 mt-10 z-20">
        
        {/* White Circle */}
        <div className="w-[200px] h-[200px] bg-white rounded-full shadow-xl flex items-center justify-center">
          <p className="text-black text-xl sm:text-2xl font-semibold text-center font-heading">
            MEDI HOME
          </p>
        </div>

        {/* Big Circle */}
        <div className="w-[250px] h-[250px] bg-white rounded-full shadow-xl flex items-center justify-center text-center">
          <p className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug px-4 font-heading">
            Your Health,<br />Our Priority
          </p>
        </div>

        {/* Leaf Circle */}
        <div className="w-[120px] h-[120px] bg-[#1E6D4E] rounded-full shadow-xl flex items-center justify-center">
          <img src="/assests/Frame.png" className="w-[80px] h-[80px] object-contain" />
        </div>
      </div>

      {/* Curved image (desktop only) */}
      <div className="absolute top-[450px] left-0 w-full z-20 pointer-events-none hidden lg:block">
        <img src="/assests/curvyy.png" className="w-full h-auto block" />
      </div>

      {/* ---------------- MOBILE SERVICES ---------------- */}
      <div className="md:hidden relative z-30 w-[95%] sm:w-[90%] mx-auto px-4 sm:px-0 pt-10 pb-10">
        
        {/* Heading */}
        <h2 className="text-center text-xl sm:text-2xl font-bold text-black mb-6 sm:mb-8 font-heading">
          SERVICES WE PROVIDE
        </h2>

        {/* Subtext */}
        <div className="relative mb-12">
          <p className="text-center text-lg sm:text-xl tracking-wide text-black font-display">
            HEALTHCARE SOLUTIONS, TAILORED FOR YOU
          </p>

          {/* Small Line Under */}
          <p className="absolute left-1/2 -translate-x-1/2 mt-3 text-center text-sm sm:text-base text-black opacity-80">
            Delivering trust, comfort & care.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {[ 
            { title: "Physiotherapy", img: "/assests/pic1.png" },
            { title: "X-Ray Service", img: "/assests/pic2.png" },
            { title: "ECG Checkup", img: "/assests/pic3.png" },
            { title: "Blood Test", img: "/assests/pic4.png" }
          ].map((service, i) => (
            <div key={i} className="relative flex flex-col items-center">
              <div className="relative w-[250px] sm:w-[200px]">
                <img src="/assests/box.png" className="w-full h-auto object-contain" />

                <p className="absolute top-2 sm:top-3 left-2 sm:left-3 text-black font-semibold text-sm sm:text-lg">
                  {service.title}
                </p>

                <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2
                                w-[180px] sm:w-[160px] h-[180px] sm:h-[160px]
                                rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
                  <img src={service.img} className="w-full h-full object-contain"/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- TABLET SERVICES ---------------- */}
      <div className="hidden md:block lg:hidden relative z-30">
        
        {/* Light top */}
        <div className="w-full bg-[#FFF9EC] py-12">
          <div className="w-[90%] mx-auto">
            
            <h2 className="text-center text-2xl md:text-3xl font-bold text-black mb-4 font-heading">
              SERVICES WE PROVIDE
            </h2>

            <div className="relative mb-10">
              <p className="text-center text-lg md:text-xl tracking-wide text-black leading-tight px-2 font-display">
                HEALTHCARE SOLUTIONS, TAILORED FOR YOU
              </p>

              <p className="absolute left-1/2 -translate-x-1/2 mt-4 text-center text-base md:text-lg text-black opacity-80">
                Delivering trust, comfort & care.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[ 
                { title: "Physiotherapy", img: "/assests/pic1.png" },
                { title: "X-Ray Service", img: "/assests/pic2.png" }
              ].map((service, i) => (
                <div key={i} className="flex flex-col items-center justify-center">
                  <div className="relative w-full max-w-[160px]">
                    <img src="/assests/box.png" className="w-full h-auto" />

                    <p className="absolute top-2 left-2 text-black font-semibold text-xs md:text-sm">
                      {service.title}
                    </p>

                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2
                                    w-[120px] h-[120px] rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
                      <img src={service.img} className="w-full h-full object-contain"/>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Green bottom */}
        <div className="w-full bg-[#09B37D] py-12">
          <div className="w-[90%] mx-auto">
            <div className="grid grid-cols-2 gap-6">
              
              {[ 
                { title: "ECG Checkup", img: "/assests/pic3.png" },
                { title: "Blood Test", img: "/assests/pic4.png" }
              ].map((service, i) => (
                <div key={i} className="flex flex-col items-center justify-center">
                  <div className="relative w-full max-w-[160px]">
                    <img src="/assests/box.png" className="w-full h-auto" />

                    <p className="absolute top-2 left-2 text-black font-semibold text-xs md:text-sm">
                      {service.title}
                    </p>

                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2
                                    w-[120px] h-[120px] rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
                      <img src={service.img} className="w-full h-full object-contain"/>
                    </div>

                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>

      {/* ---------------- DESKTOP SERVICES ---------------- */}
      <div className="hidden lg:block relative z-30 w-[80%] mx-auto px-4">

        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold text-black mb-6 md:mb-12 lg:mb-20 pt-12">
          SERVICES WE PROVIDE
        </h2>

        {/* Subtext */}
        <div className="relative mb-20">
          <p className="text-center text-xl md:text-3xl lg:text-5xl tracking-wide mb-6 text-black leading-tight">
            HEALTHCARE SOLUTIONS, TAILORED FOR YOU
          </p>

          <p className="absolute left-1/2 -translate-x-1/2 mt-4 
                        text-center text-base md:text-xl lg:text-2xl 
                        text-black opacity-80 whitespace-nowrap">
            Delivering trust, comfort & care in the best way possible. A place where you and your health will be nurtured.
          </p>
        </div>

        {/* Cards Container with fixed positioning */}
        <div className="relative h-[600px] -mb-80">
          <div className="absolute top-56 left-0 right-0 grid grid-cols-4 gap-10">
            
            {[
              { title: "Physiotherapy", img: "/assests/pic1.png" },
              { title: "X-Ray Service", img: "/assests/pic2.png" },
              { title: "ECG Checkup", img: "/assests/pic3.png" },
              { title: "Blood Test", img: "/assests/pic4.png" }
            ].map((service, i) => (
              <div key={i} className="relative flex flex-col items-center">
               
                <div className="relative w-[300px]">
                  <img src="/assests/box.png" className="w-full h-auto" />

                  <p className="absolute top-4 left-4 text-black font-semibold text-lg md:text-xl lg:text-2xl">
                    {service.title}
                  </p>

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2
                                  w-[260px] h-[260px] rounded-full overflow-hidden flex items-center justify-center bg-gray-300">
                    <img src={service.img} className="w-full h-full object-contain"/>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Add spacing after cards */}
        <div className="h-0"></div>

      </div>

    </div>
  );
}