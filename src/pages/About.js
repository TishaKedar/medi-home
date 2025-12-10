export default function About() {
  return (
    <div className="relative w-full mt-0 sm:mt-0 md:mt-0 lg:-mt-[500px]">

      {/* Green Background */}
      <div className="absolute inset-0 w-full h-[800px] sm:h-[1000px] md:h-[1000px] lg:h-[1400px] bg-[#09B37D] z-0"></div>

      {/* Content */}
      <section
        className="relative z-10 w-full h-[800px] sm:h-[1000px] md:h-[1000px] lg:h-[1400px] pt-8 sm:pt-12 md:pt-12 lg:pt-0"
        aria-label="About"
      >
        <div className="max-w-full mx-auto h-full px-4 sm:px-6 md:px-8 lg:px-0 flex flex-col lg:flex-row items-start">

          {/* LEFT TEXT */}
          <div className="w-full lg:w-1/2 flex items-center lg:items-end h-full pl-4 sm:pl-8 md:pl-12 lg:pl-72 pr-4 sm:pr-6 md:pr-8 lg:pr-12 pb-8 sm:pb-12 md:pb-12 lg:pb-16">
            <div className="text-center lg:text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-normal text-white mb-2 sm:mb-3 md:mb-3 lg:mb-5">About</h3>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold text-white mb-4 sm:mb-5 md:mb-6 lg:mb-10 tracking-wide">MEDI HOME</h2>

              <p className="text-white text-xs sm:text-sm md:text-base lg:text-xl leading-relaxed mb-2 sm:mb-3 md:mb-4 lg:mb-7 max-w-full lg:max-w-none">
                We at MEDI HOME believe in "your health, our priority". We provide the best healthcare solutions and most
                informative diagnosis. We believe that our patient's health is our first priority.
              </p>

              <p className="text-white text-xs sm:text-sm md:text-base lg:text-xl leading-relaxed mb-2 sm:mb-3 md:mb-4 lg:mb-7 max-w-full lg:max-w-none">
                Our doctor, DR. SHETH has an MD in Cardiology from
                AIIMS Delhi. He has practiced
                medicine for over 8 years and has been honoured
                with prestigious awards too. He is a well-known heart surgeon all over India and is one of the best.
              </p>

              <p className="text-white text-xs sm:text-sm md:text-base lg:text-xl leading-relaxed max-w-full lg:max-w-none">
                Your health at MEDI HOME is in the best hands and
                services.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2 flex items-center lg:items-end justify-center lg:justify-end h-full overflow-hidden mt-4 sm:mt-6 md:mt-6 lg:mt-0">
            <img
              src="/assests/doc.jpg"
              alt="Doctor with patient"
              className="
                w-full
                max-w-[600px]
                sm:max-w-[520px]
                md:max-w-[600px]
                lg:w-[1100px]
                xl:w-[1250px]
                h-auto
                lg:h-[550px]
                rounded-tl-2xl
                shadow-2xl
                object-cover
              "
            />
          </div>

        </div>
      </section>
    </div>
  );
}
