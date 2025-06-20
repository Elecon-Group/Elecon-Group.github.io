import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import useResponsiveParallax from './useResponsiveParallax';

const ParallaxContainer = ({
  children,
  speed = 0.3,
  direction = 'up',
  className = '',
  style = {},
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

  const getParallaxTransform = () => {
    if (disabled || !isVisible || isMobile) return 0;
    
    const element = ref.current;
    if (!element) return 0;

    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementTop = rect.top;
    const elementHeight = rect.height;
    
    // Calculate how much the element has been scrolled into view
    const scrollProgress = Math.max(0, Math.min(1, 
      (windowHeight - elementTop) / (windowHeight + elementHeight)
    ));
    
    // Apply direction-based transformation
    switch (direction) {
      case 'up':
        return scrollProgress * 100 * speed;
      case 'down':
        return -scrollProgress * 100 * speed;
      case 'left':
        return scrollProgress * 100 * speed;
      case 'right':
        return -scrollProgress * 100 * speed;
      default:
        return scrollProgress * 100 * speed;
    }
  };

  const springs = useSpring({
    transform: `translateY(${getParallaxTransform()}px)`,
    config: config.gentle,
  });

  if (disabled || isMobile) {
    return (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={`overflow-hidden ${className}`} style={style}>
      <animated.div style={springs}>
        {children}
      </animated.div>
    </div>
  );
};

export default ParallaxContainer; 