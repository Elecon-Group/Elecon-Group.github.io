
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Plane, Satellite, Microchip, Radar, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const Aerotech = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Elecon Aerotech"
        subtitle="Advanced drone technology solutions for modern business needs."
        imageSrc="https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
        ctaLink="/contact"
        ctaText="Schedule a Consultation"
      />
      
      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="heading-xl mb-4">About Elecon Aerotech</h2>
              <p className="text-lg text-gray-600 mb-6">
                Elecon Aerotech is at the forefront of drone technology innovation, offering both advanced drone services and high-quality drone components. We help businesses harness the power of aerial technology for improved efficiency and data collection.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team combines engineering expertise with practical field experience to deliver drone solutions that exceed expectations, whether you need complete drone services or specialized components for your existing systems.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-elecon-lightgray px-4 py-2 rounded-full text-sm font-medium">
                  Advanced Technology
                </div>
                <div className="bg-elecon-lightgray px-4 py-2 rounded-full text-sm font-medium">
                  Expert Team
                </div>
                <div className="bg-elecon-lightgray px-4 py-2 rounded-full text-sm font-medium">
                  Custom Solutions
                </div>
                <div className="bg-elecon-lightgray px-4 py-2 rounded-full text-sm font-medium">
                  Industry Compliance
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-elecon-blue p-6 rounded-lg text-white text-center">
                <Plane size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Drone Services</h3>
              </div>
              <div className="bg-elecon-blue p-6 rounded-lg text-white text-center">
                <Satellite size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Aerial Mapping</h3>
              </div>
              <div className="bg-elecon-blue p-6 rounded-lg text-white text-center">
                <Microchip size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Drone Parts</h3>
              </div>
              <div className="bg-elecon-blue p-6 rounded-lg text-white text-center">
                <Radar size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Flight Systems</h3>
              </div>
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
              Comprehensive drone solutions for diverse industry applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Drone Services */}
            <div>
              <h3 className="heading-md mb-8 pb-2 border-b-2 border-elecon-blue inline-block">Drone Services</h3>
              <div className="space-y-6">
                <ServiceCard
                  title="Aerial Photography & Videography"
                  description="High-resolution aerial imagery and video capture for marketing, documentation, and analysis purposes."
                  icon={<Plane size={40} />}
                />
                
                <ServiceCard
                  title="Aerial Surveys & Mapping"
                  description="Precise topographic mapping, 3D modeling, and volumetric calculations for construction, mining, and agriculture."
                  icon={<Satellite size={40} />}
                />
                
                <ServiceCard
                  title="Infrastructure Inspection"
                  description="Safe and efficient inspection of buildings, bridges, towers, and other structures using advanced drone technology."
                  icon={<Radar size={40} />}
                />
              </div>
            </div>
            
            {/* Drone Parts */}
            <div>
              <h3 className="heading-md mb-8 pb-2 border-b-2 border-elecon-blue inline-block">Drone Parts</h3>
              <div className="space-y-6">
                <ServiceCard
                  title="Custom Drone Components"
                  description="Specialized parts designed and manufactured to your exact specifications for optimal performance."
                  icon={<Microchip size={40} />}
                />
                
                <ServiceCard
                  title="Propulsion Systems"
                  description="High-efficiency motors, propellers, and power distribution systems for extended flight times and improved performance."
                  icon={<Microchip size={40} />}
                />
                
                <ServiceCard
                  title="Sensor Integration"
                  description="Seamless integration of specialized sensors including thermal, multispectral, and LiDAR systems for enhanced data collection."
                  icon={<Wrench size={40} />}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Applications */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-xl mb-4">Industry Applications</h2>
            <p className="text-lg text-gray-600">
              Our drone solutions are deployed across multiple industries, providing valuable data and insights.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-elecon-lightgray rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-elecon-blue mb-3">Construction</h3>
              <p className="text-gray-600 mb-4">Site monitoring, progress tracking, and volumetric measurements.</p>
            </div>
            
            <div className="bg-elecon-lightgray rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-elecon-blue mb-3">Agriculture</h3>
              <p className="text-gray-600 mb-4">Crop health assessment, irrigation planning, and yield estimation.</p>
            </div>
            
            <div className="bg-elecon-lightgray rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-elecon-blue mb-3">Real Estate</h3>
              <p className="text-gray-600 mb-4">Property marketing, land development planning, and virtual tours.</p>
            </div>
            
            <div className="bg-elecon-lightgray rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-elecon-blue mb-3">Energy</h3>
              <p className="text-gray-600 mb-4">Solar panel inspection, wind turbine maintenance, and pipeline monitoring.</p>
            </div>
            
            <div className="bg-elecon-lightgray rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-elecon-blue mb-3">Mining</h3>
              <p className="text-gray-600 mb-4">Stockpile measurement, site planning, and environmental monitoring.</p>
            </div>
            
            <div className="bg-elecon-lightgray rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-elecon-blue mb-3">Public Safety</h3>
              <p className="text-gray-600 mb-4">Search and rescue operations, disaster assessment, and event security.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-elecon-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Operations?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Discover how our drone technology can transform your business processes and provide valuable insights.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-elecon-blue hover:bg-elecon-lightgray">
              Contact Our Drone Specialists
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Aerotech;
