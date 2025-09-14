export interface ChildProfile {
  id: string;
  name: string;
  age: number;
  defaultSettings: StorySettings;
  contentFilters: ContentFilters;
  createdAt: Date;
}

export interface StorySettings {
  themes: string[];
  characters: string[];
  voicePreferences: VoiceSettings;
  storyLength: 'short' | 'medium' | 'long';
  backgroundMusic: boolean;
  musicVolume: number;
  educationalTopics: string[];
}

export interface VoiceSettings {
  gender: 'male' | 'female' | 'neutral';
  accent: string;
  speed: number;
  language: string;
}

export interface ContentFilters {
  allowedThemes: string[];
  allowedAdventureTypes: string[];
  allowedEducationalTopics: string[];
  blockScaryContent: boolean;
  ageAppropriate: boolean;
}

export interface Story {
  id: string;
  title: string;
  content: string;
  childProfileId: string;
  settings: StorySettings;
  isFavorite: boolean;
  createdAt: Date;
  cachedUntil?: Date;
}

export interface Character {
  id: string;
  name: string;
  type: 'dragon' | 'unicorn' | 'fairy' | 'wizard' | 'knight' | 'alien' | 'mermaid' | 'robot' | 'pirate' | 'other';
  iconUrl: string;
  description: string;
}

export interface Theme {
  id: string;
  name: string;
  description: string;
  iconUrl: string;
  category: 'magical' | 'adventure' | 'educational' | 'nature' | 'space' | 'underwater';
}

export interface AppState {
  profiles: ChildProfile[];
  activeProfileId?: string;
  stories: Story[];
  characters: Character[];
  themes: Theme[];
  isParentalControlsLocked: boolean;
}