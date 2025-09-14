import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Title, Card, Button, Text, IconWrapper, Grid } from '../styles/components';

const BackButton = styled(Button)`
  margin-bottom: ${props => props.theme.spacing.lg};
  align-self: flex-start;
`;

const ControlCard = styled(Card)`
  margin-bottom: ${props => props.theme.spacing.md};
`;

const Toggle = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isOn'].includes(prop),
})<{ isOn: boolean }>`
  width: 60px;
  height: 32px;
  border-radius: 16px;
  background: ${props => props.isOn ? props.theme.gradients.accent : 'rgba(255, 255, 255, 0.2)'};
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    top: 4px;
    left: ${props => props.isOn ? '32px' : '4px'};
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: white;
    transition: all 0.3s ease;
  }
`;

const ControlRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.md};
`;

const ProfileCard = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isActive'].includes(prop),
})<{ isActive: boolean }>`
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.medium};
  background: ${props => props.isActive ? props.theme.gradients.accent : 'rgba(255, 255, 255, 0.1)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const ParentalControls: React.FC = () => {
  const navigate = useNavigate();
  const [isLocked, setIsLocked] = useState(true);
  const [selectedProfile, setSelectedProfile] = useState('emma');
  const [settings, setSettings] = useState({
    blockScaryContent: true,
    ageAppropriate: true,
    educationalOnly: false,
    parentalApproval: true
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const profiles = [
    { id: 'emma', name: 'Emma', age: 5 },
    { id: 'alex', name: 'Alex', age: 8 }
  ];

  return (
    <Container>
      <BackButton variant="secondary" onClick={() => navigate('/')}>
        ← Back
      </BackButton>
      
      <Card>
        <IconWrapper size="large">
          <span style={{ fontSize: '48px' }}>🔒</span>
        </IconWrapper>
        
        <Title>Parental Controls</Title>
        
        {isLocked ? (
          <div style={{ textAlign: 'center' }}>
            <Text style={{ marginBottom: '24px' }}>
              Enter your parental PIN to access controls
            </Text>
            <Button 
              variant="accent" 
              onClick={() => setIsLocked(false)}
              style={{ marginBottom: '16px' }}
            >
              Enter PIN
            </Button>
            <Text size="sm" color="rgba(255, 255, 255, 0.7)">
              Demo: Click to unlock
            </Text>
          </div>
        ) : (
          <>
            <ControlCard>
              <Text size="lg" style={{ fontWeight: 600, marginBottom: '16px' }}>
                Child Profiles
              </Text>
              <Grid columns={2}>
                {profiles.map(profile => (
                  <ProfileCard
                    key={profile.id}
                    isActive={selectedProfile === profile.id}
                    onClick={() => setSelectedProfile(profile.id)}
                  >
                    <Text style={{ fontWeight: 600 }}>{profile.name}</Text>
                    <Text size="sm">Age {profile.age}</Text>
                  </ProfileCard>
                ))}
              </Grid>
              <Button 
                variant="accent" 
                onClick={() => navigate('/children-manager')}
                style={{ width: '100%', marginTop: '16px' }}
              >
                👨‍👩‍👧‍👦 Manage Children
              </Button>
            </ControlCard>
            
            <ControlCard>
              <Text size="lg" style={{ fontWeight: 600, marginBottom: '16px' }}>
                Content Filters
              </Text>
              
              <ControlRow>
                <Text>Block Scary Content</Text>
                <Toggle 
                  isOn={settings.blockScaryContent}
                  onClick={() => toggleSetting('blockScaryContent')}
                />
              </ControlRow>
              
              <ControlRow>
                <Text>Age Appropriate Only</Text>
                <Toggle 
                  isOn={settings.ageAppropriate}
                  onClick={() => toggleSetting('ageAppropriate')}
                />
              </ControlRow>
              
              <ControlRow>
                <Text>Educational Content Only</Text>
                <Toggle 
                  isOn={settings.educationalOnly}
                  onClick={() => toggleSetting('educationalOnly')}
                />
              </ControlRow>
              
              <ControlRow>
                <Text>Require Parental Approval</Text>
                <Toggle 
                  isOn={settings.parentalApproval}
                  onClick={() => toggleSetting('parentalApproval')}
                />
              </ControlRow>
            </ControlCard>
            
            <Button 
              variant="primary" 
              onClick={() => setIsLocked(true)}
              style={{ width: '100%' }}
            >
              Save & Lock Controls
            </Button>
          </>
        )}
      </Card>
    </Container>
  );
};

export default ParentalControls;