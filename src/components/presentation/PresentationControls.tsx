
import { Moon, Sun, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PresentationControlsProps {
  darkMode: boolean;
  autoPlay: boolean;
  toggleDarkMode: () => void;
  toggleAutoPlay: () => void;
}

const PresentationControls = ({ 
  darkMode, 
  autoPlay, 
  toggleDarkMode, 
  toggleAutoPlay 
}: PresentationControlsProps) => {
  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <Button
        onClick={toggleAutoPlay}
        variant="outline"
        size="sm"
        className={`${darkMode ? 'bg-slate-800/80 border-slate-600 text-white hover:bg-slate-700' : 'bg-white/80 text-slate-900 hover:bg-white'} backdrop-blur-sm`}
      >
        {autoPlay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </Button>
      <Button
        onClick={toggleDarkMode}
        variant="outline"
        size="sm"
        className={`${darkMode ? 'bg-slate-800/80 border-slate-600 text-white hover:bg-slate-700' : 'bg-white/80 text-slate-900 hover:bg-white'} backdrop-blur-sm`}
      >
        {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>
    </div>
  );
};

export default PresentationControls;
