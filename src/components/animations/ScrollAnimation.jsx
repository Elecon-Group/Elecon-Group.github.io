import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ScrollAnimation = ({ 
  children, 
  animation = 'fadeUp',
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className = ''
}) => {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { 
    once: true,
    amount: threshold,
    margin: "0px 0px -100px 0px"
  });

  const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
      visible: { opacity: 1, y: 0 }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    zoomIn: {
      hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 },
      visible: { opacity: 1, scale: 1 }
    },
    slideLeft: {
      hidden: { opacity: 0, x: prefersReducedMotion ? 0 : 20 },
      visible: { opacity: 1, x: 0 }
    },
    slideRight: {
      hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -20 },
      visible: { opacity: 1, x: 0 }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animations[animation]}
      transition={{
        duration: prefersReducedMotion ? 0.3 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation; 