import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Container, Title, Card, Button, Text, IconWrapper } from '../styles/components';
import { ProfileRepository } from '../repositories/profileRepository';
import { ChildProfile } from '../types';

const BackButton = styled(Button)`
  margin-bottom: ${props => props.theme.spacing.lg};
  align-self: flex-start;
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

const ProfileInfo = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.lg};
  text-align: center;
`;

const ProfileName = styled(Text)`
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const SettingsPreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.xs};
  justify-content: center;
  margin-top: ${props => props.theme.spacing.sm};
`;

const SettingBadge = styled.span`
  background: rgba(255, 179, 102, 0.2);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.accent};
`;

const QuickGenerate: React.FC = () => {
  const navigate = useNavigate();
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeProfile, setActiveProfile] = useState<ChildProfile | null>(null);
  const activeProfileId = useSelector((state: any) => state.profiles?.activeProfileId);

  const loadActiveProfile = useCallback(async () => {
    if (activeProfileId) {
      const profile = await ProfileRepository.getProfileById(activeProfileId);
      setActiveProfile(profile || null);
    } else {
      // Load first profile if no active profile
      const profiles = await ProfileRepository.getAllProfiles();
      if (profiles.length > 0) {
        setActiveProfile(profiles[0]);
      }
    }
  }, [activeProfileId]);

  useEffect(() => {
    loadActiveProfile();
  }, [loadActiveProfile]);

  const handleGenerate = () => {
    if (!activeProfile) {
      alert('Please create a child profile first in Parental Controls');
      return;
    }
    
    setIsGenerating(true);
    // Simulate story generation using profile defaults
    setTimeout(() => {
      setIsGenerating(false);
      alert(`Story generated for ${activeProfile.name}! (This is a demo)\nUsing: ${activeProfile.defaultSettings.themes.join(', ')}`);
    }, 3000);
  };

  return (
    <Container>
      <BackButton variant="secondary" onClick={() => navigate('/')}>
        ← Back to Dashboard
      </BackButton>
      
      <Card>
        <IconWrapper size="large">
          <MagicWand>🪄</MagicWand>
        </IconWrapper>
        
        <Title>Quick Generate</Title>
        
        {activeProfile ? (
          <>
            <ProfileInfo>
              <ProfileName>{activeProfile.name}'s Story ✨</ProfileName>
              <ChildFriendlyText size="sm" style={{ opacity: 0.8 }}>
                Using {activeProfile.name}'s favorite settings
              </ChildFriendlyText>
              <SettingsPreview>
                {activeProfile.defaultSettings.themes.slice(0, 2).map((theme, idx) => (
                  <SettingBadge key={idx}>{theme}</SettingBadge>
                ))}
                {activeProfile.defaultSettings.characters.slice(0, 2).map((char, idx) => (
                  <SettingBadge key={idx}>{char}</SettingBadge>
                ))}
                <SettingBadge>{activeProfile.defaultSettings.storyLength}</SettingBadge>
              </SettingsPreview>
            </ProfileInfo>
            
            <ChildFriendlyText style={{ textAlign: 'center', marginBottom: '24px' }}>
              Generate a magical story with one click using {activeProfile.name}'s favorites!
            </ChildFriendlyText>
          </>
        ) : (
          <ChildFriendlyText style={{ textAlign: 'center', marginBottom: '24px' }}>
            Create a child profile first to use Quick Generate
          </ChildFriendlyText>
        )}
        
        <GenerateButton 
          variant="accent"
          onClick={handleGenerate}
          disabled={isGenerating || !activeProfile}
        >
          {isGenerating ? '✨ Generating Magic...' : '🎭 Generate Story'}
        </GenerateButton>
        
        {!activeProfile && (
          <Button 
            variant="secondary" 
            style={{ marginTop: '16px', width: '100%' }}
            onClick={() => navigate('/children-manager')}
          >
            Create Child Profile
          </Button>
        )}
        
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