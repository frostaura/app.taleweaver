import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Title, Grid } from '../styles/components';
import FeatureCard from '../components/FeatureCard';

const StyledGrid = styled(Grid)`
  margin-top: ${props => props.theme.spacing.xl};
`;

const PrimaryCard = styled.div`
  margin-bottom: ${props => props.theme.spacing.md};
`;

const SecondaryCard = styled.div`
  margin-bottom: ${props => props.theme.spacing.md};
`;

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>TaleWeaver</Title>
      
      {/* Primary Action - Quick Generate */}
      <PrimaryCard>
        <FeatureCard
          title="Quick Generate"
          icon="🪄"
          variant="generate"
          onClick={() => navigate('/quick-generate')}
        />
      </PrimaryCard>
      
      {/* Secondary Action - Custom Story */}
      <SecondaryCard>
        <FeatureCard
          title="Create Custom Story"
          icon="📚"
          variant="custom"
          onClick={() => navigate('/custom-story')}
        />
      </SecondaryCard>
      
      {/* Parent/Legal Cards */}
      <StyledGrid columns={2}>
        <FeatureCard
          title="Parental Controls"
          icon="🔒"
          variant="parental"
          onClick={() => navigate('/parental-controls')}
        />
        
        <FeatureCard
          title="Privacy Policy"
          icon="🛡️"
          variant="privacy"
          onClick={() => navigate('/privacy')}
        />
      </StyledGrid>
    </Container>
  );
};

export default Dashboard;