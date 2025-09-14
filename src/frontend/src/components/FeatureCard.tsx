import React from 'react';
import styled from 'styled-components';
import { Card, Subtitle, IconWrapper, Grid as BaseGrid } from '../styles/components';

interface FeatureCardProps {
  title: string;
  icon: string;
  gradient: 'primary' | 'accent';
  onClick: () => void;
  showActionButtons?: boolean;
  showCharacterGrid?: boolean;
}

const StyledCard = styled(Card).withConfig({
  shouldForwardProp: (prop) => !['gradient'].includes(prop),
})<{ gradient: 'primary' | 'accent' }>`
  cursor: pointer;
  transition: transform 0.3s ease;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  
  background: ${props => 
    props.gradient === 'accent' 
      ? props.theme.gradients.accent 
      : props.theme.gradients.card
  };
  
  &:hover {
    transform: translateY(-4px);
  }
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
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
  
  &:hover {
    transform: scale(1.1);
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  margin: ${props => props.theme.spacing.sm} 0;
  overflow: hidden;
  
  &::after {
    content: '';
    display: block;
    width: 60%;
    height: 100%;
    background: ${props => props.theme.gradients.pink};
    border-radius: 4px;
  }
`;

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  icon,
  gradient,
  onClick,
  showActionButtons,
  showCharacterGrid
}) => {
  return (
    <StyledCard gradient={gradient} onClick={onClick}>
      <ContentArea>
        <IconWrapper size="large">
          <span style={{ fontSize: '48px' }}>{icon}</span>
        </IconWrapper>
        <Subtitle>{title}</Subtitle>
        
        {title === 'Quick Generate' && <ProgressBar />}
      </ContentArea>
      
      {showActionButtons && (
        <ActionButtonsGrid>
          <ActionButton color="#FF6B9D">🐰</ActionButton>
          <ActionButton color="#4A3F6A">📖</ActionButton>
          <ActionButton color="#FF8E53">❤️</ActionButton>
        </ActionButtonsGrid>
      )}
      
      {showCharacterGrid && (
        <CharacterGrid>
          <CharacterIcon bgColor="#FF8E53">🐱</CharacterIcon>
          <CharacterIcon bgColor="#4ECDC4">🌸</CharacterIcon>
          <CharacterIcon bgColor="#B8A9D9">🦕</CharacterIcon>
          <CharacterIcon bgColor="#5A4B7C">
            <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.3)', borderRadius: '4px' }} />
          </CharacterIcon>
        </CharacterGrid>
      )}
    </StyledCard>
  );
};

export default FeatureCard;