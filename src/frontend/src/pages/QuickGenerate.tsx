import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Title, Card, Button, Text, IconWrapper, Grid } from '../styles/components';

const BackButton = styled(Button)`
  margin-bottom: ${props => props.theme.spacing.lg};
  align-self: flex-start;
`;

const ProfileSelector = styled.select`
  width: 100%;
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.medium};
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-size: ${props => props.theme.fontSizes.md};
  margin-bottom: ${props => props.theme.spacing.lg};
  
  option {
    background: ${props => props.theme.colors.primary};
    color: white;
  }
`;

const QuickOption = styled.div<{ isSelected: boolean }>`
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.medium};
  background: ${props => props.isSelected ? props.theme.gradients.accent : 'rgba(255, 255, 255, 0.1)'};
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  border: 2px solid ${props => props.isSelected ? '#FFB366' : 'transparent'};
  
  &:hover {
    transform: translateY(-2px);
  }
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

const QuickGenerate: React.FC = () => {
  const navigate = useNavigate();
  const [selectedProfile, setSelectedProfile] = useState('emma');
  const [selectedLength, setSelectedLength] = useState('medium');
  const [selectedVoice, setSelectedVoice] = useState('female');
  const [isGenerating, setIsGenerating] = useState(false);

  const profiles = [
    { id: 'emma', name: 'Emma (Age 5)' },
    { id: 'alex', name: 'Alex (Age 8)' }
  ];

  const storyLengths = [
    { id: 'short', name: 'Short', description: '2-3 minutes' },
    { id: 'medium', name: 'Medium', description: '5-7 minutes' },
    { id: 'long', name: 'Long', description: '10-15 minutes' }
  ];

  const voiceOptions = [
    { id: 'female', name: 'Female Voice', description: 'Warm & gentle' },
    { id: 'male', name: 'Male Voice', description: 'Friendly & calm' },
    { id: 'child', name: 'Child Voice', description: 'Playful & fun' }
  ];

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
      <BackButton variant="secondary" onClick={() => navigate('/')}>
        ← Back
      </BackButton>
      
      <Card>
        <IconWrapper size="large">
          <MagicWand>🪄</MagicWand>
        </IconWrapper>
        
        <Title>Quick Generate</Title>
        
        <Text style={{ textAlign: 'center', marginBottom: '24px' }}>
          Generate a story using your child's saved preferences
        </Text>
        
        <div style={{ marginBottom: '24px' }}>
          <Text style={{ fontWeight: 600, marginBottom: '8px' }}>
            Select Child Profile:
          </Text>
          <ProfileSelector 
            value={selectedProfile}
            onChange={(e) => setSelectedProfile(e.target.value)}
          >
            {profiles.map(profile => (
              <option key={profile.id} value={profile.id}>
                {profile.name}
              </option>
            ))}
          </ProfileSelector>
        </div>
        
        <div style={{ marginBottom: '24px' }}>
          <Text style={{ fontWeight: 600, marginBottom: '12px' }}>
            Story Length:
          </Text>
          <Grid columns={3}>
            {storyLengths.map(length => (
              <QuickOption
                key={length.id}
                isSelected={selectedLength === length.id}
                onClick={() => setSelectedLength(length.id)}
              >
                <Text style={{ fontWeight: 600, marginBottom: '4px' }}>
                  {length.name}
                </Text>
                <Text size="sm">
                  {length.description}
                </Text>
              </QuickOption>
            ))}
          </Grid>
        </div>
        
        <div style={{ marginBottom: '24px' }}>
          <Text style={{ fontWeight: 600, marginBottom: '12px' }}>
            Voice Style:
          </Text>
          <Grid columns={1}>
            {voiceOptions.map(voice => (
              <QuickOption
                key={voice.id}
                isSelected={selectedVoice === voice.id}
                onClick={() => setSelectedVoice(voice.id)}
              >
                <Text style={{ fontWeight: 600, marginBottom: '4px' }}>
                  {voice.name}
                </Text>
                <Text size="sm">
                  {voice.description}
                </Text>
              </QuickOption>
            ))}
          </Grid>
        </div>
        
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