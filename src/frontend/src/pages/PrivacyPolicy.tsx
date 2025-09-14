import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Title, Card, Button, Text, IconWrapper } from '../styles/components';

const BackButton = styled(Button)`
  margin-bottom: ${props => props.theme.spacing.lg};
  align-self: flex-start;
`;

const PolicyContent = styled.div`
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const PolicySection = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
  padding: ${props => props.theme.spacing.md};
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius.medium};
`;

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <BackButton variant="secondary" onClick={() => navigate('/')}>
        ← Back
      </BackButton>
      
      <Card>
        <IconWrapper size="large">
          <span style={{ fontSize: '48px' }}>🛡️</span>
        </IconWrapper>
        
        <Title>Privacy Policy</Title>
        
        <PolicyContent>
          <PolicySection>
            <Text size="lg" style={{ fontWeight: 600, marginBottom: '8px' }}>
              Local Storage Only
            </Text>
            <Text>
              All your child's data stays on this device. We never sync data across devices 
              or send it to our servers. This ensures maximum privacy and compliance with 
              app store policies.
            </Text>
          </PolicySection>
          
          <PolicySection>
            <Text size="lg" style={{ fontWeight: 600, marginBottom: '8px' }}>
              What We Store
            </Text>
            <Text>
              • Child profiles (name, age, preferences)
              • Generated stories and favorites
              • Parental control settings
              • App preferences and settings
            </Text>
          </PolicySection>
          
          <PolicySection>
            <Text size="lg" style={{ fontWeight: 600, marginBottom: '8px' }}>
              What We Don't Collect
            </Text>
            <Text>
              • No personal information sent to servers
              • No tracking or analytics
              • No third-party data sharing
              • No location data
            </Text>
          </PolicySection>
          
          <PolicySection>
            <Text size="lg" style={{ fontWeight: 600, marginBottom: '8px' }}>
              Data Security
            </Text>
            <Text>
              Your data is encrypted and stored securely on your device. 
              Only you have access to your family's stories and profiles.
            </Text>
          </PolicySection>
        </PolicyContent>
      </Card>
    </Container>
  );
};

export default PrivacyPolicy;