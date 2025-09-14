import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Title, Card, Button, Text, IconWrapper } from '../styles/components';
import { ChildProfile } from '../types';
import { ProfileRepository } from '../repositories/profileRepository';

const BackButton = styled(Button)`
  margin-bottom: ${props => props.theme.spacing.lg};
  align-self: flex-start;
`;

const ChildCard = styled(Card)`
  position: relative;
  margin-bottom: ${props => props.theme.spacing.md};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const ChildInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const GenderIcon = styled.div`
  font-size: 32px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.borderRadius.medium};
  background: rgba(255, 255, 255, 0.1);
`;

const ChildDetails = styled.div`
  flex: 1;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.sm};
  position: absolute;
  top: ${props => props.theme.spacing.md};
  right: ${props => props.theme.spacing.md};
`;

const ActionButton = styled(Button)`
  padding: ${props => props.theme.spacing.sm};
  font-size: 14px;
  min-width: auto;
`;

const QuickSettings = styled.div`
  margin-top: ${props => props.theme.spacing.md};
  padding-top: ${props => props.theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const AddChildButton = styled(Button)`
  width: 100%;
  margin-bottom: ${props => props.theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  font-size: 18px;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled(Card)`
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
`;

const FormGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.md};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing.sm};
  font-weight: 600;
  color: ${props => props.theme.colors.text};
`;

const Input = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.medium};
  background: rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.colors.text};
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
    box-shadow: 0 0 0 3px rgba(255, 179, 102, 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.medium};
  background: rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.colors.text};
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 16px;
  resize: vertical;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
    box-shadow: 0 0 0 3px rgba(255, 179, 102, 0.2);
  }
`;

const GenderSelector = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
`;

const GenderOption = styled.div.withConfig({
  shouldForwardProp: (prop) => !['selected'].includes(prop),
})<{ selected: boolean }>`
  flex: 1;
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.medium};
  background: ${props => props.selected ? props.theme.gradients.accent : 'rgba(255, 255, 255, 0.1)'};
  border: 2px solid ${props => props.selected ? 'transparent' : 'rgba(255, 255, 255, 0.2)'};
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${props => props.theme.colors.accent};
  }
`;

