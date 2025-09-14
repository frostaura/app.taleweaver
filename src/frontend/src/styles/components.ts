import styled, { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: ${theme.fonts.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background: ${theme.gradients.background};
    color: ${theme.colors.text};
    overflow-x: hidden;
    position: relative;
    
    /* Add starry background effect */
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        radial-gradient(2px 2px at 20px 30px, ${theme.colors.star}, transparent),
        radial-gradient(1px 1px at 80px 20px, ${theme.colors.white}, transparent),
        radial-gradient(1px 1px at 140px 60px, ${theme.colors.star}, transparent),
        radial-gradient(2px 2px at 200px 40px, ${theme.colors.accent}, transparent),
        radial-gradient(1px 1px at 280px 80px, ${theme.colors.white}, transparent),
        radial-gradient(1px 1px at 340px 30px, ${theme.colors.diamond}, transparent),
        radial-gradient(1px 1px at 400px 70px, ${theme.colors.star}, transparent);
      background-repeat: repeat;
      background-size: 420px 120px;
      opacity: 0.6;
      z-index: -2;
      pointer-events: none;
      animation: starryNight 30s linear infinite;
    }
    
    /* Add floating decorative elements */
    &::after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        radial-gradient(3px 3px at 100px 100px, ${theme.colors.moon}, transparent),
        radial-gradient(2px 2px at 300px 200px, ${theme.colors.diamond}, transparent);
      background-repeat: no-repeat;
      opacity: 0.4;
      z-index: -1;
      pointer-events: none;
    }
  }
  
  @keyframes starryNight {
    from { background-position: 0 0; }
    to { background-position: 420px 0; }
  }

  #root {
    height: 100%;
    min-height: 100vh;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  input, textarea {
    font-family: inherit;
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: ${theme.spacing.md};
  min-height: 100vh;
  position: relative;
  z-index: 1;
`;

export const Card = styled.div`
  background: ${theme.gradients.card};
  border-radius: ${theme.borderRadius.large};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.md};
  box-shadow: ${theme.shadows.card};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => !['variant'].includes(prop),
})<{ variant?: 'primary' | 'secondary' | 'accent' }>`
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.large};
  font-size: ${theme.fontSizes.md};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.white};
  transition: all 0.3s ease;
  box-shadow: ${theme.shadows.button};
  position: relative;
  overflow: hidden;
  
  background: ${props => {
    switch (props.variant) {
      case 'accent':
        return theme.gradients.accent;
      case 'secondary':
        return theme.gradients.primary;
      default:
        return theme.gradients.pink;
    }
  }};
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(255, 179, 102, 0.4);
  }
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: none;
  }
  
  /* Loading indicator for disabled state */
  &:disabled::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin: -10px 0 0 -10px;
    border: 2px solid transparent;
    border-top: 2px solid rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    animation: button-loading 1s linear infinite;
  }
  
  @keyframes button-loading {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Title = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.xxl};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text};
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Subtitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.md};
`;

export const IconWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['size'].includes(prop),
})<{ size?: 'small' | 'medium' | 'large' }>`
  width: ${props => {
    switch (props.size) {
      case 'small': return '32px';
      case 'large': return '80px';
      default: return '48px';
    }
  }};
  height: ${props => {
    switch (props.size) {
      case 'small': return '32px';
      case 'large': return '80px';
      default: return '48px';
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${theme.spacing.md} auto;
  
  svg, img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Grid = styled.div.withConfig({
  shouldForwardProp: (prop) => !['columns', 'gap'].includes(prop),
})<{ columns?: number; gap?: string }>`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 2}, 1fr);
  gap: ${props => props.gap || theme.spacing.md};
  margin-bottom: ${theme.spacing.md};
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

export const Text = styled.p.withConfig({
  shouldForwardProp: (prop) => !['size', 'color'].includes(prop),
})<{ size?: 'sm' | 'md' | 'lg'; color?: string }>`
  font-size: ${props => theme.fontSizes[props.size || 'md']};
  color: ${props => props.color || theme.colors.text};
  line-height: 1.5;
  margin-bottom: ${theme.spacing.sm};
`;