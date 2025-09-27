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
          variant="privacy"
          onClick={() => navigate('/privacy')}
        />
        
        <FeatureCard
          title="Parental Controls"
          icon="🔒"
          variant="parental"
          onClick={() => navigate('/children-manager')}
        />
        
        <FeatureCard
          title="Quick Generate"
          icon="🪄"
          variant="generate"
          onClick={() => navigate('/quick-generate')}
        />
        
        <FeatureCard
          title="Create Custom Story"
          icon="📚"
          variant="custom"
          onClick={() => navigate('/custom-story')}
        />
      </StyledGrid>
    </Container>
  );
};

export default Dashboard;