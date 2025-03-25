import { ReactNode, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedElementProps {
  children: ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'slide-in-right';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

const AnimatedElement = ({
  children,
  animation = 'fade-in',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  className = '',
}: AnimatedElementProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getAnimationVariants = () => {
    switch (animation) {
      case 'fade-in':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration, delay } },
        };
      case 'slide-up':
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration, delay } },
        };
      case 'slide-in-right':
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0, transition: { duration, delay } },
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration, delay } },
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={getAnimationVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;