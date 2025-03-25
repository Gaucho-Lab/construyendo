import { useEffect, useState, RefObject } from 'react';

interface UseScrollAnimationProps {
  ref: RefObject<HTMLElement>;
  threshold?: number;
  rootMargin?: string;
}

/**
 * Custom hook that detects when an element enters the viewport
 */
const useScrollAnimation = ({
  ref,
  threshold = 0.1,
  rootMargin = '0px',
}: UseScrollAnimationProps): boolean => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Once the element is in view, stop observing
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold,
        rootMargin,
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
  }, [ref, threshold, rootMargin]);

  return isInView;
};

export default useScrollAnimation;