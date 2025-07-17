import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Book Your Business Online",
      subtitle: "Professional websites that drive results and grow your business",
      bgColor: "from-blue-600 to-purple-600"
    },
    {
      title: "Book Your E-commerce Store",
      subtitle: "Sell online with powerful shopping platforms - Book now!",
      bgColor: "from-green-600 to-teal-600"
    },
    {
      title: "Book Mobile-First Design",
      subtitle: "Responsive websites that work everywhere - Start today!",
      bgColor: "from-orange-600 to-red-600"
    },
    {
      title: "Book SEO Services",
      subtitle: "Get found by your customers online - Book consultation!",
      bgColor: "from-purple-600 to-pink-600"
    },
    {
      title: "Book 24/7 Support",
      subtitle: "We're here when you need us most - Book your business!",
      bgColor: "from-indigo-600 to-blue-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-64 overflow-hidden rounded-2xl mb-8">
      {/* Slides Container */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <div className={`h-full bg-gradient-to-r ${slide.bgColor} flex items-center justify-center text-white text-center px-8`}>
              <div className="animate-fade-in">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h3>
                <p className="text-lg opacity-90">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200 hover:scale-110"
        title="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200 hover:scale-110"
        title="Next slide"
      >
        <ChevronRight className="h-5 w-5 text-white" />
      </button>

      {/* Dot Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            title={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;