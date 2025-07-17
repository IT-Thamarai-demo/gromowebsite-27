
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Terms from "./pages/Terms";
import WhyUs from "./pages/WhyUs";
import Offers from "./pages/Offers";
import Instagram from "./pages/Instagram";
import Navigation from "./components/Navigation";
import GromoBot from "./components/GromoBot";
import Preloader from "./components/Preloader";
import FestivalPopup from "./components/FestivalPopup";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="smooth-scroll">
          <Preloader />
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/instagram" element={<Instagram />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <GromoBot />
          <WhatsAppButton />
          <FestivalPopup />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
