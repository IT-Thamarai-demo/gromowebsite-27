import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Search, Rocket, Users, Award } from "lucide-react";

const WhyUs = () => {
  const frontendTechs = [
    { name: "HTML5", desc: "Modern semantic markup" },
    { name: "CSS3", desc: "Responsive styling & animations" },
    { name: "JavaScript", desc: "Interactive user experiences" },
    { name: "React", desc: "Component-based architecture" }
  ];

  const backendTechs = [
    { name: "Node.js", desc: "Server-side JavaScript runtime" },
    { name: "MySQL", desc: "Reliable database management" },
    { name: "Firebase", desc: "Real-time database & hosting" },
    { name: "API Development", desc: "Custom backend solutions" }
  ];

  const startupBenefits = [
    {
      icon: <Rocket className="h-8 w-8 text-blue-600" />,
      title: "Startup Mindset",
      desc: "We understand the challenges of growing a business and provide scalable solutions."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Personal Touch",
      desc: "Direct communication with founders, ensuring your vision is perfectly executed."
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Innovation First",
      desc: "We stay updated with latest technologies to give your business a competitive edge."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Gromo?
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're not just developers - we're your technology partners in building a digital future for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Frontend Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Code className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frontend Excellence</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We create stunning, responsive user interfaces using modern frontend technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {frontendTechs.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{tech.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{tech.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Backend Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Database className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Robust Backend Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Powerful server-side technologies that ensure your website runs smoothly and scales with your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {backendTechs.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{tech.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{tech.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO & Digital Marketing */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Search className="h-16 w-16 text-purple-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SEO & Digital Marketing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get found online with our comprehensive SEO strategies and digital marketing solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>On-Page SEO</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Keyword optimization</li>
                  <li>• Meta tags & descriptions</li>
                  <li>• Schema markup</li>
                  <li>• URL structure</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Technical SEO</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Site speed optimization</li>
                  <li>• Mobile responsiveness</li>
                  <li>• Core Web Vitals</li>
                  <li>• SSL certificates</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Content Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Content optimization</li>
                  <li>• Blog integration</li>
                  <li>• Social media setup</li>
                  <li>• Analytics tracking</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Startup Advantage */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Gromo Startup Advantage</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As a growing startup, we bring fresh perspectives, agility, and passionate dedication to every project
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {startupBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;