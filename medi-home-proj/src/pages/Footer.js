import React from "react";

const Footer = () => {

  const openLink = (href) => {
    if (!href) return;
    if (href.startsWith("/")) {
      window.location.href = href; // normal navigation
    } else {
      window.open(href, "_blank"); // external link
    }
  };

  return (
    <footer className="w-full text-white bg-[#1F775B] pt-8 sm:pt-10 md:pt-12 lg:pt-12 pb-4 sm:pb-5 md:pb-6 lg:pb-6 select-none">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

        {/* --- Top Footer --- */}
        <div className="flex flex-col lg:flex-row w-full gap-10 lg:gap-6">

          {/* Logo + mission */}
          <div className="lg:flex-1 max-w-[260px]">
            <button onClick={() => window.scrollTo(0, 0)}>
              <img
                src="/assets/logo_white.png"
                alt="Medi Home"
                className="w-[150px] mb-4"
              />
            </button>

            <p className="text-sm text-white/80 leading-6">
              Our mission is to provide you with the best healthcare solutions.
            </p>
          </div>

          {/* Clinic column */}
          <div className="lg:flex-1">
            <h3 className="font-semibold mb-4 text-[15px]">Clinic</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><button onClick={() => window.scrollTo(0, 0)}>Home</button></li>
              <li><button onClick={() => openLink("/services")}>Services</button></li>
              <li><button onClick={() => openLink("/about")}>About Us</button></li>
              <li><button onClick={() => openLink("/contact")}>Contact Us</button></li>
            </ul>
          </div>

          {/* Contact column */}
          <div className="lg:flex-1">
            <h3 className="font-semibold mb-4 text-[15px]">Contact Us</h3>

            <div className="space-y-4 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <img src="/assets/phone_icon.svg" alt="" className="w-4 h-4 mt-[2px]" />
                <div>
                  <p className="font-medium text-white">Reception 1</p>
                  <p>+91 1234567891</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <img src="/assets/phone_icon.svg" alt="" className="w-4 h-4 mt-[2px]" />
                <div>
                  <p className="font-medium text-white">Reception 2</p>
                  <p>+91 1234567891</p>
                </div>
              </div>
            </div>
          </div>

          {/* Address column */}
          <div className="lg:flex-1">
            <h3 className="font-semibold mb-4 text-[15px]">Address</h3>
            <p className="text-sm text-white/80 leading-6">
              Medi Home, Varacha,<br />
              Surat.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-10 pt-4" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row w-full justify-between items-center gap-3 text-white/80 text-sm">
          <span>© 2025 Medi Home. All rights reserved.</span>

          <div className="flex gap-5">
            <button
              onClick={() => openLink("/privacy-policy")}
              className="hover:text-white transition"
            >
              Privacy Policy
            </button>

            <span>|</span>

            <button
              onClick={() => openLink("/payment-terms")}
              className="hover:text-white transition"
            >
              Payment Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
