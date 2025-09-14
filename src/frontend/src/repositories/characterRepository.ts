import { Character } from '../types';

export const mockCharacters: Character[] = [
  {
    id: 'dragon-red',
    name: 'Ruby Dragon',
    type: 'dragon',
    iconUrl: '/assets/characters/dragon-red.svg',
    description: 'A friendly red dragon who loves adventures'
  },
  {
    id: 'dragon-blue',
    name: 'Sapphire Dragon',
    type: 'dragon',
    iconUrl: '/assets/characters/dragon-blue.svg',
    description: 'A wise blue dragon with magical powers'
  },
  {
    id: 'unicorn-purple',
    name: 'Luna Unicorn',
    type: 'unicorn',
    iconUrl: '/assets/characters/unicorn-purple.svg',
    description: 'A magical purple unicorn with a starry mane'
  },
  {
    id: 'fairy-blonde',
    name: 'Stella Fairy',
    type: 'fairy',
    iconUrl: '/assets/characters/fairy-blonde.svg',
    description: 'A cheerful fairy with a magic wand'
  },
  {
    id: 'wizard-blue',
    name: 'Merlin Jr.',
    type: 'wizard',
    iconUrl: '/assets/characters/wizard-blue.svg',
    description: 'A young wizard learning magic spells'
  },
  {
    id: 'knight-armor',
    name: 'Sir Brave',
    type: 'knight',
    iconUrl: '/assets/characters/knight-armor.svg',
    description: 'A brave knight with shining armor'
  },
  {
    id: 'alien-green',
    name: 'Zyx from Mars',
    type: 'alien',
    iconUrl: '/assets/characters/alien-green.svg',
    description: 'A friendly alien visitor from space'
  },
  {
    id: 'mermaid-pink',
    name: 'Coral Mermaid',
    type: 'mermaid',
    iconUrl: '/assets/characters/mermaid-pink.svg',
    description: 'A kind mermaid who protects the ocean'
  },
  {
    id: 'robot-grey',
    name: 'Bolt Bot',
    type: 'robot',
    iconUrl: '/assets/characters/robot-grey.svg',
    description: 'A helpful robot companion'
  },
  {
    id: 'pirate-ship',
    name: 'Captain Adventure',
    type: 'pirate',
    iconUrl: '/assets/characters/pirate-ship.svg',
    description: 'A friendly pirate seeking treasure'
  }
];

export class CharacterRepository {
  static async getAllCharacters(): Promise<Character[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return mockCharacters;
  }

  static async getCharacterById(id: string): Promise<Character | undefined> {
    await new Promise(resolve => setTimeout(resolve, 50));
    return mockCharacters.find(char => char.id === id);
  }

  static async getCharactersByType(type: Character['type']): Promise<Character[]> {
    await new Promise(resolve => setTimeout(resolve, 50));
    return mockCharacters.filter(char => char.type === type);
  }
}