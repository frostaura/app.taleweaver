import React from 'react';
import styled from 'styled-components';
import { Card, Subtitle, Grid as BaseGrid } from '../styles/components';
import { 
  ShieldIcon, 
  LockIcon, 
  MagicWandIcon, 
  BookIcon, 
  RabbitIcon, 
  HeartIcon, 
  CatIcon, 
  FlowerIcon, 
  DinosaurIcon,
  MoonIcon,
  StarIcon,
  DiamondIcon
} from './Icons';

interface FeatureCardProps {
  title: string;
  icon: string;
  variant: 'privacy' | 'parental' | 'generate' | 'custom';
  onClick: () => void;
  showActionButtons?: boolean;
  showCharacterGrid?: boolean;
}

const StyledCard = styled(Card).withConfig({
  shouldForwardProp: (prop) => !['variant'].includes(prop),
})<{ variant: 'privacy' | 'parental' | 'generate' | 'custom' }>`
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  position: relative;
  
  background: ${props => {
    switch (props.variant) {
      case 'privacy':
        return props.theme.gradients.card;
      case 'parental':
        return props.theme.gradients.card;
      case 'generate':
        return props.theme.gradients.card;
      case 'custom':
        return props.theme.gradients.card;
      default:
        return props.theme.gradients.card;
    }
  }};
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: ${props => props.theme.shadows.cardHover};
    background: ${props => props.theme.gradients.cardHover};
  }
  
  /* Add decorative elements for each card type */
  &::after {
    content: '';
    position: absolute;
    top: ${props => props.theme.spacing.md};
    right: ${props => props.theme.spacing.md};
    width: 16px;
    height: 16px;
    background: transparent;
  }
`;

const IconContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['variant'].includes(prop),
})<{ variant: 'privacy' | 'parental' | 'generate' | 'custom' }>`
  width: 80px;
  height: 80px;
  margin: 0 auto ${props => props.theme.spacing.md} auto;
  background: ${props => {
    switch (props.variant) {
      case 'privacy':
        return props.theme.gradients.shield;
      case 'parental':
        return props.theme.gradients.lockGradient;
      case 'generate':
        return props.theme.gradients.card;
      case 'custom':
        return props.theme.gradients.card;
      default:
        return props.theme.gradients.card;
    }
  }};
  border-radius: ${props => props.theme.borderRadius.large};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: ${props => props.theme.shadows.inner};
  
  /* Special styling for generate card */
  ${props => props.variant === 'generate' && `
    background: transparent;
    box-shadow: none;
  `}
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${props => props.theme.spacing.md};
`;

const GenerateButton = styled.div`
  width: 100%;
  height: 40px;
  background: ${props => props.theme.gradients.accent};
  border-radius: ${props => props.theme.borderRadius.large};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  margin: ${props => props.theme.spacing.md} 0;
  box-shadow: ${props => props.theme.shadows.button};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%);
  }
`;

const ActionButtonsGrid = styled(BaseGrid)`
  margin-top: auto;
  padding-top: ${props => props.theme.spacing.md};
  grid-template-columns: repeat(3, 1fr);
  gap: ${props => props.theme.spacing.sm};
`;

const ActionButton = styled.div.withConfig({
  shouldForwardProp: (prop) => !['color'].includes(prop),
})<{ color: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const CharacterGrid = styled(BaseGrid)`
  margin-top: auto;
  padding-top: ${props => props.theme.spacing.md};
  grid-template-columns: repeat(2, 1fr);
  gap: ${props => props.theme.spacing.sm};
`;

const CharacterIcon = styled.div.withConfig({
  shouldForwardProp: (prop) => !['bgColor'].includes(prop),
})<{ bgColor: string }>`
  width: 48px;
  height: 48px;
  border-radius: ${props => props.theme.borderRadius.medium};
  background: ${props => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.2s ease;
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
  }
  
  &:hover {
    transform: scale(1.05);
  }
`;

const DecorationWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !['variant'].includes(prop),
})<{ variant: 'privacy' | 'parental' | 'generate' | 'custom' }>`
  position: absolute;
  top: ${props => props.theme.spacing.md};
  right: ${props => props.theme.spacing.md};
  z-index: 1;
`;

