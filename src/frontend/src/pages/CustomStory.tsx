import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Title, Card, Button, Text, IconWrapper, Grid } from '../styles/components';

const BackButton = styled(Button)`
  margin-bottom: ${props => props.theme.spacing.lg};
  align-self: flex-start;
`;

const StepCard = styled(Card)`
  margin-bottom: ${props => props.theme.spacing.md};
`;

const CharacterOption = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isSelected'].includes(prop),
})<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.medium};
  background: ${props => props.isSelected ? props.theme.gradients.accent : 'rgba(255, 255, 255, 0.1)'};
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${props => props.isSelected ? '#FFB366' : 'transparent'};
  position: relative;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    border-color: ${props => props.isSelected ? '#FFB366' : 'rgba(255, 255, 255, 0.3)'};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(255, 179, 102, 0.3);
  }
`;

const CharacterIcon = styled.div`
  font-size: 32px;
  margin-bottom: ${props => props.theme.spacing.sm};
  transition: transform 0.2s ease;
  
  .character-option:hover & {
    transform: scale(1.1);
  }
`;

const ChildFriendlyText = styled(Text)`
  font-family: ${props => props.theme.fonts.childFriendly};
  font-weight: ${props => props.theme.fontWeights.semibold};
  letter-spacing: 0.3px;
`;

const ThemeOption = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isSelected'].includes(prop),
})<{ isSelected: boolean }>`
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.medium};
  background: ${props => props.isSelected ? props.theme.gradients.pink : 'rgba(255, 255, 255, 0.1)'};
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${props => props.isSelected ? '#FF6B9D' : 'transparent'};
  text-align: center;
  position: relative;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    border-color: ${props => props.isSelected ? '#FF6B9D' : 'rgba(255, 255, 255, 0.3)'};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(255, 107, 157, 0.3);
  }
`;

const InputField = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.medium};
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-size: ${props => props.theme.fontSizes.md};
  margin-bottom: ${props => props.theme.spacing.md};
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    border-color: #FFB366;
    outline: none;
    box-shadow: 0 0 0 4px rgba(255, 179, 102, 0.2);
    background: rgba(255, 255, 255, 0.15);
  }
  
  &:valid {
    border-color: #4ECDC4;
  }
`;

const ProgressDots = styled.div`
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  margin: ${props => props.theme.spacing.lg} 0;
`;

