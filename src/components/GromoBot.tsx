
import { useState, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// ✅ FAQ Data (50 entries)
const faqList = [
  {
    question: "What services do you provide?",
    answer: "We build websites for shops, e-commerce, mobile stores, hotels, tea stalls, and more. Whether it's a static site or a full online store, we've got you covered!",
  },
  {
    question: "How long does it take to build a website?",
    answer: "It usually takes 5 to 10 days depending on the complexity and content requirements.",
  },
  {
    question: "Do you provide hosting services?",
    answer: "Yes, we offer hosting as part of our web packages or can assist you in setting up your own.",
  },
  {
    question: "Do you offer custom domain registration?",
    answer: "Yes, we help you register your custom domain like yourshopname.com.",
  },
  {
    question: "Are the websites mobile responsive?",
    answer: "Absolutely. All our websites are optimized for mobiles, tablets, and desktops.",
  },
  {
    question: "Can I update the content myself later?",
    answer: "Yes, we offer CMS-based solutions so you can update text and images without coding.",
  },
  {
    question: "Do you provide e-commerce functionality?",
    answer: "Yes, we support product listings, shopping cart, payment integration, and more.",
  },
  {
    question: "Can I integrate WhatsApp into my site?",
    answer: "Yes, we can add a WhatsApp chat button on your site for easy customer interaction.",
  },
  {
    question: "What is your pricing structure?",
    answer: "Pricing depends on the type of website. We offer basic, business, and premium packages.",
  },
  {
    question: "Do you offer support after website delivery?",
    answer: "Yes, we offer 1 month of free support and optional maintenance plans afterward.",
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes, we can modernize and redesign your existing website to meet current trends.",
  },
  {
    question: "Do you build websites with WordPress?",
    answer: "Yes, we work with WordPress, custom HTML/CSS, React, and other frameworks.",
  },
  {
    question: "Do you include SEO in your packages?",
    answer: "Basic SEO is included. We also offer advanced SEO services on request.",
  },
  {
    question: "Can you build a blog for my business?",
    answer: "Yes, we can create a blog section with categories, comments, and sharing options.",
  },
  {
    question: "Is payment gateway integration possible?",
    answer: "Yes, we integrate popular gateways like Razorpay, Stripe, and PayPal.",
  },
  {
    question: "Do you offer multi-language websites?",
    answer: "Yes, we can create websites in Tamil, Hindi, English, or other languages.",
  },
  {
    question: "Can you connect my site to Google Maps?",
    answer: "Yes, we can embed your location using Google Maps or OpenStreetMap.",
  },
  {
    question: "Do I need technical skills to maintain my website?",
    answer: "No, we make user-friendly websites that you can easily manage yourself.",
  },
  {
    question: "What if I want changes after delivery?",
    answer: "We offer affordable support packages for future changes and additions.",
  },
  {
    question: "Can I connect my Facebook or Instagram to my site?",
    answer: "Yes, we can embed social media feeds or links to your business accounts.",
  },
  {
    question: "Is email integration included?",
    answer: "Yes, we integrate business email or contact forms for inquiries.",
  },
  {
    question: "Do you build portfolio websites?",
    answer: "Yes, we design portfolios for freelancers, students, photographers, and creators.",
  },
  {
    question: "Can I track visitors to my site?",
    answer: "Yes, we integrate Google Analytics for tracking traffic and user behavior.",
  },
  {
    question: "What technologies do you use?",
    answer: "We use HTML, CSS, JavaScript, React, Node.js, WordPress, and Firebase.",
  },
  {
    question: "Do you make landing pages for marketing?",
    answer: "Yes, we create conversion-optimized landing pages for your campaigns.",
  },
  {
    question: "Do you provide business logo design?",
    answer: "Yes, we offer logo design as an optional service.",
  },
  {
    question: "Is there an extra charge for mobile optimization?",
    answer: "No, mobile responsiveness is always included by default.",
  },
  {
    question: "Do you build websites for NGOs or schools?",
    answer: "Yes, we offer special pricing for NGOs, schools, and educational institutes.",
  },
  {
    question: "Can I showcase YouTube videos on my site?",
    answer: "Yes, we can embed YouTube or any video content into your site.",
  },
  {
    question: "Do you offer animated banners or sliders?",
    answer: "Yes, we can include sliders, transitions, and engaging animations.",
  },
  {
    question: "Can you make product catalog websites?",
    answer: "Yes, for shops that want to show products but not sell online, we build catalogs.",
  },
  {
    question: "Will my site be fast and optimized?",
    answer: "Yes, we ensure fast loading times using optimized assets and best practices.",
  },
  {
    question: "Do you offer discount coupons for new businesses?",
    answer: "Yes, we have seasonal offers and discounts for new startups.",
  },
  {
    question: "Can I preview the site before going live?",
    answer: "Yes, we provide a staging preview for your review before final launch.",
  },
  {
    question: "Do you help with Google My Business setup?",
    answer: "Yes, we assist in setting up and optimizing your Google Business Profile.",
  },
  {
    question: "Can I pay in installments?",
    answer: "Yes, we allow part-payment depending on the package.",
  },
  {
    question: "Do you use templates or custom design?",
    answer: "Both options are available. We prefer custom but offer templates for speed and budget.",
  },
  {
    question: "What are the modes of communication?",
    answer: "We’re available via WhatsApp, Email, Phone, and Video Calls.",
  },
  {
    question: "Do you make wedding or event websites?",
    answer: "Yes, we design websites for weddings, events, and personal occasions.",
  },
  {
    question: "Can I add testimonials to my site?",
    answer: "Yes, you can showcase customer reviews, testimonials, and ratings.",
  },
  {
    question: "Is a blog good for my business?",
    answer: "Yes, blogging helps with SEO and connects better with your audience.",
  },
  {
    question: "Do you offer training on how to use the website?",
    answer: "Yes, we provide a short walkthrough or user guide after delivery.",
  },
  {
    question: "Will you remove your branding from the site?",
    answer: "Yes, we can remove 'Developed by Gromo' if you prefer a white-label site.",
  },
  {
    question: "Do you offer referral benefits?",
    answer: "Yes, refer a friend and get discounts or upgrades on your plan.",
  },
  {
    question: "Can I add an online booking system?",
    answer: "Yes, we can integrate booking and scheduling tools.",
  },
  {
    question: "Do you offer discounts for students?",
    answer: "Yes, we offer student portfolio discounts with valid ID proof.",
  },
  {
    question: "How do I contact you after launch?",
    answer: "You can reach us through WhatsApp or Email anytime during business hours.",
  },
  {
    question: "Do you offer SSL certificate?",
    answer: "Yes, your website will be secured with an HTTPS SSL certificate.",
  },
  {
    question: "Is it possible to migrate from another platform?",
    answer: "Yes, we help migrate from Wix, Shopify, WordPress, or others.",
  },
  {
    question: "Can you integrate with CRM or ERP?",
    answer: "Yes, we can discuss your CRM/ERP tool and check compatibility.",
  },
];

// Suggested questions (first 3)
const suggested = faqList.slice(0, 3);

// Function to find relevant FAQ based on user input
const findRelevantFAQ = (userInput: string) => {
  const input = userInput.toLowerCase();
  
  // Direct match first
  for (const faq of faqList) {
    if (faq.question.toLowerCase().includes(input) || 
        faq.answer.toLowerCase().includes(input)) {
      return faq;
    }
  }
  
  // Keyword matching
  const keywords = input.split(' ').filter(word => word.length > 2);
  for (const faq of faqList) {
    const faqText = (faq.question + ' ' + faq.answer).toLowerCase();
    if (keywords.some(keyword => faqText.includes(keyword))) {
      return faq;
    }
  }
  
  // Default response
  return {
    question: "I'm here to help!",
    answer: "I couldn't find a specific answer to your question, but I'm here to help with website development services. You can contact us directly via WhatsApp or check our suggested questions below."
  };
};

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const GromoBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Handle ESC key to close and Ctrl+G to open
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
      if (event.ctrlKey && event.key === 'g') {
        event.preventDefault();
        setIsOpen(true);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSendMessage = async (messageText?: string) => {
    const text = messageText || userInput.trim();
    if (!text) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsThinking(true);

    // Simulate thinking delay
    setTimeout(() => {
      const relevantFAQ = findRelevantFAQ(text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: relevantFAQ.answer,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsThinking(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Popup */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-lg border max-w-sm w-[350px] animate-fade-in">
          {/* Header */}
          <div className="p-4 border-b bg-gradient-to-r from-primary to-primary/90 text-white">
            <div className="flex justify-between items-center mb-2">
              <div className="text-xs opacity-90 text-center flex-1">
                Live {currentTime.toLocaleTimeString()}
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 text-white hover:bg-white/20 absolute top-2 right-2"
                onClick={() => setIsOpen(false)}
                title="Close chat (ESC)"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-2">
                <img 
                  src="/lovable-uploads/f88572c8-ada3-454d-a6c7-a994495023db.png" 
                  alt="Gromo Logo" 
                  className="w-6 h-6"
                />
              </div>
              <h4 className="font-semibold text-sm">GromoBot</h4>
              <div className="text-xs opacity-80 mt-1">
                <a 
                  href="https://gromo.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                  title="Visit Gromo Website"
                >
                  gromo.in
                </a>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="p-4 max-h-[300px] overflow-y-auto space-y-3">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 text-sm">
                <p className="mb-3">👋 Hi! I'm Gromo Bot. Ask me anything about our website development services!</p>
                <div className="space-y-1">
                  <p className="text-[10px] text-gray-500 uppercase font-bold">
                    Suggested Questions
                  </p>
                  {suggested.map((faq, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(faq.question)}
                      className="block w-full text-left text-xs text-blue-600 underline hover:text-blue-800 p-1"
                    >
                      {faq.question}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                      message.sender === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))
            )}
            
            {/* Thinking Animation */}
            {isThinking && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-lg px-3 py-2 text-sm">
                  <div className="flex items-center gap-1">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="ml-2 text-gray-600">gromo thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question..."
                className="flex-1 text-sm"
                disabled={isThinking}
              />
              <Button
                onClick={() => handleSendMessage()}
                disabled={!userInput.trim() || isThinking}
                size="sm"
                className="px-3"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-200 bg-primary hover:bg-primary/90 relative group animate-float animate-blink"
        title="Connect Gromo with Ctrl+G"
      >
        <img 
          src="/lovable-uploads/f88572c8-ada3-454d-a6c7-a994495023db.png" 
          alt="Gromo" 
          className="w-6 h-6"
        />
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
          <div className="bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap">
            Connect Gromo with Ctrl+G
          </div>
        </div>
      </Button>
    </div>
  );
};

export default GromoBot;
