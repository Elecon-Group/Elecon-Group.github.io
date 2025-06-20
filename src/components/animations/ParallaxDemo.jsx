import React from 'react';
import { ParallaxImage, ParallaxContainer } from './index';

const ParallaxDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Factory Background"
          speed={0.8}
          scale={1.2}
          direction="up"
          className="absolute inset-0 w-full h-full"
        />
        <ParallaxContainer speed={0.4} direction="up" className="relative z-10 text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Parallax Demo</h1>
          <p className="text-xl">Scroll to see the magic happen</p>
        </ParallaxContainer>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ParallaxContainer speed={0.3} direction="up" className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Different Parallax Effects</h2>
            <p className="text-lg text-gray-600">Each section demonstrates various parallax configurations</p>
          </ParallaxContainer>

          {/* Grid of Parallax Examples */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example 1: Up Direction */}
            <ParallaxContainer speed={0.5} direction="up" className="bg-white rounded-lg shadow-lg p-6">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Example 1"
                speed={0.6}
                scale={1.05}
                direction="up"
                className="w-full h-48 rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Up Direction</h3>
              <p className="text-gray-600">Content moves up as you scroll</p>
            </ParallaxContainer>

            {/* Example 2: Down Direction */}
            <ParallaxContainer speed={0.4} direction="down" className="bg-white rounded-lg shadow-lg p-6">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Example 2"
                speed={0.7}
                scale={1.03}
                direction="down"
                className="w-full h-48 rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Down Direction</h3>
              <p className="text-gray-600">Content moves down as you scroll</p>
            </ParallaxContainer>

            {/* Example 3: Different Speeds */}
            <ParallaxContainer speed={0.6} direction="up" className="bg-white rounded-lg shadow-lg p-6">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Example 3"
                speed={0.8}
                scale={1.08}
                direction="up"
                className="w-full h-48 rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">High Speed</h3>
              <p className="text-gray-600">Faster parallax movement</p>
            </ParallaxContainer>
          </div>
        </div>
      </section>

      {/* Full Width Parallax Section */}
      <section className="relative h-96 overflow-hidden">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Full Width Background"
          speed={0.5}
          scale={1.1}
          direction="up"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <ParallaxContainer speed={0.3} direction="up" className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Full Width Parallax</h2>
            <p className="text-xl">Beautiful background effects</p>
          </ParallaxContainer>
        </div>
      </section>
    </div>
  );
};

export default ParallaxDemo; 