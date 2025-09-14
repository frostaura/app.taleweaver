import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

// Shield icon for Privacy Policy
export const ShieldIcon: React.FC<IconProps> = ({ size = 32, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
    <defs>
      <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#7C3AED" />
        <stop offset="100%" stopColor="#5B21B6" />
      </linearGradient>
    </defs>
    <path
      d="M16 2L8 6v8c0 6 8 12 8 12s8-6 8-12V6l-8-4z"
      fill="url(#shieldGradient)"
      stroke="none"
    />
    <circle cx="16" cy="14" r="3" fill="#E5E7EB" />
    <circle cx="16" cy="14" r="1.5" fill="#1F2937" />
  </svg>
);

// Lock icon for Parental Controls  
export const LockIcon: React.FC<IconProps> = ({ size = 32, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
    <defs>
      <linearGradient id="lockGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
    </defs>
    <rect x="8" y="14" width="16" height="12" rx="2" fill="url(#lockGradient)" />
    <path
      d="M12 14V10c0-2.2 1.8-4 4-4s4 1.8 4 4v4"
      stroke="#6366F1"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="16" cy="20" r="2" fill="#FEF3C7" />
  </svg>
);

// Magic wand icon for Quick Generate
export const MagicWandIcon: React.FC<IconProps> = ({ size = 32, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
    <defs>
      <linearGradient id="wandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#7C3AED" />
      </linearGradient>
    </defs>
    <rect
      x="6"
      y="15"
      width="20"
      height="2"
      rx="1"
      fill="url(#wandGradient)"
      transform="rotate(45 16 16)"
    />
    <polygon
      points="24,8 28,12 26,14 22,10"
      fill="#FFD23F"
    />
    <circle cx="8" cy="8" r="1" fill="#FFD23F" />
    <circle cx="24" cy="24" r="1" fill="#FFD23F" />
    <circle cx="6" cy="20" r="0.5" fill="#FFD23F" />
  </svg>
);

// Book icon for Create Custom Story
export const BookIcon: React.FC<IconProps> = ({ size = 32, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
    <defs>
      <linearGradient id="bookGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1E40AF" />
      </linearGradient>
    </defs>
    <rect x="6" y="4" width="20" height="24" rx="2" fill="url(#bookGradient)" />
    <rect x="8" y="6" width="16" height="20" rx="1" fill="#BFDBFE" />
    <line x1="16" y1="4" x2="16" y2="28" stroke="#1E40AF" strokeWidth="1" />
    <circle cx="24" cy="16" r="1" fill="#F59E0B" />
  </svg>
);

// Rabbit icon for action button
export const RabbitIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    <circle cx="12" cy="16" r="6" fill="#FF8E9B" />
    <ellipse cx="8" cy="8" rx="2" ry="5" fill="#FF8E9B" />
    <ellipse cx="16" cy="8" rx="2" ry="5" fill="#FF8E9B" />
    <circle cx="10" cy="14" r="1" fill="#1F2937" />
    <circle cx="14" cy="14" r="1" fill="#1F2937" />
    <path d="M12 16v2" stroke="#1F2937" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

// Heart icon for action button
export const HeartIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill="#FF8E9B"
    />
  </svg>
);

// Cat icon for character selection
export const CatIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    <circle cx="12" cy="14" r="8" fill="#8B5CF6" />
    <polygon points="6,10 8,6 10,10" fill="#8B5CF6" />
    <polygon points="14,10 16,6 18,10" fill="#8B5CF6" />
    <circle cx="10" cy="12" r="1" fill="#1F2937" />
    <circle cx="14" cy="12" r="1" fill="#1F2937" />
    <path d="M9 15h6" stroke="#1F2937" strokeWidth="1" strokeLinecap="round" />
    <circle cx="12" cy="16" r="0.5" fill="#E879F9" />
  </svg>
);

// Flower icon for character selection
export const FlowerIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    <circle cx="12" cy="12" r="3" fill="#F59E0B" />
    <circle cx="12" cy="8" r="3" fill="#EC4899" />
    <circle cx="16" cy="12" r="3" fill="#EC4899" />
    <circle cx="12" cy="16" r="3" fill="#EC4899" />
    <circle cx="8" cy="12" r="3" fill="#EC4899" />
    <circle cx="10.5" cy="9.5" r="2" fill="#F472B6" />
    <circle cx="13.5" cy="9.5" r="2" fill="#F472B6" />
    <circle cx="13.5" cy="14.5" r="2" fill="#F472B6" />
    <circle cx="10.5" cy="14.5" r="2" fill="#F472B6" />
  </svg>
);

// Dinosaur icon for character selection
export const DinosaurIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    <ellipse cx="8" cy="16" rx="6" ry="4" fill="#8B5CF6" />
    <circle cx="4" cy="12" r="3" fill="#8B5CF6" />
    <ellipse cx="12" cy="8" rx="4" ry="6" fill="#8B5CF6" />
    <polygon points="14,4 16,2 18,4 16,6" fill="#A855F7" />
    <polygon points="18,6 20,4 22,6 20,8" fill="#A855F7" />
    <polygon points="10,2 12,0 14,2 12,4" fill="#A855F7" />
    <circle cx="6" cy="10" r="1" fill="#1F2937" />
    <ellipse cx="2" cy="18" rx="2" ry="1" fill="#8B5CF6" />
    <ellipse cx="6" cy="19" rx="1.5" ry="0.8" fill="#8B5CF6" />
    <ellipse cx="10" cy="18.5" rx="1" ry="0.5" fill="#8B5CF6" />
  </svg>
);

// Moon decoration
export const MoonIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" className={className}>
    <path
      d="M6 2C6 6.418 9.582 10 14 10 13.056 12.84 10.234 15 7 15 3.134 15 0 11.866 0 8S3.134 1 7 1c1.657 0 3.157.577 4.345 1.537A7.959 7.959 0 006 2z"
      fill="#F59E0B"
    />
    <circle cx="10" cy="5" r="1" fill="#FCD34D" />
    <circle cx="11" cy="7" r="0.5" fill="#FCD34D" />
  </svg>
);

// Star decoration
export const StarIcon: React.FC<IconProps> = ({ size = 12, className }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" className={className}>
    <path
      d="M6 0l1.854 3.757L12 4.382l-3 2.927.708 4.127L6 9.236l-3.708 2.2L3 7.309 0 4.382l4.146-.625L6 0z"
      fill="#FFD23F"
    />
  </svg>
);

// Diamond decoration
export const DiamondIcon: React.FC<IconProps> = ({ size = 8, className }) => (
  <svg width={size} height={size} viewBox="0 0 8 8" className={className}>
    <path
      d="M4 0L6 2L4 4L2 2L4 0z M4 4L6 6L4 8L2 6L4 4z"
      fill="#E879F9"
    />
  </svg>
);