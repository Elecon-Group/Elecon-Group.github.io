
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { Factory, Wrench, Box, Component, Cylinder, Settings } from 'lucide-react';

const Industries = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Elecon Industries"
        subtitle="Precision plastic injection molding solutions for diverse industries."
        imageSrc="https://images.unsplash.com/photo-1486718448742-163732cd1544"
        ctaLink="/contact"
        ctaText="Request a Quote"
      />
      
      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="heading-xl mb-4">About Elecon Industries</h2>
              <p className="text-lg text-gray-600 mb-6">
                Elecon Industries is a leading manufacturer of high-precision plastic injection molded parts. We combine advanced manufacturing technology with expert engineering to deliver superior quality components that meet exact specifications.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our state-of-the-art facilities and experienced team enable us to serve clients across multiple industries, from automotive and consumer electronics to medical devices and industrial equipment.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-elecon-lightgray px-4 py-2 rounded-full text-sm font-medium">
                  High Precision
                </div>
                <div className="bg-elecon-lightgray px-4 py-2 rounded-full text-sm font-medium">
                  Advanced Technology
                </div>
                <div className="bg-elecon-lightgray px-4 py-2 rounded-full text-sm font-medium">
                  Quality Assured
                </div>
                <div className="bg-elecon-lightgray px-4 py-2 rounded-full text-sm font-medium">
                  Custom Solutions
                </div>
              </div>
            </div>
            <div className="bg-elecon-blue rounded-lg p-8 text-white animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-6">Our Capabilities</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Factory className="flex-shrink-0" size={20} />
                  <span>Multi-cavity injection molding</span>
                </li>
                <li className="flex items-center gap-3">
                  <Wrench className="flex-shrink-0" size={20} />
                  <span>Prototype to high-volume production</span>
                </li>
                <li className="flex items-center gap-3">
                  <Component className="flex-shrink-0" size={20} />
                  <span>Complex part engineering</span>
                </li>
                <li className="flex items-center gap-3">
                  <Settings className="flex-shrink-0" size={20} />
                  <span>Tight tolerance capabilities</span>
                </li>
                <li className="flex items-center gap-3">
                  <Box className="flex-shrink-0" size={20} />
                  <span>Wide variety of thermoplastic materials</span>
                </li>
                <li className="flex items-center gap-3">
                  <Cylinder className="flex-shrink-0" size={20} />
                  <span>In-house mold design and fabrication</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services */}
      <section className="section-padding bg-elecon-lightgray">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-xl mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">
              We offer comprehensive plastic injection molding services to meet all your manufacturing needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              title="Custom Injection Molding"
              description="From design to production, we create custom plastic components tailored to your specific requirements and applications."
              icon={<Factory size={40} />}
            />
            
            <ServiceCard
              title="Mold Design & Engineering"
              description="Our experienced engineering team designs and creates molds optimized for efficiency, quality, and longevity."
              icon={<Settings size={40} />}
            />
            
            <ServiceCard
              title="Rapid Prototyping"
              description="Accelerate your product development with our rapid prototyping services, allowing you to test and refine designs quickly."
              icon={<Component size={40} />}
            />
            
            <ServiceCard
              title="Material Selection"
              description="We help you choose the ideal thermoplastic materials for your components, balancing performance, cost, and sustainability."
              icon={<Box size={40} />}
            />
            
            <ServiceCard
              title="Quality Assurance"
              description="Our rigorous quality control procedures ensure that every part meets or exceeds the required specifications and standards."
              icon={<Wrench size={40} />}
            />
            
            <ServiceCard
              title="Production Scale-Up"
              description="Seamlessly transition from prototype to full-scale production with our efficient manufacturing processes."
              icon={<Cylinder size={40} />}
            />
          </div>
        </div>
      </section>
      
      {/* Industries We Serve */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-xl mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600">
              Our plastic injection molding expertise spans across multiple sectors, providing reliable components for diverse applications.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-elecon-lightgray p-6 rounded-lg text-center hover:bg-elecon-blue hover:text-white transition-colors duration-300">
              <h3 className="font-semibold">Automotive</h3>
            </div>
            
            <div className="bg-elecon-lightgray p-6 rounded-lg text-center hover:bg-elecon-blue hover:text-white transition-colors duration-300">
              <h3 className="font-semibold">Consumer Electronics</h3>
            </div>
            
            <div className="bg-elecon-lightgray p-6 rounded-lg text-center hover:bg-elecon-blue hover:text-white transition-colors duration-300">
              <h3 className="font-semibold">Medical Devices</h3>
            </div>
            
            <div className="bg-elecon-lightgray p-6 rounded-lg text-center hover:bg-elecon-blue hover:text-white transition-colors duration-300">
              <h3 className="font-semibold">Industrial Equipment</h3>
            </div>
            
            <div className="bg-elecon-lightgray p-6 rounded-lg text-center hover:bg-elecon-blue hover:text-white transition-colors duration-300">
              <h3 className="font-semibold">Aerospace</h3>
            </div>
            
            <div className="bg-elecon-lightgray p-6 rounded-lg text-center hover:bg-elecon-blue hover:text-white transition-colors duration-300">
              <h3 className="font-semibold">Telecommunications</h3>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
