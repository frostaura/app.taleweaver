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
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    overflow-x: hidden;
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
  background: ${theme.colors.background};
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
      radial-gradient(2px 2px at 20px 30px, #FFD700, transparent),
      radial-gradient(2px 2px at 40px 70px, #FFB366, transparent),
      radial-gradient(1px 1px at 90px 40px, #FFFFFF, transparent),
      radial-gradient(1px 1px at 130px 80px, #4ECDC4, transparent),
      radial-gradient(2px 2px at 160px 30px, #FF6B9D, transparent);
    background-repeat: repeat;
    background-size: 200px 100px;
    opacity: 0.3;
    z-index: -1;
    pointer-events: none;
  }
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

export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'accent' }>`
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.large};
  font-size: ${theme.fontSizes.md};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.white};
  transition: all 0.3s ease;
  box-shadow: ${theme.shadows.button};
  
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
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
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

export const IconWrapper = styled.div<{ size?: 'small' | 'medium' | 'large' }>`
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
  margin-bottom: ${theme.spacing.md};
  
  svg, img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Grid = styled.div<{ columns?: number; gap?: string }>`
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

export const Text = styled.p<{ size?: 'sm' | 'md' | 'lg'; color?: string }>`
  font-size: ${props => theme.fontSizes[props.size || 'md']};
  color: ${props => props.color || theme.colors.text};
  line-height: 1.5;
  margin-bottom: ${theme.spacing.sm};
`;