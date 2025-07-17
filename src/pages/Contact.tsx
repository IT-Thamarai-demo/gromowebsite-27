
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import FAQ from "@/components/FAQ";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you! We'll get back to you shortly."
      });
      setFormData({ fullName: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Talk About Your Website
            </h1>
            <p className="text-xl text-gray-600">
              Ready to build your website? Let's discuss your project and bring your business online.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <Card className="shadow-lg card-hover bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="animate-slide-up">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="mt-1 transition-all-smooth hover-scale-smooth"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project requirements..."
                        className="mt-1 min-h-[120px]"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full btn-glow" 
                      disabled={isSubmitting}
                      title="Send your message to us"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <div className="space-y-6">
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                          <Phone className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">Phone</p>
                          <a
                            href="tel:+918438785779"
                            className="text-blue-600 hover:text-blue-800 transition-colors"
                            title="Call us"
                          >
                            +91 84387 85779
                          </a>
                          <br />
                          <a
                            href="tel:+917598480664"
                            className="text-blue-600 hover:text-blue-800 transition-colors"
                            title="Call us"
                          >
                            +91 75984 80664
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                          <Mail className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">Email</p>
                          <a
                            href="mailto:gromolink@gmail.com"
                            className="text-blue-600 hover:text-blue-800 transition-colors"
                            title="Send us an email"
                          >
                            gromolink@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-gray-600">Tamil Nadu, India</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Why Choose Gromo?</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>✓ Fast delivery within 7-10 days</li>
                      <li>✓ Mobile-responsive designs</li>
                      <li>✓ SEO-optimized websites</li>
                      <li>✓ Affordable pricing for small businesses</li>
                      <li>✓ Ongoing support and maintenance</li>
                      <li>✓ Custom solutions for your industry</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Map Placeholder */}
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Our Reach</h3>
                    <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg h-48 flex items-center justify-center">
                      <div className="text-center text-gray-700">
                        <MapPin className="h-12 w-12 mx-auto mb-2" />
                        <p className="font-medium">Serving businesses across India</p>
                        <p className="text-sm">Remote team, nationwide service</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ />
        </div>
      </section>
    </div>
  );
};

export default Contact;
