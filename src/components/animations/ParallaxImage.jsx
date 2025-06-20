import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import useResponsiveParallax from './useResponsiveParallax';

const ParallaxImage = ({
  src,
  alt,
  className = '',
  speed = 0.5,
  scale = 1.05,
  opacity = 1,
  direction = 'up',
  threshold = 0.1,
  disabled = false
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useResponsiveParallax();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  const getParallaxValues = () => {
    if (disabled || !isVisible || isMobile) return { y: 0, scaleValue: 1, opacity: opacity };

    const element = ref.current;
    if (!element) return { y: 0, scaleValue: 1, opacity: opacity };

    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementTop = rect.top;
    const elementHeight = rect.height;
    
    // Calculate scroll progress
    const scrollProgress = Math.max(0, Math.min(1, 
      (windowHeight - elementTop) / (windowHeight + elementHeight)
    ));
    
    // Calculate Y translation based on direction
    let y = 0;
    switch (direction) {
      case 'up':
        y = scrollProgress * -100 * speed;
        break;
      case 'down':
        y = scrollProgress * 100 * speed;
        break;
      case 'left':
        y = scrollProgress * -100 * speed;
        break;
      case 'right':
        y = scrollProgress * 100 * speed;
        break;
      default:
        y = scrollProgress * -100 * speed;
    }
    
    // Calculate scale effect
    const scaleValue = 1 + (scrollProgress * (scale - 1));
    
    // Calculate opacity effect
    const opacityValue = opacity * (0.5 + scrollProgress * 0.5);

    return { y, scaleValue, opacity: opacityValue };
  };

  const { y, scaleValue, opacity: opacityValue } = getParallaxValues();

  const springs = useSpring({
    transform: `translateY(${y}px) scale(${scaleValue})`,
    opacity: opacityValue,
    config: config.gentle,
  });

  if (disabled || isMobile) {
    return (
      <div ref={ref} className={`overflow-hidden ${className}`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <animated.img
        src={src}
        alt={alt}
        style={{
          ...springs,
          willChange: 'transform, opacity'
        }}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default ParallaxImage; 