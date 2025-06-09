
import { Slide } from '@/types/slides';

interface SlideRendererProps {
  slide: Slide;
  darkMode: boolean;
}

const SlideRenderer = ({ slide, darkMode }: SlideRendererProps) => {
  return (
    <div className="w-full max-w-6xl animate-fade-in">
      {slide.type === 'title' && (
        <div className="text-center space-y-8">
          <div className="flex justify-center gap-8 mb-8">
            {slide.logos?.map((logo, index) => (
              <img key={index} src={logo} alt="Logo" className="h-16 w-16 object-contain animate-scale-in" />
            ))}
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-slide-in-right">
            {slide.title}
          </h1>
          <h2 className={`text-3xl font-light ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
            {slide.subtitle}
          </h2>
          <p className={`text-xl italic max-w-2xl mx-auto ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            {slide.quote}
          </p>
          <p className={`text-lg font-medium ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
            {slide.author}
          </p>
        </div>
      )}

      {slide.type === 'quote' && (
        <div className="text-center space-y-8">
          <blockquote className={`text-4xl font-light italic text-center max-w-4xl mx-auto ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
            {slide.content}
          </blockquote>
          <p className={`text-2xl ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>{slide.author}</p>
          <div className={`mt-12 p-6 rounded-xl ${darkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-blue-100'}`}>
            <p className={`text-xl ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>{slide.question}</p>
          </div>
        </div>
      )}

      {slide.type === 'story' && (
        <div className="space-y-8">
          <h1 className={`text-5xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{slide.title}</h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {Array.isArray(slide.content) ? (
                <ul className={`text-xl leading-relaxed space-y-4 ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                  {slide.content.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={`text-xl leading-relaxed ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>{slide.content}</p>
              )}
              <div className={`p-6 rounded-xl border-l-4 border-yellow-500 ${darkMode ? 'bg-yellow-900/30 text-yellow-200' : 'bg-yellow-100 text-yellow-800'}`}>
                <p className="text-lg font-medium">
                  {slide.result}
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-lg">
                <span className="text-6xl">🔬</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {slide.type === 'audience-question' && (
        <div className="text-center space-y-12">
          <h1 className={`text-6xl font-bold leading-tight max-w-4xl mx-auto ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            {slide.question}
          </h1>
          <p className={`text-2xl ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>{slide.subtext}</p>
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center animate-pulse shadow-lg">
              <span className="text-4xl">🤚</span>
            </div>
          </div>
        </div>
      )}

      {slide.type === 'journey' && (
        <div className="space-y-8">
          <h1 className={`text-4xl font-bold text-center ${darkMode ? 'text-white' : 'text-slate-900'}`}>{slide.title}</h1>
          <div className="flex items-center justify-center gap-8">
            <div className="text-6xl">{slide.icon}</div>
            <div className={`text-2xl font-light ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{slide.timeline}</div>
          </div>
          <h2 className={`text-3xl font-semibold text-center ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
            {slide.subtitle}
          </h2>
          <p className={`text-xl text-center max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
            {slide.content}
          </p>
        </div>
      )}

      {slide.type === 'challenge' && (
        <div className="text-center space-y-8">
          <h1 className={`text-5xl font-bold ${darkMode ? 'text-red-400' : 'text-red-600'}`}>{slide.title}</h1>
          <p className={`text-2xl max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>{slide.content}</p>
          <div className="flex justify-center">
            <div className="w-48 h-48 rounded-lg bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center shadow-lg">
              <span className="text-6xl">⚡</span>
            </div>
          </div>
        </div>
      )}

      {slide.type === 'balance-attempt' && (
        <div className="text-center space-y-8">
          <h1 className={`text-5xl font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>{slide.title}</h1>
          <p className={`text-2xl max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>{slide.content}</p>
          <div className="flex justify-center">
            <div className="w-48 h-48 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center shadow-lg">
              <span className="text-6xl">⚖️</span>
            </div>
          </div>
        </div>
      )}

      {slide.type === 'insight' && (
        <div className="space-y-8">
          <h1 className={`text-4xl font-bold text-center ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
            {slide.title}
          </h1>
          <div className="text-center">
            <h2 className={`text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{slide.content}</h2>
            <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
              {slide.description}
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center shadow-lg">
              <span className="text-4xl">💡</span>
            </div>
          </div>
        </div>
      )}

      {slide.type === 'comparison' && (
        <div className="text-center space-y-8">
          <h1 className={`text-6xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{slide.title}</h1>
          <p className={`text-2xl max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>{slide.content}</p>
          <div className="flex justify-center">
            <div className={`w-48 h-48 rounded-lg flex items-center justify-center shadow-lg ${
              slide.title.includes('Tool') 
                ? 'bg-gradient-to-br from-blue-400 to-green-500' 
                : 'bg-gradient-to-br from-orange-400 to-red-500'
            }`}>
              <span className="text-6xl">
                {slide.title.includes('Tool') ? '🛠️' : '🤖'}
              </span>
            </div>
          </div>
        </div>
      )}

      {slide.type === 'reflection' && (
        <div className="space-y-8">
          <h1 className={`text-5xl font-bold text-center ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
            {slide.title}
          </h1>
          <div className="space-y-6 max-w-4xl mx-auto">
            {slide.questions?.map((question, index) => (
              <div key={index} className={`p-6 rounded-xl border-l-4 border-indigo-500 ${darkMode ? 'bg-indigo-900/30 text-indigo-200' : 'bg-indigo-100 text-indigo-800'}`}>
                <p className="text-xl">{question}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {slide.type === 'closing' && (
        <div className="text-center space-y-8">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            {slide.title}
          </h1>
          <p className={`text-2xl max-w-4xl mx-auto leading-relaxed ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>{slide.content}</p>
          <div className="flex justify-center">
            <div className="w-48 h-48 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center shadow-lg">
              <span className="text-6xl">🌱</span>
            </div>
          </div>
        </div>
      )}

      {slide.type === 'toolkit' && (
        <div className="text-center space-y-8">
          <h1 className={`text-5xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{slide.title}</h1>
          <p className={`text-2xl ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>{slide.content}</p>
          <div className="flex justify-center">
            <div className={`w-48 h-48 rounded-xl flex items-center justify-center border-4 shadow-lg ${darkMode ? 'bg-slate-800 border-slate-600' : 'bg-white border-slate-300'}`}>
              <div className={`w-32 h-32 rounded-lg flex items-center justify-center ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
                <span className="text-xs">QR Code</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {slide.type === 'thanks' && (
        <div className="text-center space-y-8">
          <h1 className="text-7xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {slide.title}
          </h1>
          <h2 className={`text-3xl font-light ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
            {slide.subtitle}
          </h2>
          <p className={`text-xl ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{slide.content}</p>
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center shadow-lg">
              <span className="text-4xl">🙏</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SlideRenderer;
