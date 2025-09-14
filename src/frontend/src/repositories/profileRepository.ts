import { ChildProfile } from '../types';

export const mockProfiles: ChildProfile[] = [
  {
    id: 'profile-1',
    name: 'Emma',
    age: 5,
    gender: 'female',
    customRestrictions: 'Keep stories gentle and peaceful. Emma is sensitive to loud noises in stories.',
    createdAt: new Date('2024-01-15'),
    defaultSettings: {
      themes: ['magical-forest', 'castle-kingdom'],
      characters: ['unicorn-purple', 'fairy-blonde'],
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
    contentFilters: {
      allowedThemes: ['magical', 'nature', 'educational'],
      allowedAdventureTypes: ['peaceful', 'learning'],
      allowedEducationalTopics: ['nature', 'science', 'friendship'],
      blockScaryContent: true,
      ageAppropriate: true
    }
  },
  {
    id: 'profile-2',
    name: 'Alex',
    age: 8,
    gender: 'male',
    customRestrictions: 'Alex loves space and science but gets nightmares from monster stories. Include facts and exploration themes.',
    createdAt: new Date('2024-01-20'),
    defaultSettings: {
      themes: ['space-journey', 'science-lab'],
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
      educationalTopics: ['science', 'space', 'technology']
    },
    contentFilters: {
      allowedThemes: ['space', 'educational', 'adventure'],
      allowedAdventureTypes: ['exploration', 'learning', 'mild-action'],
      allowedEducationalTopics: ['science', 'math', 'technology', 'space'],
      blockScaryContent: true,
      ageAppropriate: true
    }
  }
];

export class ProfileRepository {
  static async getAllProfiles(): Promise<ChildProfile[]> {
    await new Promise(resolve => setTimeout(resolve, 100));
    const stored = localStorage.getItem('taleweaver_profiles');
    if (stored) {
      return JSON.parse(stored);
    }
    return mockProfiles;
  }

  static async getProfileById(id: string): Promise<ChildProfile | undefined> {
    const profiles = await this.getAllProfiles();
    return profiles.find(profile => profile.id === id);
  }

  static async saveProfile(profile: ChildProfile): Promise<void> {
    const profiles = await this.getAllProfiles();
    const index = profiles.findIndex(p => p.id === profile.id);
    
    if (index !== -1) {
      profiles[index] = profile;
    } else {
      profiles.push(profile);
    }
    
    localStorage.setItem('taleweaver_profiles', JSON.stringify(profiles));
  }

  static async deleteProfile(id: string): Promise<void> {
    const profiles = await this.getAllProfiles();
    const filtered = profiles.filter(p => p.id !== id);
    localStorage.setItem('taleweaver_profiles', JSON.stringify(filtered));
  }
}