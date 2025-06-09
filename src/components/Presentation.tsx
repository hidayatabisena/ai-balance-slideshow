
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
    let interval: NodeJS.Timeout;
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 8000);
    }
    return () => clearInterval(interval);
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
    <div className={`min-h-screen transition-all duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white' 
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 text-slate-800'
    }`}>
      {/* Controls */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Button
          onClick={toggleAutoPlay}
          variant="outline"
          size="sm"
          className={`${darkMode ? 'bg-slate-800 border-slate-600' : 'bg-white/80'}`}
        >
          {autoPlay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button
          onClick={toggleDarkMode}
          variant="outline"
          size="sm"
          className={`${darkMode ? 'bg-slate-800 border-slate-600' : 'bg-white/80'}`}
        >
          {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>

      {/* Slide Content */}
      <div className="relative h-screen flex items-center justify-center p-8">
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
              <h2 className="text-3xl font-light text-slate-600 dark:text-slate-300">
                {slide.subtitle}
              </h2>
              <p className="text-xl italic text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                {slide.quote}
              </p>
              <p className="text-lg font-medium text-slate-700 dark:text-slate-200">
                {slide.author}
              </p>
            </div>
          )}

          {slide.type === 'quote' && (
            <div className="text-center space-y-8">
              <blockquote className="text-4xl font-light italic text-center max-w-4xl mx-auto">
                {slide.content}
              </blockquote>
              <p className="text-2xl text-slate-600 dark:text-slate-300">{slide.author}</p>
              <div className="mt-12 p-6 rounded-xl bg-blue-100 dark:bg-slate-800">
                <p className="text-xl text-blue-800 dark:text-blue-300">{slide.question}</p>
              </div>
            </div>
          )}

          {slide.type === 'story' && (
            <div className="space-y-8">
              <h1 className="text-5xl font-bold text-center mb-12">{slide.title}</h1>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-xl leading-relaxed">{slide.content}</p>
                  <div className="p-6 rounded-xl bg-yellow-100 dark:bg-yellow-900/30 border-l-4 border-yellow-500">
                    <p className="text-lg font-medium text-yellow-800 dark:text-yellow-300">
                      {slide.result}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <span className="text-6xl">🔬</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {slide.type === 'audience-question' && (
            <div className="text-center space-y-12">
              <h1 className="text-6xl font-bold leading-tight max-w-4xl mx-auto">
                {slide.question}
              </h1>
              <p className="text-2xl text-slate-600 dark:text-slate-300">{slide.subtext}</p>
              <div className="flex justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center animate-pulse">
                  <span className="text-4xl">🤚</span>
                </div>
              </div>
            </div>
          )}

          {slide.type === 'journey' && (
            <div className="space-y-8">
              <h1 className="text-4xl font-bold text-center">{slide.title}</h1>
              <div className="flex items-center justify-center gap-8">
                <div className="text-6xl">{slide.icon}</div>
                <div className="text-2xl font-light text-slate-600 dark:text-slate-400">{slide.timeline}</div>
              </div>
              <h2 className="text-3xl font-semibold text-center text-blue-600 dark:text-blue-400">
                {slide.subtitle}
              </h2>
              <p className="text-xl text-center max-w-3xl mx-auto leading-relaxed">
                {slide.content}
              </p>
            </div>
          )}

          {slide.type === 'challenge' && (
            <div className="text-center space-y-8">
              <h1 className="text-5xl font-bold text-red-600 dark:text-red-400">{slide.title}</h1>
              <p className="text-2xl max-w-3xl mx-auto leading-relaxed">{slide.content}</p>
              <div className="flex justify-center">
                <div className="w-48 h-48 rounded-lg bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center">
                  <span className="text-6xl">⚡</span>
                </div>
              </div>
            </div>
          )}

          {slide.type === 'balance-attempt' && (
            <div className="text-center space-y-8">
              <h1 className="text-5xl font-bold text-green-600 dark:text-green-400">{slide.title}</h1>
              <p className="text-2xl max-w-3xl mx-auto leading-relaxed">{slide.content}</p>
              <div className="flex justify-center">
                <div className="w-48 h-48 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                  <span className="text-6xl">⚖️</span>
                </div>
              </div>
            </div>
          )}

          {slide.type === 'insight' && (
            <div className="space-y-8">
              <h1 className="text-4xl font-bold text-center text-purple-600 dark:text-purple-400">
                {slide.title}
              </h1>
              <div className="text-center">
                <h2 className="text-5xl font-bold mb-6">{slide.content}</h2>
                <p className="text-xl max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
                  {slide.description}
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                  <span className="text-4xl">💡</span>
                </div>
              </div>
            </div>
          )}

          {slide.type === 'comparison' && (
            <div className="text-center space-y-8">
              <h1 className="text-6xl font-bold">{slide.title}</h1>
              <p className="text-2xl max-w-3xl mx-auto leading-relaxed">{slide.content}</p>
              <div className="flex justify-center">
                <div className={`w-48 h-48 rounded-lg flex items-center justify-center ${
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
              <h1 className="text-5xl font-bold text-center text-indigo-600 dark:text-indigo-400">
                {slide.title}
              </h1>
              <div className="space-y-6 max-w-4xl mx-auto">
                {slide.questions?.map((question, index) => (
                  <div key={index} className="p-6 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 border-l-4 border-indigo-500">
                    <p className="text-xl text-indigo-800 dark:text-indigo-300">{question}</p>
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
              <p className="text-2xl max-w-4xl mx-auto leading-relaxed">{slide.content}</p>
              <div className="flex justify-center">
                <div className="w-48 h-48 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                  <span className="text-6xl">🌱</span>
                </div>
              </div>
            </div>
          )}

          {slide.type === 'toolkit' && (
            <div className="text-center space-y-8">
              <h1 className="text-5xl font-bold">{slide.title}</h1>
              <p className="text-2xl">{slide.content}</p>
              <div className="flex justify-center">
                <div className="w-48 h-48 bg-white rounded-xl flex items-center justify-center border-4 border-slate-300">
                  <div className="w-32 h-32 bg-black rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs">QR Code</span>
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
              <h2 className="text-3xl font-light text-slate-600 dark:text-slate-300">
                {slide.subtitle}
              </h2>
              <p className="text-xl text-slate-500 dark:text-slate-400">{slide.content}</p>
              <div className="flex justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                  <span className="text-4xl">🙏</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        <Button
          onClick={prevSlide}
          variant="outline"
          size="sm"
          className={`${darkMode ? 'bg-slate-800 border-slate-600' : 'bg-white/80'}`}
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
          className={`${darkMode ? 'bg-slate-800 border-slate-600' : 'bg-white/80'}`}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Slide counter */}
      <div className="fixed bottom-4 right-4 text-sm opacity-70">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default Presentation;
