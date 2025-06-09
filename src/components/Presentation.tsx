import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Moon, Sun, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);

  const slides = [
    // Slide 1: Title
    {
      id: 1,
      type: 'title',
      title: 'Finding Balance in the AI Era',
      subtitle: 'as a Path to Sustainable Productivity',
      author: 'Your Name',
      quote: '"The question is not whether machines think but whether men do." - B.F. Skinner',
      logos: [
        'https://framerusercontent.com/images/0aaSOxupKAsVA4ou30WbxLvSQo0.png',
        'https://unma.ac.id/wp-content/uploads/2023/02/Logo-Universitas-Majalengka-300x300-1.png'
      ]
    },
    // Slide 2: Opening Quote
    {
      id: 2,
      type: 'quote',
      content: '"In the midst of winter, I found there was, within me, an invincible summer."',
      author: '- Albert Camus',
      question: 'How do we find our invincible summer in the AI winter?'
    },
    // Slide 3: Story
    {
      id: 3,
      type: 'story',
      title: 'AI Research Experiment',
      content: 'A lecturer decided to compare two approaches to research: one group used traditional methods, spending weeks in libraries and databases. The other group leveraged AI tools for initial research, analysis, and draft writing.',
      result: 'The AI group finished 3x faster, but reported feeling disconnected from their work.',
      visual: 'experiment'
    },
    // Slide 4: Question to Audience
    {
      id: 4,
      type: 'audience-question',
      question: 'Have you ever felt more productive, but less fulfilled?',
      subtext: 'Raise your hand if this resonates with you'
    },
    // Slides 5-7: Journey
    {
      id: 5,
      type: 'journey',
      title: 'My 3-Year Journey with AI',
      subtitle: 'Chapter 1: Early Adoption (2021)',
      content: 'Discovered GPT-3, started automating simple coding tasks. Everything felt magical and limitless.',
      icon: '🌟',
      timeline: '2021'
    },
    {
      id: 6,
      type: 'journey',
      title: 'My 3-Year Journey with AI',
      subtitle: 'Chapter 2: Transformation (2022)',
      content: 'Integrated AI into daily workflows. Code reviews, documentation, even creative writing - AI became my co-pilot.',
      icon: '🚀',
      timeline: '2022'
    },
    {
      id: 7,
      type: 'journey',
      title: 'My 3-Year Journey with AI',
      subtitle: 'Chapter 3: Dilemmas (2023-2024)',
      content: 'Started questioning: Am I solving problems or just prompting solutions? Where did my creativity go?',
      icon: '🤔',
      timeline: '2023-2024'
    },
    // Slides 8-10: Searching for Balance
    {
      id: 8,
      type: 'challenge',
      title: 'The Overload',
      content: 'Too many AI tools, too many possibilities. Decision paralysis set in.',
      visual: 'overload'
    },
    {
      id: 9,
      type: 'challenge',
      title: 'The Detachment',
      content: 'Work felt efficient but hollow. Like watching someone else solve my problems.',
      visual: 'detachment'
    },
    {
      id: 10,
      type: 'balance-attempt',
      title: 'Attempting Balance',
      content: 'Set boundaries: AI-free hours, manual journaling, deliberate slow thinking.',
      visual: 'balance'
    },
    // Slides 11-13: Insights
    {
      id: 11,
      type: 'insight',
      title: 'Insight #1',
      content: 'Efficiency isn\'t always meaningful',
      description: 'Fast answers aren\'t always the right answers. Sometimes the struggle is the point.',
      visual: 'efficiency'
    },
    {
      id: 12,
      type: 'insight',
      title: 'Insight #2',
      content: 'Collaboration > Automation',
      description: 'AI works best as a thinking partner, not a replacement for thinking.',
      visual: 'collaboration'
    },
    {
      id: 13,
      type: 'insight',
      title: 'Insight #3',
      content: 'Preserve the human spark',
      description: 'The messy, imperfect, uniquely human process of creation has value.',
      visual: 'spark'
    },
    // Slides 14-15: Tool or Driver
    {
      id: 14,
      type: 'comparison',
      title: 'AI as Tool',
      content: 'Amplifies human capability, supports decision-making, enhances creativity',
      visual: 'tool'
    },
    {
      id: 15,
      type: 'comparison',
      title: 'AI as Driver',
      content: 'Dictates workflow, makes decisions for us, replaces human judgment',
      visual: 'driver'
    },
    // Slides 16-17: Open Questions
    {
      id: 16,
      type: 'reflection',
      title: 'Open Questions',
      questions: [
        'What human element do you want to preserve?',
        'How do you maintain agency in an AI-driven world?',
        'What does "balance" mean to you?'
      ]
    },
    {
      id: 17,
      type: 'reflection',
      title: 'For Reflection',
      questions: [
        'When do you feel most creative?',
        'What work gives you the deepest satisfaction?',
        'How can AI support, not replace, these moments?'
      ]
    },
    // Slide 18: Closing
    {
      id: 18,
      type: 'closing',
      title: 'The Path Forward',
      content: 'Balance isn\'t a destination—it\'s a practice. Let\'s reflect together on finding our sustainable path in the AI era.',
      visual: 'path'
    },
    // Slide 19: Toolkit
    {
      id: 19,
      type: 'toolkit',
      title: 'Reflection Toolkit',
      content: 'Scan for a personal reflection framework',
      qr: true
    },
    // Slide 20: Thank You
    {
      id: 20,
      type: 'thanks',
      title: 'Thank You',
      subtitle: 'Questions & Discussion',
      content: 'Let\'s continue this conversation together'
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000); // Changed to 5 seconds for better pacing
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay, slides.length]);

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
      {/* Dynamic Background Elements */}
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

      {/* Controls */}
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

      {/* Slide Content */}
      <div className="relative h-screen flex items-center justify-center p-8 z-10">
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
                  <p className={`text-xl leading-relaxed ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>{slide.content}</p>
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
      </div>

      {/* Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-50">
        <Button
          onClick={prevSlide}
          variant="outline"
          size="sm"
          className={`${darkMode ? 'bg-slate-800/80 border-slate-600 text-white hover:bg-slate-700' : 'bg-white/80 text-slate-900 hover:bg-white'} backdrop-blur-sm`}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-blue-500 w-8'
                  : darkMode ? 'bg-slate-600' : 'bg-slate-300'
              }`}
            />
          ))}
        </div>

        <Button
          onClick={nextSlide}
          variant="outline"
          size="sm"
          className={`${darkMode ? 'bg-slate-800/80 border-slate-600 text-white hover:bg-slate-700' : 'bg-white/80 text-slate-900 hover:bg-white'} backdrop-blur-sm`}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Slide counter */}
      <div className={`fixed bottom-4 right-4 text-sm opacity-70 z-50 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default Presentation;