const ModalActions = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.lg};
`;

const getGenderIcon = (gender: string) => {
  switch (gender) {
    case 'male': return '👦';
    case 'female': return '👧';
    case 'non-binary': return '🧒';
    default: return '👧';
  }
};

const ChildrenManager: React.FC = () => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState<ChildProfile[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingProfile, setEditingProfile] = useState<ChildProfile | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'female' as 'male' | 'female' | 'non-binary',
    customRestrictions: ''
  });

  useEffect(() => {
    loadProfiles();
  }, []);

  const loadProfiles = async () => {
    const data = await ProfileRepository.getAllProfiles();
    setProfiles(data);
  };

  const handleAddChild = () => {
    setEditingProfile(null);
    setFormData({
      name: '',
      age: '',
      gender: 'female',
      customRestrictions: ''
    });
    setShowModal(true);
  };

  const handleEditChild = (profile: ChildProfile) => {
    setEditingProfile(profile);
    setFormData({
      name: profile.name,
      age: profile.age.toString(),
      gender: profile.gender,
      customRestrictions: profile.customRestrictions || ''
    });
    setShowModal(true);
  };

  const handleDeleteChild = async (profileId: string) => {
    if (window.confirm('Are you sure you want to delete this child profile?')) {
      await ProfileRepository.deleteProfile(profileId);
      loadProfiles();
    }
  };

  const handleSaveChild = async () => {
    if (!formData.name.trim() || !formData.age) {
      alert('Please fill in all required fields');
      return;
    }

    const defaultProfile = {
      id: `profile-${Date.now()}`,
      name: '',
      age: 0,
      gender: 'female' as const,
      createdAt: new Date(),
      defaultSettings: {
        themes: [],
        characters: [],
        voicePreferences: {
          gender: formData.gender === 'male' ? 'male' as const : 'female' as const,
          accent: 'american',
          speed: 1.0,
          language: 'en'
        },
        storyLength: 'medium' as const,
        backgroundMusic: true,
        musicVolume: 0.5,
        educationalTopics: []
      },
      contentFilters: {
        allowedThemes: [],
        allowedAdventureTypes: [],
        allowedEducationalTopics: [],
        blockScaryContent: true,
        ageAppropriate: true
      }
    };

    const baseProfile = editingProfile || defaultProfile;

    const updatedProfile: ChildProfile = {
      ...baseProfile,
      name: formData.name.trim(),
      age: parseInt(formData.age),
      gender: formData.gender,
      customRestrictions: formData.customRestrictions.trim() || undefined
    };

    await ProfileRepository.saveProfile(updatedProfile);
    setShowModal(false);
    loadProfiles();
  };

  return (
    <Container>
      <BackButton variant="secondary" onClick={() => navigate('/')}>
        ← Back to Dashboard
      </BackButton>

      <Card>
        <IconWrapper size="large">
          <span style={{ fontSize: '48px' }}>👨‍👩‍👧‍👦</span>
        </IconWrapper>
        
        <Title>Children Manager</Title>
        
        <AddChildButton variant="accent" onClick={handleAddChild}>
          <span style={{ fontSize: '20px' }}>➕</span>
          Add New Child
        </AddChildButton>

        {profiles.map(profile => (
          <ChildCard key={profile.id}>
            <ActionButtons>
              <ActionButton variant="secondary" onClick={() => handleEditChild(profile)}>
                ✏️ Edit
              </ActionButton>
              <ActionButton variant="primary" onClick={() => handleDeleteChild(profile.id)}>
                🗑️ Delete
              </ActionButton>
            </ActionButtons>

            <ChildInfo>
              <GenderIcon>{getGenderIcon(profile.gender)}</GenderIcon>
              <ChildDetails>
                <Text size="lg" style={{ fontWeight: 600, marginBottom: '4px' }}>
                  {profile.name}
                </Text>
                <Text size="sm" color="rgba(255, 255, 255, 0.8)">
                  Age {profile.age} • {profile.gender === 'non-binary' ? 'Non-binary' : profile.gender.charAt(0).toUpperCase() + profile.gender.slice(1)}
                </Text>
              </ChildDetails>
            </ChildInfo>

            {profile.customRestrictions && (
              <div style={{ marginBottom: '16px' }}>
                <Text size="sm" style={{ fontWeight: 600, marginBottom: '8px' }}>
                  Custom Restrictions:
                </Text>
                <Text size="sm" color="rgba(255, 255, 255, 0.8)" style={{ fontStyle: 'italic' }}>
                  "{profile.customRestrictions}"
                </Text>
              </div>
            )}

            <QuickSettings>
              <Text size="sm" style={{ fontWeight: 600, marginBottom: '8px' }}>
                Quick Story Defaults:
              </Text>
              <Text size="sm" color="rgba(255, 255, 255, 0.8)">
                Length: {profile.defaultSettings.storyLength} • 
                Voice: {profile.defaultSettings.voicePreferences.gender} ({profile.defaultSettings.voicePreferences.accent}) • 
                Music: {profile.defaultSettings.backgroundMusic ? 'On' : 'Off'}
              </Text>
            </QuickSettings>
          </ChildCard>
        ))}

        {profiles.length === 0 && (
          <div style={{ textAlign: 'center', padding: '48px 24px' }}>
            <Text size="lg" color="rgba(255, 255, 255, 0.6)">
              No children profiles yet. Add your first child to get started!
            </Text>
          </div>
        )}
      </Card>

      {showModal && (
        <Modal onClick={(e) => e.target === e.currentTarget && setShowModal(false)}>
          <ModalContent>
            <Title>{editingProfile ? 'Edit Child' : 'Add New Child'}</Title>
            
            <FormGroup>
              <Label>Name *</Label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Enter child's name"
              />
            </FormGroup>

            <FormGroup>
              <Label>Age *</Label>
              <Input
                type="number"
                min="1"
                max="18"
                value={formData.age}
                onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                placeholder="Enter age"
              />
            </FormGroup>

            <FormGroup>
              <Label>Gender</Label>
              <GenderSelector>
                <GenderOption
                  selected={formData.gender === 'female'}
                  onClick={() => setFormData(prev => ({ ...prev, gender: 'female' }))}
                >
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>👧</div>
                  <Text size="sm">Female</Text>
                </GenderOption>
                <GenderOption
                  selected={formData.gender === 'male'}
                  onClick={() => setFormData(prev => ({ ...prev, gender: 'male' }))}
                >
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>👦</div>
                  <Text size="sm">Male</Text>
                </GenderOption>
                <GenderOption
                  selected={formData.gender === 'non-binary'}
                  onClick={() => setFormData(prev => ({ ...prev, gender: 'non-binary' }))}
                >
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>🧒</div>
                  <Text size="sm">Non-binary</Text>
                </GenderOption>
              </GenderSelector>
            </FormGroup>

            <FormGroup>
              <Label>Custom Restrictions</Label>
              <TextArea
                value={formData.customRestrictions}
                onChange={(e) => setFormData(prev => ({ ...prev, customRestrictions: e.target.value }))}
                placeholder="Enter any specific restrictions or preferences for this child (e.g., 'Avoid scary content', 'Loves animals', 'Sensitive to loud sounds')..."
              />
              <Text size="sm" color="rgba(255, 255, 255, 0.6)" style={{ marginTop: '8px' }}>
                These restrictions will be interpreted by our AI to customize stories appropriately.
              </Text>
            </FormGroup>

            <ModalActions>
              <Button variant="secondary" onClick={() => setShowModal(false)} style={{ flex: 1 }}>
                Cancel
              </Button>
              <Button variant="accent" onClick={handleSaveChild} style={{ flex: 1 }}>
                {editingProfile ? 'Save Changes' : 'Add Child'}
              </Button>
            </ModalActions>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default ChildrenManager;