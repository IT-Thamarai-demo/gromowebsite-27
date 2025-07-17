import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Code, 
  Brain, 
  Database, 
  GraduationCap, 
  Rocket,
  Users,
  Clock,
  Award
} from "lucide-react";

const Offers = () => {
  const websitePackages = [
    {
      name: "Basic Website",
      price: "₹1,500",
      originalPrice: "₹3,000",
      features: [
        "5 Pages Website",
        "Mobile Responsive",
        "Contact Form",
        "SEO Optimized",
        "1 Year Support",
        "Fast Loading"
      ],
      popular: false
    },
    {
      name: "E-commerce Store",
      price: "₹3,000",
      originalPrice: "₹6,000",
      features: [
        "10+ Pages",
        "Product Catalog",
        "Payment Gateway",
        "Order Management",
        "Admin Panel",
        "Analytics Setup"
      ],
      popular: true
    }
  ];

  const courses = [
    {
      title: "AI/ML Fundamentals",
      duration: "3 Months",
      type: "Course",
      features: [
        "Python Programming",
        "Machine Learning Basics",
        "Data Analysis",
        "AI Project Portfolio",
        "Industry Certification"
      ],
      icon: <Brain className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Full Stack MERN",
      duration: "6 Months",
      type: "Course",
      features: [
        "MongoDB, Express, React, Node.js",
        "Real-world Projects",
        "Database Design",
        "API Development",
        "Deployment Strategies"
      ],
      icon: <Code className="h-8 w-8 text-green-600" />
    },
    {
      title: "Python Development",
      duration: "4 Months",
      type: "Course",
      features: [
        "Core Python Programming",
        "Web Frameworks (Django/Flask)",
        "Database Integration",
        "Automation Scripts",
        "Career Guidance"
      ],
      icon: <Database className="h-8 w-8 text-yellow-600" />
    },
    {
      title: "AI Agent Development",
      duration: "2 Months",
      type: "Specialized",
      features: [
        "ChatBot Development",
        "Natural Language Processing",
        "API Integrations",
        "Voice Assistants",
        "Advanced AI Tools"
      ],
      icon: <Rocket className="h-8 w-8 text-purple-600" />
    }
  ];

  const internships = [
    {
      title: "Web Development Intern",
      duration: "3-6 Months",
      features: [
        "Real project experience",
        "Mentorship program",
        "Skill development",
        "Certificate on completion",
        "Potential job opportunity"
      ]
    },
    {
      title: "AI/ML Research Intern",
      duration: "4-6 Months",
      features: [
        "Research projects",
        "Academic collaboration",
        "Publication opportunities",
        "Industry exposure",
        "Career advancement"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Special Offers & Courses
            </h1>
            <p className="text-xl text-gray-600">
              Get your business online with our special pricing and upskill with our professional courses
            </p>
          </div>
        </div>
      </section>

      {/* Website Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Website Packages</h2>
            <p className="text-lg text-gray-600">Limited time special pricing for your business website</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {websitePackages.map((pkg, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-shadow ${pkg.popular ? 'border-primary ring-2 ring-primary/20' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">{pkg.originalPrice}</span>
                    <p className="text-sm text-gray-600 mt-2">50% OFF Limited Time</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GraduationCap className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Courses</h2>
            <p className="text-lg text-gray-600">Upskill with industry-relevant technology courses</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {course.icon}
                  </div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <Badge variant="secondary">{course.type}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center mb-4">
                    <Clock className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-600">{course.duration}</span>
                  </div>
                  <ul className="space-y-2 text-sm">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-0.5">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/contact">Enroll Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Users className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Internship Opportunities</h2>
            <p className="text-lg text-gray-600">Gain real-world experience with our internship programs</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {internships.map((internship, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-6 w-6 text-blue-600 mr-2" />
                    {internship.title}
                  </CardTitle>
                  <p className="text-gray-600">{internship.duration}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {internship.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Apply for Internship</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Register your business online with digital marketing solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Start Your Website</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                <Link to="/contact">Enroll in Course</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;