import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Title, Card, Button, Text, IconWrapper } from '../styles/components';
import CircularMenu from '../components/CircularMenu';

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.lg};
  width: 100%;
`;

const StyledCircularMenu = styled(CircularMenu)`
  /* Custom styling if needed */
`;

const AppTitle = styled(Title)`
  margin: 0;
  font-size: ${props => props.theme.fontSizes.lg};
`;

const GenerateButton = styled(Button)`
  width: 100%;
  margin-top: ${props => props.theme.spacing.xl};
  font-size: ${props => props.theme.fontSizes.lg};
  padding: ${props => props.theme.spacing.lg};
`;

const MagicWand = styled.div`
  font-size: 64px;
  margin: ${props => props.theme.spacing.lg} 0;
  animation: float 3s ease-in-out infinite;
  
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`;

const ChildFriendlyText = styled(Text)`
  font-family: ${props => props.theme.fonts.childFriendly};
  font-weight: ${props => props.theme.fontWeights.semibold};
  letter-spacing: 0.3px;
`;

const QuickGenerate: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate story generation
    setTimeout(() => {
      setIsGenerating(false);
      alert('Story generated! (This is a demo)');
    }, 3000);
  };

  return (
    <Container>
      <NavBar>
        <AppTitle>TaleWeaver</AppTitle>
        <StyledCircularMenu />
      </NavBar>
      
      <Card>
        <IconWrapper size="large">
          <MagicWand>🪄</MagicWand>
        </IconWrapper>
        
        <Title>Quick Generate</Title>
        
        <ChildFriendlyText style={{ textAlign: 'center', marginBottom: '32px' }}>
          Generate a magical story with one click
        </ChildFriendlyText>
        
        <GenerateButton 
          variant="accent"
          onClick={handleGenerate}
          disabled={isGenerating}
        >
          {isGenerating ? '✨ Generating Magic...' : '🎭 Generate Story'}
        </GenerateButton>
        
        {isGenerating && (
          <Text 
            size="sm" 
            style={{ textAlign: 'center', marginTop: '16px', opacity: 0.7 }}
          >
            Creating your personalized adventure...
          </Text>
        )}
      </Card>
    </Container>
  );
};

export default QuickGenerate;