const Dot = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isActive'].includes(prop),
})<{ isActive: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${props => props.isActive ? props.theme.colors.accent : 'rgba(255, 255, 255, 0.3)'};
  transition: all 0.3s ease;
  position: relative;
  
  ${props => props.isActive && `
    box-shadow: 0 0 0 4px rgba(255, 179, 102, 0.3);
  `}
`;

const StepTitle = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.accent};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.semibold};
`;

const CustomStory: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    childName: '',
    selectedCharacters: [] as string[],
    selectedThemes: [] as string[],
    storyLength: 'medium',
    educationalTopics: [] as string[],
    voiceGender: 'female',
    backgroundMusic: true
  });

  const characters = [
    { id: 'dragon', name: 'Dragon', icon: '🐉' },
    { id: 'unicorn', name: 'Unicorn', icon: '🦄' },
    { id: 'fairy', name: 'Fairy', icon: '🧚' },
    { id: 'knight', name: 'Knight', icon: '⚔️' },
    { id: 'wizard', name: 'Wizard', icon: '🧙' },
    { id: 'mermaid', name: 'Mermaid', icon: '🧜' },
    { id: 'robot', name: 'Robot', icon: '🤖' },
    { id: 'alien', name: 'Alien', icon: '👽' }
  ];

  const themes = [
    { id: 'magical-forest', name: 'Magical Forest' },
    { id: 'space-adventure', name: 'Space Adventure' },
    { id: 'underwater', name: 'Underwater World' },
    { id: 'castle', name: 'Medieval Castle' },
    { id: 'jungle', name: 'Jungle Safari' },
    { id: 'city', name: 'Modern City' }
  ];

  const educationalTopics = [
    { id: 'science', name: 'Science' },
    { id: 'math', name: 'Mathematics' },
    { id: 'nature', name: 'Nature' },
    { id: 'history', name: 'History' },
    { id: 'friendship', name: 'Friendship' },
    { id: 'kindness', name: 'Kindness' }
  ];

  const toggleCharacter = (characterId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedCharacters: prev.selectedCharacters.includes(characterId)
        ? prev.selectedCharacters.filter(id => id !== characterId)
        : [...prev.selectedCharacters, characterId]
    }));
  };

  const toggleTheme = (themeId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedThemes: prev.selectedThemes.includes(themeId)
        ? prev.selectedThemes.filter(id => id !== themeId)
        : [...prev.selectedThemes, themeId]
    }));
  };

  const toggleEducationalTopic = (topicId: string) => {
    setFormData(prev => ({
      ...prev,
      educationalTopics: prev.educationalTopics.includes(topicId)
        ? prev.educationalTopics.filter(id => id !== topicId)
        : [...prev.educationalTopics, topicId]
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleGenerate = () => {
    alert('Custom story generated! (This is a demo)');
    console.log('Story settings:', formData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepCard>
            <Title>Child's Name</Title>
            <Text style={{ textAlign: 'center', marginBottom: '24px' }}>
              What should we call the hero of this story?
            </Text>
            <InputField
              type="text"
              placeholder="Enter child's name"
              value={formData.childName}
              onChange={(e) => setFormData(prev => ({ ...prev, childName: e.target.value }))}
            />
          </StepCard>
        );
      
      case 2:
        return (
          <StepCard>
            <Title>Choose Characters</Title>
            <Text style={{ textAlign: 'center', marginBottom: '24px' }}>
              Select the magical friends for your adventure
            </Text>
            <Grid columns={4}>
              {characters.map(character => (
                <CharacterOption
                  key={character.id}
                  isSelected={formData.selectedCharacters.includes(character.id)}
                  onClick={() => toggleCharacter(character.id)}
                >
                  <CharacterIcon>{character.icon}</CharacterIcon>
                  <Text size="sm">{character.name}</Text>
                </CharacterOption>
              ))}
            </Grid>
          </StepCard>
        );
      
      case 3:
        return (
          <StepCard>
            <Title>Story Setting</Title>
            <Text style={{ textAlign: 'center', marginBottom: '24px' }}>
              Where should the adventure take place?
            </Text>
            <Grid columns={2}>
              {themes.map(theme => (
                <ThemeOption
                  key={theme.id}
                  isSelected={formData.selectedThemes.includes(theme.id)}
                  onClick={() => toggleTheme(theme.id)}
                >
                  <Text>{theme.name}</Text>
                </ThemeOption>
              ))}
            </Grid>
          </StepCard>
        );
      
      case 4:
        return (
          <StepCard>
            <Title>Learning Topics</Title>
            <Text style={{ textAlign: 'center', marginBottom: '24px' }}>
              What should we learn about? (Optional)
            </Text>
            <Grid columns={2}>
              {educationalTopics.map(topic => (
                <ThemeOption
                  key={topic.id}
                  isSelected={formData.educationalTopics.includes(topic.id)}
                  onClick={() => toggleEducationalTopic(topic.id)}
                >
                  <Text>{topic.name}</Text>
                </ThemeOption>
              ))}
            </Grid>
          </StepCard>
        );
      
      default:
        return null;
    }
  };

  return (
    <Container>
      <BackButton variant="secondary" onClick={() => navigate('/')}>
        ← Back
      </BackButton>
      
      <IconWrapper size="large">
        <span style={{ fontSize: '48px' }}>📚</span>
      </IconWrapper>
      
      <StepTitle>
        Step {currentStep} of 4: {
          currentStep === 1 ? "Child's Name" :
          currentStep === 2 ? "Choose Characters" :
          currentStep === 3 ? "Select Setting" :
          "Educational Topics"
        }
      </StepTitle>
      
      <ProgressDots>
        {[1, 2, 3, 4].map(step => (
          <Dot key={step} isActive={step <= currentStep} />
        ))}
      </ProgressDots>
      
      {renderStep()}
      
      <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
        {currentStep > 1 && (
          <Button variant="secondary" onClick={prevStep} style={{ flex: 1 }}>
            Previous
          </Button>
        )}
        
        {currentStep < 4 ? (
          <Button 
            variant="accent" 
            onClick={nextStep} 
            style={{ flex: 1 }}
            disabled={currentStep === 1 && !formData.childName.trim()}
          >
            Next
          </Button>
        ) : (
          <Button 
            variant="accent" 
            onClick={handleGenerate} 
            style={{ flex: 1 }}
          >
            🎭 Create Story
          </Button>
        )}
      </div>
    </Container>
  );
};

export default CustomStory;