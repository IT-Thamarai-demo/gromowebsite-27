
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Store, 
  ShoppingCart, 
  Smartphone, 
  Building, 
  Coffee,
  Star,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  DollarSign,
  Clock,
  Palette,
  MonitorSpeaker,
  Search,
  HeartHandshake,
  ChevronLeft,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HeroSlider from "@/components/HeroSlider";

// Import images
import heroBanner from "@/assets/hero-banner.jpg";
import teamPhoto from "@/assets/team-photo.jpg";
import portfolioMobileStore from "@/assets/portfolio-mobile-store.jpg";
import portfolioHotel from "@/assets/portfolio-hotel.jpg";
import portfolioFashion from "@/assets/portfolio-fashion.jpg";
import portfolioTeaStall from "@/assets/portfolio-tea-stall.jpg";
import portfolioElectronics from "@/assets/portfolio-electronics.jpg";
import portfolioGrocery from "@/assets/portfolio-grocery.jpg";
import testimonialRahul from "@/assets/testimonial-rahul.jpg";
import testimonialPriya from "@/assets/testimonial-priya.jpg";
import testimonialAmit from "@/assets/testimonial-amit.jpg";
import testimonialMeera from "@/assets/testimonial-meera.jpg";
import testimonialSuresh from "@/assets/testimonial-suresh.jpg";

