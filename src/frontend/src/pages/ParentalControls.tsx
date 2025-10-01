import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Title, Card, Button, Text, IconWrapper } from '../styles/components';

const BackButton = styled(Button)`
  margin-bottom: ${props => props.theme.spacing.lg};
  align-self: flex-start;
`;

const ControlSection = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
  padding: ${props => props.theme.spacing.md};
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius.medium};
`;

const ControlRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.md};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ToggleSwitch = styled.div.withConfig({
  shouldForwardProp: (prop) => !['enabled'].includes(prop),
})<{ enabled: boolean }>`
  width: 50px;
  height: 28px;
  background: ${props => props.enabled ? props.theme.gradients.accent : 'rgba(255, 255, 255, 0.2)'};
  border-radius: 14px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    top: 3px;
    left: ${props => props.enabled ? '25px' : '3px'};
    width: 22px;
    height: 22px;
    background: white;
    border-radius: 50%;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const ManageButton = styled(Button)`
  width: 100%;
  margin-top: ${props => props.theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
`;

const ParentalControls: React.FC = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    contentFiltering: true,
    ageAppropriate: true,
    blockScaryContent: true,
    requireApproval: false,
    screenTimeLimit: false,
    educationalOnly: false,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <Container>
      <BackButton variant="secondary" onClick={() => navigate('/')}>
        ← Back to Dashboard
      </BackButton>
      
      <Card>
        <IconWrapper size="large">
          <span style={{ fontSize: '48px' }}>🔒</span>
        </IconWrapper>
        
        <Title>Parental Controls</Title>
        
        <Text style={{ marginBottom: '24px', textAlign: 'center' }}>
          Manage content filters and safety settings to create a safe storytelling environment for your children.
        </Text>

        <ControlSection>
          <Text size="lg" style={{ fontWeight: 600, marginBottom: '16px' }}>
            Content Safety
          </Text>
          
          <ControlRow>
            <div>
              <Text style={{ fontWeight: 600 }}>Content Filtering</Text>
              <Text size="sm" color="rgba(255, 255, 255, 0.7)">
                Filter age-inappropriate content
              </Text>
            </div>
            <ToggleSwitch 
              enabled={settings.contentFiltering} 
              onClick={() => toggleSetting('contentFiltering')}
            />
          </ControlRow>

          <ControlRow>
            <div>
              <Text style={{ fontWeight: 600 }}>Age-Appropriate Stories</Text>
              <Text size="sm" color="rgba(255, 255, 255, 0.7)">
                Only show age-appropriate content
              </Text>
            </div>
            <ToggleSwitch 
              enabled={settings.ageAppropriate} 
              onClick={() => toggleSetting('ageAppropriate')}
            />
          </ControlRow>

          <ControlRow>
            <div>
              <Text style={{ fontWeight: 600 }}>Block Scary Content</Text>
              <Text size="sm" color="rgba(255, 255, 255, 0.7)">
                Avoid frightening themes and imagery
              </Text>
            </div>
            <ToggleSwitch 
              enabled={settings.blockScaryContent} 
              onClick={() => toggleSetting('blockScaryContent')}
            />
          </ControlRow>
        </ControlSection>

        <ControlSection>
          <Text size="lg" style={{ fontWeight: 600, marginBottom: '16px' }}>
            Story Generation
          </Text>
          
          <ControlRow>
            <div>
              <Text style={{ fontWeight: 600 }}>Require Parent Approval</Text>
              <Text size="sm" color="rgba(255, 255, 255, 0.7)">
                Review stories before children can listen
              </Text>
            </div>
            <ToggleSwitch 
              enabled={settings.requireApproval} 
              onClick={() => toggleSetting('requireApproval')}
            />
          </ControlRow>

          <ControlRow>
            <div>
              <Text style={{ fontWeight: 600 }}>Educational Content Only</Text>
              <Text size="sm" color="rgba(255, 255, 255, 0.7)">
                Prioritize learning topics in stories
              </Text>
            </div>
            <ToggleSwitch 
              enabled={settings.educationalOnly} 
              onClick={() => toggleSetting('educationalOnly')}
            />
          </ControlRow>
        </ControlSection>

        <ControlSection>
          <Text size="lg" style={{ fontWeight: 600, marginBottom: '16px' }}>
            Usage Controls
          </Text>
          
          <ControlRow>
            <div>
              <Text style={{ fontWeight: 600 }}>Screen Time Limit</Text>
              <Text size="sm" color="rgba(255, 255, 255, 0.7)">
                Set daily listening limits
              </Text>
            </div>
            <ToggleSwitch 
              enabled={settings.screenTimeLimit} 
              onClick={() => toggleSetting('screenTimeLimit')}
            />
          </ControlRow>
        </ControlSection>

        <ManageButton variant="primary" onClick={() => navigate('/children-manager')}>
          👨‍👩‍👧‍👦 Manage Children Profiles
        </ManageButton>
      </Card>
    </Container>
  );
};

export default ParentalControls;
