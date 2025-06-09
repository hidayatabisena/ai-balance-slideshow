
import { Slide } from '@/types/slides';

export const slides: Slide[] = [
  // Slide 1: Title
  {
    id: 1,
    type: 'title',
    title: 'Menemukan Keseimbangan Di Era AI',
    subtitle: 'sebagai pembuka jalan produktifitas berkelanjutan',
    author: 'Hidayat Abisena',
    quote: '"Technology is best when it brings people together." - Matt Mullenweg (CEO of Automattic/WordPress)',
    logos: [
      'https://framerusercontent.com/images/0aaSOxupKAsVA4ou30WbxLvSQo0.png',
      'https://res.cloudinary.com/moyadev/image/upload/v1749432065/Mayar/logo-unma-transparent_likzmk.png'
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
