import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ---------- DESKTOP ONLY SIDEBAR ---------- */}
      <div
        className="hidden lg:flex absolute z-30 bg-[#1E6D4E] rounded-[140px] 
                   flex-col items-center shadow-xl left-[3%] top-[5%] 
                   w-[280px] max-w-[280px] h-[630px] max-h-[630px]"
      >
        {/* White Circle */}
        <div
          className="absolute left-[9%] top-[3%] w-[230px] max-w-[230px]
                     aspect-square bg-white rounded-full shadow-md 
                     flex items-center justify-center"
        >
          <p className="text-black text-3xl font-semibold text-center">
            MEDI HOME
          </p>
        </div>

        {/* Menu Buttons */}
        <div
          className="absolute top-[45%] w-full flex flex-col items-center 
                     gap-8 text-white text-2xl font-medium tracking-wide"
        >
          <button>HOME</button>
          <button>ABOUT</button>
          <button>SERVICES</button>
          <button>CONTACT US</button>
        </div>

        {/* Big White Circle */}
        <div
          className="absolute left-[400px] top-[300px] max-w-[300px] max-h-[300px]
                     w-[300px] aspect-square bg-white 
                     rounded-full shadow-xl flex items-center justify-center text-center"
        >
          <p className="text-black text-4xl font-semibold leading-snug px-4">
            Your Health,<br />Our Priority
          </p>
        </div>

        {/* Leaf Circle */}
        <div
          className="absolute left-[670px] top-[440px] max-w-[130px] max-h-[130px]
                     w-[130px] aspect-square bg-[#1E6D4E] 
                     rounded-full shadow-xl flex items-center justify-center"
        >
          <img
            src="/assests/Frame.png"
            className="w-[70%] object-contain"
          />
        </div>
      </div>

      {/* ---------- HAMBURGER MENU (Mobile & Tablet) ---------- */}
      <div className="lg:hidden fixed top-5 left-5 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="w-12 h-12 bg-[#1E6D4E] rounded-xl flex flex-col justify-center items-center gap-1.5 shadow-lg"
        >
          <span className="w-7 h-1 bg-white rounded-full"></span>
          <span className="w-7 h-1 bg-white rounded-full"></span>
          <span className="w-7 h-1 bg-white rounded-full"></span>
        </button>

        {open && (
          <div className="mt-3 bg-[#1E6D4E] w-[200px] rounded-2xl shadow-xl p-5 flex flex-col gap-5 text-white text-xl font-medium transition-all">
            <h3 className="text-xl font-bold mb-2">MEDI HOME</h3>
            <button onClick={() => setOpen(false)}>HOME</button>
            <button onClick={() => setOpen(false)}>ABOUT</button>
            <button onClick={() => setOpen(false)}>SERVICES</button>
            <button onClick={() => setOpen(false)}>CONTACT US</button>
          </div>
        )}
      </div>
    </>
  );
}
