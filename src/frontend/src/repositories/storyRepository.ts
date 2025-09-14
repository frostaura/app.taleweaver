import { Story } from '../types';

export const mockStories: Story[] = [
  {
    id: 'story-1',
    title: 'Emma\'s Magical Forest Adventure',
    content: 'Once upon a time, Emma met a beautiful purple unicorn named Luna in a magical forest. Together they discovered a hidden garden where flowers sang beautiful melodies and butterflies painted rainbows in the sky...',
    childProfileId: 'profile-1',
    settings: {
      themes: ['magical-forest'],
      characters: ['unicorn-purple'],
      voicePreferences: {
        gender: 'female',
        accent: 'british',
        speed: 1.0,
        language: 'en'
      },
      storyLength: 'medium',
      backgroundMusic: true,
      musicVolume: 0.5,
      educationalTopics: ['nature', 'friendship']
    },
    isFavorite: true,
    createdAt: new Date('2024-01-16')
  },
  {
    id: 'story-2',
    title: 'Alex\'s Space Robot Mission',
    content: 'Alex and his robot friend Bolt Bot embarked on an incredible journey to Mars. They met a friendly alien named Zyx who showed them amazing crystal caves and taught them about the red planet\'s mysteries...',
    childProfileId: 'profile-2',
    settings: {
      themes: ['space-journey'],
      characters: ['robot-grey', 'alien-green'],
      voicePreferences: {
        gender: 'male',
        accent: 'american',
        speed: 1.1,
        language: 'en'
      },
      storyLength: 'long',
      backgroundMusic: true,
      musicVolume: 0.7,
      educationalTopics: ['science', 'space']
    },
    isFavorite: false,
    createdAt: new Date('2024-01-21'),
    cachedUntil: new Date('2024-02-04')
  }
];

export class StoryRepository {
  static async getAllStories(): Promise<Story[]> {
    await new Promise(resolve => setTimeout(resolve, 100));
    const stored = localStorage.getItem('taleweaver_stories');
    if (stored) {
      return JSON.parse(stored);
    }
    return mockStories;
  }

  static async getStoriesByProfile(profileId: string): Promise<Story[]> {
    const stories = await this.getAllStories();
    return stories.filter(story => story.childProfileId === profileId);
  }

  static async getFavoriteStories(): Promise<Story[]> {
    const stories = await this.getAllStories();
    return stories.filter(story => story.isFavorite);
  }

  static async saveStory(story: Story): Promise<void> {
    const stories = await this.getAllStories();
    const index = stories.findIndex(s => s.id === story.id);
    
    if (index !== -1) {
      stories[index] = story;
    } else {
      stories.push(story);
    }
    
    localStorage.setItem('taleweaver_stories', JSON.stringify(stories));
  }

  static async deleteStory(id: string): Promise<void> {
    const stories = await this.getAllStories();
    const filtered = stories.filter(s => s.id !== id);
    localStorage.setItem('taleweaver_stories', JSON.stringify(filtered));
  }

  static async toggleFavorite(id: string): Promise<void> {
    const stories = await this.getAllStories();
    const story = stories.find(s => s.id === id);
    if (story) {
      story.isFavorite = !story.isFavorite;
      localStorage.setItem('taleweaver_stories', JSON.stringify(stories));
    }
  }
}