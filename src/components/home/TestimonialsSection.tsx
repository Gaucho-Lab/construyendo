import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';
import { testimonials } from '../../data/testimonials';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <section className="section bg-primary text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle id="pattern-circle" cx="10" cy="10" r="2" fill="currentColor"></circle>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <SectionTitle
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Hear directly from our clients about their experiences working with our construction team."
          center
          light
        />

        <div className="mt-12 relative">
          {/* Testimonial Slider */}
          <div className="relative overflow-hidden max-w-4xl mx-auto">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'tween', duration: 0.5 }}
                className="p-6 md:p-8"
              >
                <div className="flex justify-center mb-8">
                  <FaQuoteLeft className="text-4xl text-secondary opacity-50" />
                </div>
                <p className="text-xl md:text-2xl text-center mb-8">
                  {testimonials[currentIndex].content}
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`mx-0.5 ${
                          i < testimonials[currentIndex].rating
                            ? 'text-secondary'
                            : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <h4 className="text-xl font-bold">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-300">
                    {testimonials[currentIndex].position}
                    {testimonials[currentIndex].company && (
                      <span> - {testimonials[currentIndex].company}</span>
                    )}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-10"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-10"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-secondary' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;