
interface PresentationBackgroundProps {
  darkMode: boolean;
}

const PresentationBackground = ({ darkMode }: PresentationBackgroundProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Blobs */}
      <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 animate-pulse ${
        darkMode ? 'bg-blue-500' : 'bg-blue-300'
      }`} />
      <div className={`absolute -bottom-32 -left-32 w-64 h-64 rounded-full opacity-15 animate-pulse ${
        darkMode ? 'bg-purple-500' : 'bg-purple-300'
      }`} style={{ animationDelay: '1s' }} />
      <div className={`absolute top-1/2 right-1/4 w-48 h-48 rounded-full opacity-10 animate-pulse ${
        darkMode ? 'bg-green-500' : 'bg-green-300'
      }`} style={{ animationDelay: '2s' }} />
      
      {/* Curved Lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path
          d="M0,300 Q250,200 500,250 T1000,200"
          stroke={darkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)'}
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
        />
        <path
          d="M0,600 Q300,500 600,550 T1000,500"
          stroke={darkMode ? 'rgba(168, 85, 247, 0.1)' : 'rgba(168, 85, 247, 0.05)'}
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '1.5s' }}
        />
      </svg>
      
      {/* Geometric Shapes */}
      <div className={`absolute top-20 left-20 w-16 h-16 rotate-45 opacity-10 animate-spin ${
        darkMode ? 'bg-yellow-400' : 'bg-yellow-300'
      }`} style={{ animationDuration: '20s' }} />
      <div className={`absolute bottom-40 right-20 w-12 h-12 opacity-15 animate-bounce ${
        darkMode ? 'bg-red-400' : 'bg-red-300'
      }`} style={{ animationDuration: '3s' }} />
    </div>
  );
};

export default PresentationBackground;