const Index = () => {
  const services = [
    {
      icon: Store,
      title: "Shop Websites",
      description: "Beautiful websites for retail stores, boutiques, and local shops to showcase products and attract customers."
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Websites",
      description: "Full-featured online stores with payment integration, inventory management, and customer accounts."
    },
    {
      icon: Smartphone,
      title: "Mobile Store Sites",
      description: "Specialized websites for mobile phone shops with product catalogs, repair services, and contact forms."
    },
    {
      icon: Building,
      title: "Hotel Websites",
      description: "Professional websites for hotels with booking systems, room galleries, and guest information."
    },
    {
      icon: Coffee,
      title: "Tea Stall Pages",
      description: "Simple, effective websites for tea stalls and cafes to share menus, location, and contact details."
    }
  ];

  const portfolioProjects = [
    {
      title: "Sunrise Mobile Store",
      category: "Mobile Shop",
      image: portfolioMobileStore,
      description: "Modern mobile store website with product showcase and repair services"
    },
    {
      title: "Grand Palace Hotel",
      category: "Hotel",
      image: portfolioHotel,
      description: "Luxury hotel website with booking system and room galleries"
    },
    {
      title: "Fashion Hub Boutique",
      category: "Local Shop",
      image: portfolioFashion,
      description: "Elegant fashion store with product catalog and online ordering"
    },
    {
      title: "TeaCafe Express",
      category: "Tea Stall",
      image: portfolioTeaStall,
      description: "Cozy tea stall website with menu and location details"
    },
    {
      title: "ElectroMart Store",
      category: "E-commerce",
      image: portfolioElectronics,
      description: "Full e-commerce platform with payment integration"
    },
    {
      title: "Green Grocery",
      category: "Local Shop",
      image: portfolioGrocery,
      description: "Fresh grocery store with online ordering system"
    }
  ];

  const whyChooseUs = [
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Budget-friendly packages designed for small businesses"
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Get your website live within 7-10 days"
    },
    {
      icon: Palette,
      title: "Clean Design",
      description: "Modern, professional designs that convert visitors"
    },
    {
      icon: MonitorSpeaker,
      title: "Mobile Friendly",
      description: "Fully responsive designs that work on all devices"
    },
    {
      icon: Search,
      title: "SEO Optimized",
      description: "Built to rank well in search engines"
    },
    {
      icon: HeartHandshake,
      title: "Friendly Support",
      description: "Dedicated support team to help you succeed"
    }
  ];

  const testimonials = [
    {
      text: "Gromo's team created a beautiful and fast website for my mobile store. My customers love it!",
      author: "Rahul M.",
      role: "Mobile Shop Owner",
      image: testimonialRahul
    },
    {
      text: "Our hotel bookings increased by 40% after getting our new website from Gromo. Highly recommended!",
      author: "Priya S.",
      role: "Hotel Manager",
      image: testimonialPriya
    },
    {
      text: "Simple, affordable, and exactly what my tea stall needed. Thank you Gromo team!",
      author: "Amit K.",
      role: "Tea Stall Owner",
      image: testimonialAmit
    },
    {
      text: "The e-commerce website boosted our online sales by 60%. Professional work!",
      author: "Meera T.",
      role: "Fashion Store Owner",
      image: testimonialMeera
    },
    {
      text: "Fast delivery and amazing design. Our grocery store looks fantastic online!",
      author: "Suresh P.",
      role: "Grocery Store Owner",
      image: testimonialSuresh
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroBanner} 
            alt="Business owner working on website"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-indigo-900/80"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get Your Business Online Today with Gromo
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              We build stunning, high-converting websites for shops, e-commerce, mobile stores, hotels, and tea stalls
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6" title="Get started with your website">
              <Link to="/contact">Start My Website</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20" title="View our portfolio">
              <a href="#portfolio">See Our Work</a>
            </Button>
            </div>
          </div>
          <div className="mt-16 max-w-4xl mx-auto">
            <HeroSlider />
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl p-8 animate-slide-in-left border border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center justify-items-center opacity-80">
                <div className="flex flex-col items-center gap-2">
                  <Store className="h-12 w-12 text-white" />
                  <img 
                    src="/lovable-uploads/f88572c8-ada3-454d-a6c7-a994495023db.png" 
                    alt="Gromo" 
                    className="w-6 h-6"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <ShoppingCart className="h-12 w-12 text-white" />
                  <img 
                    src="/lovable-uploads/f88572c8-ada3-454d-a6c7-a994495023db.png" 
                    alt="Gromo" 
                    className="w-6 h-6"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Smartphone className="h-12 w-12 text-white" />
                  <img 
                    src="/lovable-uploads/f88572c8-ada3-454d-a6c7-a994495023db.png" 
                    alt="Gromo" 
                    className="w-6 h-6"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Building className="h-12 w-12 text-white" />
                  <img 
                    src="/lovable-uploads/f88572c8-ada3-454d-a6c7-a994495023db.png" 
                    alt="Gromo" 
                    className="w-6 h-6"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Coffee className="h-12 w-12 text-white" />
                  <img 
                    src="/lovable-uploads/f88572c8-ada3-454d-a6c7-a994495023db.png" 
                    alt="Gromo" 
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Who We Are
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Gromo is a startup dedicated to helping local businesses thrive in the digital age. 
                  We believe that a great website can elevate your shop or stall into a modern digital brand.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From mobile shops to hotels and tea stalls, we create tailor-made websites 
                  that fit your brand and customers. Every business — big or small — deserves 
                  a beautiful online presence.
                </p>
              </div>
              <div className="animate-slide-in-right">
                <div className="relative rounded-2xl overflow-hidden h-80">
                  <img 
                    src={teamPhoto} 
                    alt="Gromo team working together"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-6">
                    <p className="text-white font-medium text-lg">Building Digital Dreams</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized website solutions for different types of businesses
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up card-stagger interactive-hover">
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-primary mb-4 animate-bounce-in" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 gradient-text">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg" title="Request a demo of our services">
              <Link to="/contact">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Recent Projects
            </h2>
            <p className="text-lg text-gray-600">
              See how we've helped businesses like yours succeed online
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolioProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-zoom-in card-stagger overflow-hidden card-hover">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="h-8 w-8 text-white animate-bounce-in" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full shimmer">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 gradient-text">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Gromo Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Gromo?
            </h2>
            <p className="text-lg text-gray-600">
              We're committed to your success with these key advantages
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-rotate-fade card-stagger bg-white/70 backdrop-blur-sm interactive-hover">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-glow-pulse">
                    <benefit.icon className="h-8 w-8 text-white animate-float" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 gradient-text">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Feedback
            </h2>
            <p className="text-lg text-gray-600">
              Real stories from real businesses we've helped
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                    <Card className="h-full">
                      <CardContent className="p-6 h-full flex flex-col">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-700 mb-6 italic flex-grow">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center border-t pt-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author}
                            className="w-12 h-12 rounded-full object-cover mr-4"
                          />
                          <div>
                            <p className="font-semibold text-gray-900">{testimonial.author}</p>
                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/lovable-uploads/f88572c8-ada3-454d-a6c7-a994495023db.png" 
                  alt="Gromo Logo" 
                  className="w-8 h-8"
                />
                <span className="text-xl font-bold">Gromo</span>
              </div>
              <p className="text-gray-400 mb-6">
                Dream It & Grow Business - Building beautiful websites for local businesses across India.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">
                    Our Work
                  </a>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-gray-400">8438785779</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span className="text-gray-400">gromolink@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Gromo | All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
