
import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  ctaLink: string;
  ctaText: string;
  children?: ReactNode;
}

const Hero = ({ 
  title, 
  subtitle, 
  imageSrc, 
  ctaLink, 
  ctaText, 
  children 
}: HeroProps) => {
  return (
    <div 
      className="relative min-h-[500px] flex items-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 45, 107, 0.85), rgba(10, 45, 107, 0.85)), url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-tech-pattern opacity-10"></div>
      <div className="container-custom relative z-10 py-16">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            {subtitle}
          </p>
          {children}
          <Link to={ctaLink}>
            <Button size="lg" className="bg-white text-elecon-blue hover:bg-elecon-lightgray">
              {ctaText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
