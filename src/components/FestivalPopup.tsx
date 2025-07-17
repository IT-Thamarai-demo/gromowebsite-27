import { useState, useEffect } from "react";
import { X, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const FestivalPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 180000); // 3 minutes

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full animate-scale-in">
        <CardContent className="p-6 relative">
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-full p-3 w-16 h-16 mx-auto mb-4">
              <Gift className="h-10 w-10 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              🎉 Festival Special Offer!
            </h3>
            
            <p className="text-gray-600 mb-4">
              Get your business online with our special pricing
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 mb-6">
              <p className="text-lg font-semibold text-primary">
                Website @ ₹1500
              </p>
              <p className="text-lg font-semibold text-primary">
                E-commerce @ ₹3000
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Limited time offer!
              </p>
            </div>
            
            <Button asChild className="w-full">
              <Link to="/contact" onClick={() => setIsVisible(false)}>
                Contact Us Now
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FestivalPopup;