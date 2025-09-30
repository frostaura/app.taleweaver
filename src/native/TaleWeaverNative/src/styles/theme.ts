export const theme = {
  colors: {
    primary: '#2D1B4E',      // Deeper dark purple from the design
    secondary: '#4A3B72',    // Medium purple
    background: '#1A0F2E',   // Very dark navy purple background
    cardBg: '#3D2A5C',       // Card background with blue tint
    accent: '#FFB366',       // Orange/peachy accent
    pink: '#FF6B9D',         // Pink accent
    blue: '#5B8FDF',         // Soft blue
    teal: '#4ECDC4',         // Teal blue
    white: '#FFFFFF',
    text: '#FFFFFF',
    textSecondary: '#B8A9D9',
    star: '#FFD23F',         // Warm yellow star
    moon: '#FFC947',         // Moon color
    diamond: '#9B8CE8',      // Purple diamond
    heart: '#FF6B9D',
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336'
  },
  gradients: {
    background: ['#2D1B4E', '#1A0F2E', '#0F0A1D'] as const, // Convert to array for React Native
    primary: ['#4A3B72', '#2D1B4E'] as const,
    card: ['#3D2A5C', '#2D1B4E'] as const,
    cardHover: ['#483574', '#332059'] as const,
    accent: ['#FFB366', '#FF8E53'] as const,
    pink: ['#FF6B9D', '#C44569'] as const,
    lockGradient: ['#FF8E53', '#FFB366'] as const,
    shield: ['#9B8CE8', '#6B5FBF'] as const
  },
  shadows: {
    card: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 0.4,
      shadowRadius: 16,
      elevation: 12, // Android
    },
    cardHover: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 16 },
      shadowOpacity: 0.5,
      shadowRadius: 20,
      elevation: 16, // Android
    },
    button: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      elevation: 6, // Android
    },
    glow: {
      shadowColor: '#FFB366',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      elevation: 10, // Android
    }
  },
  borderRadius: {
    small: 8,
    medium: 16,
    large: 24,
    xl: 32
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48
  },
  fonts: {
    primary: 'System',
    heading: 'System'
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
    xxl: 32,
    xxxl: 48
  },
  fontWeights: {
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const
  },
  breakpoints: {
    mobile: 480,
    tablet: 768,
    desktop: 1024
  }
};

export type Theme = typeof theme;