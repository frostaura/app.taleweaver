import { Theme } from '../types';

export const mockThemes: Theme[] = [
  {
    id: 'magical-forest',
    name: 'Magical Forest',
    description: 'Adventure through enchanted woods',
    iconUrl: '/assets/icons/tree.svg',
    category: 'magical'
  },
  {
    id: 'space-journey',
    name: 'Space Journey',
    description: 'Explore distant planets and stars',
    iconUrl: '/assets/icons/rocket.svg',
    category: 'space'
  },
  {
    id: 'underwater-adventure',
    name: 'Underwater Adventure',
    description: 'Dive deep into ocean mysteries',
    iconUrl: '/assets/icons/wave.svg',
    category: 'underwater'
  },
  {
    id: 'castle-kingdom',
    name: 'Castle Kingdom',
    description: 'Medieval adventures in royal lands',
    iconUrl: '/assets/icons/castle.svg',
    category: 'adventure'
  },
  {
    id: 'science-lab',
    name: 'Science Laboratory',
    description: 'Fun experiments and discoveries',
    iconUrl: '/assets/icons/potion.svg',
    category: 'educational'
  },
  {
    id: 'nature-park',
    name: 'Nature Park',
    description: 'Learn about animals and plants',
    iconUrl: '/assets/icons/flower.svg',
    category: 'nature'
  }
];

export class ThemeRepository {
  static async getAllThemes(): Promise<Theme[]> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return mockThemes;
  }

  static async getThemeById(id: string): Promise<Theme | undefined> {
    await new Promise(resolve => setTimeout(resolve, 50));
    return mockThemes.find(theme => theme.id === id);
  }

  static async getThemesByCategory(category: Theme['category']): Promise<Theme[]> {
    await new Promise(resolve => setTimeout(resolve, 50));
    return mockThemes.filter(theme => theme.category === category);
  }
}