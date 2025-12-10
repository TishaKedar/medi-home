import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ---------- DESKTOP ONLY SIDEBAR (lg and above) ---------- */}
      <div className="hidden lg:flex absolute z-30 bg-[#1E6D4E] rounded-[165px] flex-col items-center shadow-xl
                      left-[3%] top-[5%] w-[22%] lg:w-[339px] md:h-[700px] lg:h-[800px]">
        {/* White Circle */}
        <div className="absolute left-[5%] top-[3%] w-[70%] lg:w-[290px] aspect-square bg-white rounded-full shadow-md flex items-center justify-center">
          <p className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-center">
            MEDI HOME
          </p>
        </div>

        {/* Menu Buttons */}
        <div className="absolute top-[45%] w-full flex flex-col items-center gap-8 md:gap-12 text-white text-xl sm:text-2xl md:text-3xl lg:text-3xl font-medium tracking-wide">
          <button>HOME</button>
          <button>ABOUT</button>
          <button>SERVICES</button>
          <button>CONTACT US</button>
        </div>

        {/* Big White Circle */}
        <div className="absolute left-[35%] md:left-[40%] top-[55%] md:top-[50%] lg:left-[400px] lg:top-[450px]
                        w-[200px] sm:w-[300px] md:w-[350px] lg:w-[370px] aspect-square bg-white rounded-full shadow-xl flex items-center justify-center text-center">
          <p className="text-black text-lg sm:text-2xl md:text-4xl lg:text-5xl font-semibold leading-snug px-4 md:px-6">
            Your Health,<br />Our Priority
          </p>
        </div>

        {/* Leaf Circle */}
        <div className="absolute left-[55%] md:left-[60%] top-[75%] md:top-[65%] lg:left-[740px] lg:top-[630px]
                        w-[80px] sm:w-[120px] md:w-[130px] lg:w-[150px] aspect-square bg-[#1E6D4E] rounded-full shadow-xl flex items-center justify-center">
          <img src="/assests/Frame.png" className="w-[50%] sm:w-[70%] md:w-[80%] lg:w-[110px] object-contain" />
        </div>
      </div>

      {/* ---------- HAMBURGER MENU (Mobile & Tablet: below lg) ---------- */}
      <div className="lg:hidden fixed top-5 left-5 z-50">
        {/* Hamburger Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="w-12 h-12 bg-[#1E6D4E] rounded-xl flex flex-col justify-center items-center gap-1.5 shadow-lg"
        >
          <span className="w-7 h-1 bg-white rounded-full"></span>
          <span className="w-7 h-1 bg-white rounded-full"></span>
          <span className="w-7 h-1 bg-white rounded-full"></span>
        </button>

        {/* Slide-down Menu */}
        {open && (
          <div className="mt-3 bg-[#1E6D4E] w-[200px] rounded-2xl shadow-xl p-5 flex flex-col gap-5 text-white text-xl font-medium transition-all">
            <button onClick={() => setOpen(false)}>HOME</button>
            <button onClick={() => setOpen(false)}>ABOUT</button>
            <button onClick={() => setOpen(false)}>SERVICES</button>
            <button onClick={() => setOpen(false)}>CONTACT US</button>
          </div>
        )}
      </div>

      {/* ---------- TABLET SIDEBAR CIRCLES (md only: 769px-1023px) ---------- */}
      <div className="hidden md:flex lg:hidden absolute z-30 flex-col items-start
                      left-[2%] top-[3%]">
        {/* White Circle */}
        <div className="relative w-[100px] h-[100px] bg-white rounded-full shadow-md flex items-center justify-center">
          <p className="text-black text-sm font-semibold text-center px-2">
            MEDI HOME
          </p>
        </div>

        {/* Big White Circle */}
        <div className="relative left-[60px] top-[30px] w-[140px] h-[140px] bg-white rounded-full shadow-xl flex items-center justify-center text-center">
          <p className="text-black text-xs font-semibold leading-snug px-2">
            Your Health,<br />Our Priority
          </p>
        </div>

        {/* Leaf Circle */}
        <div className="relative left-[100px] top-[50px] w-[70px] h-[70px] bg-[#1E6D4E] rounded-full shadow-xl flex items-center justify-center">
          <img src="/assests/Frame.png" className="w-[50px] object-contain" />
        </div>
      </div>
    </>
  );
}

