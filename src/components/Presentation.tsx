
import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { slides } from '@/data/slides';
import PresentationBackground from './presentation/PresentationBackground';
import PresentationControls from './presentation/PresentationControls';
import PresentationNavigation from './presentation/PresentationNavigation';
import SlideRenderer from './presentation/SlideRenderer';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [progress, setProgress] = useState(0);

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
        <SlideRenderer slide={slide} darkMode={darkMode} />
      </div>

      <PresentationNavigation
        darkMode={darkMode}
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevSlide={prevSlide}
        onNextSlide={nextSlide}
        onSlideSelect={setCurrentSlide}
      />
    </div>
  );
};

export default Presentation;
