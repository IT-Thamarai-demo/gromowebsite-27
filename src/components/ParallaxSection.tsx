import { useEffect, useRef, ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxSection = ({ children, speed = 0.5, className = "" }: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const scrolled = window.pageYOffset;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + scrolled;
      const sectionHeight = rect.height;
      
      // Only apply parallax when section is in viewport
      if (scrolled + window.innerHeight > sectionTop && scrolled < sectionTop + sectionHeight) {
        const yPos = -(scrolled - sectionTop) * speed;
        sectionRef.current.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={sectionRef} className={`parallax-layer ${className}`}>
      {children}
    </div>
  );
};

export default ParallaxSection;
