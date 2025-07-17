import { useEffect, useState } from "react";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center animate-fade-in">
        <div className="mb-6">
          <img 
            src="/lovable-uploads/f88572c8-ada3-454d-a6c7-a994495023db.png" 
            alt="Gromo Logo" 
            className="w-24 h-24 mx-auto animate-pulse"
          />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          Gromo
        </h1>
        <p className="text-lg text-gray-600 animate-slide-in">
          Dream It & Grow Business
        </p>
        <div className="mt-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;