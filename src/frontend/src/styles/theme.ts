export const theme = {
  colors: {
    primary: '#3B2E5A',      // Dark purple from the design
    secondary: '#5A4B7C',    // Medium purple
    background: '#2A1F3D',   // Very dark purple background
    cardBg: '#4A3F6A',       // Card background
    accent: '#FFB366',       // Orange/yellow accent
    pink: '#FF6B9D',         // Pink accent
    blue: '#4ECDC4',         // Teal blue
    white: '#FFFFFF',
    text: '#FFFFFF',
    textSecondary: '#B8A9D9',
    star: '#FFD700',
    heart: '#FF6B9D',
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336'
  },
  gradients: {
    primary: 'linear-gradient(135deg, #5A4B7C 0%, #3B2E5A 100%)',
    card: 'linear-gradient(135deg, #4A3F6A 0%, #3B2E5A 100%)',
    accent: 'linear-gradient(135deg, #FFB366 0%, #FF8E53 100%)',
    pink: 'linear-gradient(135deg, #FF6B9D 0%, #C44569 100%)'
  },
  shadows: {
    card: '0 8px 32px rgba(0, 0, 0, 0.3)',
    button: '0 4px 15px rgba(0, 0, 0, 0.2)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)'
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