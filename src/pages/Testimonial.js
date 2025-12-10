import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SiComma } from "react-icons/si";

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const testimonials = [
    {
      name: "Ritu Prasad",
      text: "Was treated with great care here. The diagnosis and treatment was top notch...",
      bgImage: "/assests/testi.png",
      textBoxImage: "/assests/text.png"
    },
    {
      name: "Ritu Prasad",
      text: "Was treated with great care here. The diagnosis and treatment was top notch...",
      bgImage: "/assests/testi.png",
      textBoxImage: "/assests/text.png"
    },
    {
      name: "Ritu Prasad",
      text: "Was treated with great care here. The diagnosis and treatment was top notch...",
      bgImage: "/assests/testi.png",
      textBoxImage: "/assests/text.png"
    },
    {
      name: "Amit Kumar",
      text: "Was treated with great care here. The diagnosis and treatment was top notch...",
      bgImage: "/assests/testi.png",
      textBoxImage: "/assests/text.png"
    },
    {
      name: "Priya Sharma",
      text: "Was treated with great care here. The diagnosis and treatment was top notch...",
      bgImage: "/assests/testi.png",
      textBoxImage: "/assests/text.png"
    },
    {
      name: "Rajesh Gupta",
      text: "Was treated with great care here. The diagnosis and treatment was top notch...",
      bgImage: "/assests/testi.png",
      textBoxImage: "/assests/text.png"
    }
  ];

  // ⭐ FIX: Dynamic items per screen
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth >= 1024) setItemsPerPage(3);
      else if (window.innerWidth >= 768) setItemsPerPage(2);
      else setItemsPerPage(1);
    };

    updateItems();
    window.addEventListener("resize", updateItems);

    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((p) => (p === totalPages - 1 ? 0 : p + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((p) => (p === 0 ? totalPages - 1 : p - 1));
  };

  return (
    <section className="w-full bg-[#F5F1E8] py-12 sm:py-16 md:py-20 lg:py-20">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-6">

        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          WHAT OUR PATIENTS SAY ABOUT US?
        </h2>

        {/* CAROUSEL */}
        <div className="relative px-0 overflow-hidden">

          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >

            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="min-w-full max-w-full flex-shrink-0 overflow-hidden box-border"
              >

                {/* DESKTOP – 3 CARDS */}
                <div className="hidden lg:grid grid-cols-3 gap-10">
                  {testimonials
                    .slice(pageIndex * 3, (pageIndex + 1) * 3)
                    .map((t, i) => (
                      <Card key={i} t={t} />
                    ))}
                </div>

                {/* TABLET – 2 CARDS */}
                <div className="hidden md:grid lg:hidden grid-cols-2 gap-10">
                  {testimonials
                    .slice(pageIndex * 2, (pageIndex + 1) * 2)
                    .map((t, i) => (
                      <Card key={i} t={t} />
                    ))}
                </div>

                {/* MOBILE – 1 CARD */}
                <div className="md:hidden flex justify-center">
                  {testimonials
                    .slice(pageIndex, pageIndex + 1)
                    .map((t, i) => (
                      <div key={i} className="max-w-sm w-full">
                        <Card t={t} />
                      </div>
                    ))}
                </div>

              </div>
            ))}
          </div>

          {/* BUTTONS */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-20 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-20 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-12">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`rounded-full transition-all ${
                index === currentIndex
                  ? "w-12 h-3 bg-gray-800"
                  : "w-3 h-3 bg-gray-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

/* CARD COMPONENT */
function Card({ t }) {
  return (
    <div className="relative p-2">
      <img src={t.bgImage} className="w-full h-auto object-contain" />

      <div className="absolute inset-0 flex flex-col items-center px-8 pt-16">
        <h3 className="text-3xl font-bold text-black mb-8">{t.name}</h3>

        <div className="relative w-full max-w-[360px] mt-4">
          <div className="absolute -top-6 right-4 flex -space-x-2 text-white text-7xl z-10">
            <SiComma />
            <SiComma />
          </div>

          <img src={t.textBoxImage} className="w-full h-auto object-contain" />

          <div className="absolute inset-0 flex items-center justify-center p-10">
            <p className="text-black text-lg leading-relaxed">{t.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
