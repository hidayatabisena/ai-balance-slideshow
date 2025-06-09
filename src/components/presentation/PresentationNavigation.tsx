
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PresentationNavigationProps {
  darkMode: boolean;
  currentSlide: number;
  totalSlides: number;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onSlideSelect: (index: number) => void;
}

const PresentationNavigation = ({
  darkMode,
  currentSlide,
  totalSlides,
  onPrevSlide,
  onNextSlide,
  onSlideSelect
}: PresentationNavigationProps) => {
  return (
    <>
      {/* Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-50">
        <Button
          onClick={onPrevSlide}
          variant="outline"
          size="sm"
          className={`${darkMode ? 'bg-slate-800/80 border-slate-600 text-white hover:bg-slate-700' : 'bg-white/80 text-slate-900 hover:bg-white'} backdrop-blur-sm`}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div className="flex gap-2">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => onSlideSelect(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-blue-500 w-8'
                  : darkMode ? 'bg-slate-600' : 'bg-slate-300'
              }`}
            />
          ))}
        </div>

        <Button
          onClick={onNextSlide}
          variant="outline"
          size="sm"
          className={`${darkMode ? 'bg-slate-800/80 border-slate-600 text-white hover:bg-slate-700' : 'bg-white/80 text-slate-900 hover:bg-white'} backdrop-blur-sm`}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Slide counter */}
      <div className={`fixed bottom-4 right-4 text-sm opacity-70 z-50 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
        {currentSlide + 1} / {totalSlides}
      </div>
    </>
  );
};

export default PresentationNavigation;