const ProgressPlaceholder = styled.div`
  width: 100%;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 70%;
    background: ${props => props.theme.gradients.pink};
    border-radius: 6px;
    animation: shimmer 2s ease-in-out infinite;
  }
  
  @keyframes shimmer {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 1; }
  }
  
  @keyframes sparkle {
    0%, 100% { 
      transform: scale(1) rotate(0deg);
      opacity: 0.8;
    }
    50% { 
      transform: scale(1.2) rotate(180deg);
      opacity: 1;
    }
  }
`;

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  icon,
  variant,
  onClick,
  showActionButtons,
  showCharacterGrid
}) => {
  const renderIcon = () => {
    if (variant === 'privacy') {
      return (
        <IconContainer variant={variant}>
          <div style={{ position: 'relative' }}>
            <ShieldIcon size={48} />
            <div style={{ 
              position: 'absolute', 
              top: '-4px', 
              right: '-4px'
            }}>
              <StarIcon size={12} />
            </div>
          </div>
        </IconContainer>
      );
    }
    
    if (variant === 'parental') {
      return (
        <IconContainer variant={variant}>
          <LockIcon size={48} />
        </IconContainer>
      );
    }
    
    if (variant === 'generate') {
      return (
        <div style={{ position: 'relative', margin: '16px 0' }}>
          <MagicWandIcon size={64} />
          <div style={{ 
            position: 'absolute', 
            top: '-8px', 
            right: '-8px', 
            animation: 'sparkle 2s ease-in-out infinite'
          }}>
            <StarIcon size={16} />
          </div>
        </div>
      );
    }
    
    return (
      <IconContainer variant={variant}>
        <BookIcon size={48} />
      </IconContainer>
    );
  };

  return (
    <StyledCard variant={variant} onClick={onClick}>
      {/* Decorative elements */}
      <DecorationWrapper variant={variant}>
        {variant === 'privacy' && <StarIcon size={12} />}
        {variant === 'parental' && <MoonIcon size={16} />}
        {variant === 'generate' && <StarIcon size={12} />}
        {variant === 'custom' && <DiamondIcon size={8} />}
      </DecorationWrapper>
      
      <ContentArea>
        {renderIcon()}
        <Subtitle style={{ marginBottom: '12px', fontSize: '18px' }}>{title}</Subtitle>
        
        {variant === 'generate' && <GenerateButton>Generate Story</GenerateButton>}
        
        {/* Add content lines for privacy and parental cards */}
        {(variant === 'privacy' || variant === 'parental') && (
          <div style={{ width: '100%', marginTop: '16px' }}>
            <div style={{ 
              width: '100%', 
              height: '6px', 
              background: 'rgba(255, 255, 255, 0.15)', 
              borderRadius: '3px',
              marginBottom: '8px'
            }} />
            <div style={{ 
              width: '80%', 
              height: '6px', 
              background: 'rgba(255, 255, 255, 0.15)', 
              borderRadius: '3px',
              marginBottom: '8px'
            }} />
            <div style={{ 
              width: '90%', 
              height: '6px', 
              background: 'rgba(255, 255, 255, 0.15)', 
              borderRadius: '3px',
              marginBottom: '8px'
            }} />
            <div style={{ 
              width: '75%', 
              height: '6px', 
              background: 'rgba(255, 255, 255, 0.15)', 
              borderRadius: '3px'
            }} />
          </div>
        )}
      </ContentArea>
      
      {showActionButtons && (
        <ActionButtonsGrid>
          <ActionButton color="#FF6B9D">
            <RabbitIcon size={20} />
          </ActionButton>
          <ActionButton color="#4A3F6A">
            <BookIcon size={20} />
          </ActionButton>
          <ActionButton color="#FF8E53">
            <HeartIcon size={20} />
          </ActionButton>
        </ActionButtonsGrid>
      )}
      
      {showCharacterGrid && (
        <CharacterGrid>
          <CharacterIcon bgColor="#FF8E53">
            <CatIcon size={24} />
          </CharacterIcon>
          <CharacterIcon bgColor="#5B8FDF">
            <FlowerIcon size={24} />
          </CharacterIcon>
          <CharacterIcon bgColor="#9B8CE8">
            <DinosaurIcon size={24} />
          </CharacterIcon>
          <CharacterIcon bgColor="rgba(255, 255, 255, 0.1)">
            <ProgressPlaceholder />
          </CharacterIcon>
        </CharacterGrid>
      )}
    </StyledCard>
  );
};

export default FeatureCard;