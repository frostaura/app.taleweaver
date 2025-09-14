import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Title, Grid } from '../styles/components';
import FeatureCard from '../components/FeatureCard';

const StyledGrid = styled(Grid)`
  margin-top: ${props => props.theme.spacing.xl};
`;

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>TaleWeaver</Title>
      
      <StyledGrid columns={2}>
        <FeatureCard
          title="Privacy Policy"
          icon="🛡️"
          gradient="primary"
          onClick={() => navigate('/privacy')}
        />
        
        <FeatureCard
          title="Parental Controls"
          icon="🔒"
          gradient="primary"
          onClick={() => navigate('/parental-controls')}
        />
        
        <FeatureCard
          title="Quick Generate"
          icon="🪄"
          gradient="accent"
          onClick={() => navigate('/quick-generate')}
          showActionButtons
        />
        
        <FeatureCard
          title="Create Custom Story"
          icon="📚"
          gradient="primary"
          onClick={() => navigate('/custom-story')}
          showCharacterGrid
        />
      </StyledGrid>
    </Container>
  );
};

export default Dashboard;