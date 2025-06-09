
export interface SlideBase {
  id: number;
  type: string;
}

export interface TitleSlide extends SlideBase {
  type: 'title';
  title: string;
  subtitle: string;
  author: string;
  quote: string;
  logos: string[];
}

export interface QuoteSlide extends SlideBase {
  type: 'quote';
  content: string;
  author: string;
  question: string;
}

export interface StorySlide extends SlideBase {
  type: 'story';
  title: string;
  content: string | string[];
  result: string;
  visual: string;
}

export interface AudienceQuestionSlide extends SlideBase {
  type: 'audience-question';
  question: string;
  subtext: string;
}

export interface JourneySlide extends SlideBase {
  type: 'journey';
  title: string;
  subtitle: string;
  content: string;
  icon: string;
  timeline: string;
}

export interface ChallengeSlide extends SlideBase {
  type: 'challenge';
  title: string;
  content: string | string[];
  visual: string;
}

export interface BalanceAttemptSlide extends SlideBase {
  type: 'balance-attempt';
  title: string;
  content: string;
  visual: string;
}

export interface InsightSlide extends SlideBase {
  type: 'insight';
  title: string;
  content: string;
  description: string;
  visual: string;
}

export interface ComparisonSlide extends SlideBase {
  type: 'comparison';
  title: string;
  content: string;
  visual: string;
}

export interface ReflectionSlide extends SlideBase {
  type: 'reflection';
  title: string;
  questions: string[];
}

export interface ClosingSlide extends SlideBase {
  type: 'closing';
  title: string;
  content: string | string[];
  visual: string;
}

export interface ToolkitSlide extends SlideBase {
  type: 'toolkit';
  title: string;
  content: string;
  qr: boolean;
}

export interface ThanksSlide extends SlideBase {
  type: 'thanks';
  title: string;
  subtitle: string;
  content: string;
}

export interface ComparisonTableSlide extends SlideBase {
  type: 'comparison-table';
  title: string;
  subtitle: string;
  headers: string[];
  rows: {
    aspect: string;
    withAI: string;
    withoutAI: string;
  }[];
}

export type Slide = 
  | TitleSlide 
  | QuoteSlide 
  | StorySlide 
  | AudienceQuestionSlide 
  | JourneySlide 
  | ChallengeSlide 
  | BalanceAttemptSlide 
  | InsightSlide 
  | ComparisonSlide 
  | ReflectionSlide 
  | ClosingSlide 
  | ToolkitSlide 
  | ThanksSlide
  | ComparisonTableSlide;
