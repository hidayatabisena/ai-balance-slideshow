
import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { slides } from '@/data/slides';
import PresentationBackground from './presentation/PresentationBackground';
import PresentationControls from './presentation/PresentationControls';
import PresentationNavigation from './presentation/PresentationNavigation';
import SlideRenderer from './presentation/SlideRenderer';
import { motion, AnimatePresence } from 'framer-motion';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [progress, setProgress] = useState(0);
// Remove this duplicate declaration since direction state is already declared above

  const handlePaginate = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    let progressInterval: NodeJS.Timeout | null = null;
    
    if (autoPlay) {
      const duration = 5000; // 5 seconds
      let elapsed = 0;
      
      // Progress bar animation
      progressInterval = setInterval(() => {
        elapsed += 50;
        const currentProgress = (elapsed / duration) * 100;
        setProgress(currentProgress);
        
        if (elapsed >= duration) {
          elapsed = 0;
          setProgress(0);
        }
      }, 50);
      
      // Slide transition
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setProgress(0);
      }, duration);
    } else {
      setProgress(0);
    }
    
    return () => {
      if (interval) clearInterval(interval);
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [autoPlay]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        paginate(1);
      } else if (event.key === 'ArrowLeft') {
        paginate(-1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }); // Remove paginate from dependency array since it's defined after this useEffect

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };

  const slide = slides[currentSlide];

  const slideVariants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-500 relative overflow-hidden ${
      darkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white' 
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 text-slate-900'
    }`}>
      {/* Progress Bar */}
      {autoPlay && (
        <div className="fixed top-0 left-0 right-0 z-50">
          <Progress 
            value={progress} 
            className={`h-1 rounded-none ${
              darkMode ? 'bg-slate-800' : 'bg-slate-200'
            }`}
          />
          <style dangerouslySetInnerHTML={{
            __html: `
              .fixed [data-state="complete-within"] {
                background: linear-gradient(90deg, #ec4899, #f97316) !important;
              }
            `
          }} />
        </div>
      )}

      <PresentationBackground darkMode={darkMode} />

      <PresentationControls
        darkMode={darkMode}
        autoPlay={autoPlay}
        toggleDarkMode={toggleDarkMode}
        toggleAutoPlay={toggleAutoPlay}
      />

      {/* Slide Content */}
      <div className="relative h-screen flex items-center justify-center p-8 z-10">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full h-full flex items-center justify-center"
          >
            <SlideRenderer slide={slide} darkMode={darkMode} />
          </motion.div>
        </AnimatePresence>
      </div>

      <PresentationNavigation
        darkMode={darkMode}
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevSlide={() => paginate(-1)}
        onNextSlide={() => paginate(1)}
        onSlideSelect={setCurrentSlide}
      />
    </div>
  );
};

export default Presentation;
