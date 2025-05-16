
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Factory, Microchip, Box, Plane, Satellite, Wrench } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Welcome to Elecon Group"
        subtitle="A leading provider of precision plastic injection molding and advanced drone technologies."
        imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475"
        ctaLink="/contact"
        ctaText="Get in Touch"
      >
        <div className="flex mb-8 gap-4">
          <Link to="/industries">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-elecon-blue">
              Elecon Industries
            </Button>
          </Link>
          <Link to="/aerotech">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-elecon-blue">
              Elecon Aerotech
            </Button>
          </Link>
        </div>
      </Hero>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-xl mb-4">Our Companies</h2>
            <p className="text-lg text-gray-600">
              Elecon Group comprises two specialized divisions, each excelling in their respective industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Elecon Industries */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md animate-fade-in">
              <div className="h-64 bg-elecon-blue">
                <div className="h-full flex items-center justify-center">
                  <Factory size={80} className="text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="heading-lg mb-4">Elecon Industries</h3>
                <p className="text-gray-600 mb-6">
                  Specializing in high-precision plastic injection molding, Elecon Industries delivers top-quality components for various industries with exceptional accuracy and efficiency.
                </p>
                <Link to="/industries">
                  <Button className="bg-elecon-blue hover:bg-elecon-lightblue">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Elecon Aerotech */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="h-64 bg-elecon-blue">
                <div className="h-full flex items-center justify-center">
                  <Plane size={80} className="text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="heading-lg mb-4">Elecon Aerotech</h3>
                <p className="text-gray-600 mb-6">
                  Elecon Aerotech is at the forefront of drone technology, offering advanced drone services and high-performance drone parts for commercial and industrial applications.
                </p>
                <Link to="/aerotech">
                  <Button className="bg-elecon-blue hover:bg-elecon-lightblue">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="section-padding bg-elecon-lightgray">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-xl mb-4">Why Choose Elecon Group</h2>
            <p className="text-lg text-gray-600">
              We combine technical expertise, quality craftsmanship, and innovative solutions to meet your specific needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              title="Technical Excellence"
              description="Our team of experienced engineers and technicians ensures the highest standards of precision and quality in every project."
              icon={<Wrench size={40} />}
            />
            
            <ServiceCard
              title="Innovation"
              description="We continuously invest in the latest technologies and processes to deliver cutting-edge solutions to our clients."
              icon={<Microchip size={40} />}
            />
            
            <ServiceCard
              title="Customer Focus"
              description="We work closely with our clients to understand their unique requirements and deliver tailored solutions that exceed expectations."
              icon={<Box size={40} />}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-elecon-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how Elecon Group can support your project needs with our expertise in plastic injection molding and drone technologies.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-elecon-blue hover:bg-elecon-lightgray">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
