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
    background: 'radial-gradient(ellipse at center, #2D1B4E 0%, #1A0F2E 70%, #0F0A1D 100%)',
    primary: 'linear-gradient(135deg, #4A3B72 0%, #2D1B4E 100%)',
    card: 'linear-gradient(135deg, #3D2A5C 0%, #2D1B4E 100%)',
    cardHover: 'linear-gradient(135deg, #483574 0%, #332059 100%)',
    accent: 'linear-gradient(135deg, #FFB366 0%, #FF8E53 100%)',
    pink: 'linear-gradient(135deg, #FF6B9D 0%, #C44569 100%)',
    lockGradient: 'linear-gradient(135deg, #FF8E53 0%, #FFB366 100%)',
    shield: 'linear-gradient(135deg, #9B8CE8 0%, #6B5FBF 100%)'
  },
  shadows: {
    card: '0 12px 40px rgba(0, 0, 0, 0.4)',
    cardHover: '0 16px 48px rgba(0, 0, 0, 0.5)',
    button: '0 6px 20px rgba(0, 0, 0, 0.3)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)',
    glow: '0 0 20px rgba(255, 179, 102, 0.3)'
  },
  borderRadius: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xl: '32px'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px'
  },
  fonts: {
    primary: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    heading: "'Poppins', 'Inter', sans-serif"
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '24px',
    xxl: '32px',
    xxxl: '48px'
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px'
  }
};

export type Theme = typeof theme;