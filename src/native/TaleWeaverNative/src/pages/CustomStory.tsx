import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput, Alert } from 'react-native';
import { globalStyles } from '../styles/components';
import { theme } from '../styles/theme';

interface CustomStoryProps {
  navigation: any;
}

const CustomStory: React.FC<CustomStoryProps> = ({ navigation }) => {
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
    { id: 'wizard', name: 'Wizard', icon: '🧙' },
    { id: 'knight', name: 'Knight', icon: '⚔️' },
    { id: 'mermaid', name: 'Mermaid', icon: '🧜' },
  ];

  const themes = [
    { id: 'adventure', name: 'Adventure', icon: '🗺️' },
    { id: 'magical', name: 'Magical', icon: '🔮' },
    { id: 'nature', name: 'Nature', icon: '🌳' },
    { id: 'space', name: 'Space', icon: '🚀' },
    { id: 'underwater', name: 'Underwater', icon: '🌊' },
    { id: 'castle', name: 'Castle', icon: '🏰' },
  ];

  const educationalTopics = [
    { id: 'math', name: 'Math', icon: '🔢' },
    { id: 'science', name: 'Science', icon: '🔬' },
    { id: 'history', name: 'History', icon: '📚' },
    { id: 'geography', name: 'Geography', icon: '🌍' },
  ];

  const toggleSelection = (array: string[], item: string) => {
    return array.includes(item)
      ? array.filter(i => i !== item)
      : [...array, item];
  };

  const toggleCharacter = (characterId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedCharacters: toggleSelection(prev.selectedCharacters, characterId)
    }));
  };

  const toggleTheme = (themeId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedThemes: toggleSelection(prev.selectedThemes, themeId)
    }));
  };

  const toggleEducationalTopic = (topicId: string) => {
    setFormData(prev => ({
      ...prev,
      educationalTopics: toggleSelection(prev.educationalTopics, topicId)
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleGenerate = () => {
    Alert.alert('Custom Story Generated!', `A personalized story for ${formData.childName || 'your child'} is ready! (This is a demo)`, [
      { text: 'OK', onPress: () => navigation.goBack() }
    ]);
  };

  const renderSelectionGrid = (items: any[], selectedItems: string[], onToggle: (id: string) => void) => (
    <View style={styles.selectionGrid}>
      {items.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={[
            globalStyles.selectableItem,
            selectedItems.includes(item.id) && globalStyles.selectableItemSelected,
          ]}
          onPress={() => onToggle(item.id)}
        >
          <Text style={{ fontSize: 24, marginBottom: theme.spacing.xs }}>{item.icon}</Text>
          <Text style={globalStyles.selectableItemText}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <View style={globalStyles.stepCard}>
            <Text style={globalStyles.title}>Child's Name</Text>
            <Text style={[globalStyles.text, styles.stepDescription]}>
              What should we call the hero of this story?
            </Text>
            <TextInput
              style={globalStyles.inputField}
              placeholder="Enter child's name"
              placeholderTextColor={theme.colors.textSecondary}
              value={formData.childName}
              onChangeText={(text) => setFormData(prev => ({ ...prev, childName: text }))}
            />
          </View>
        );

      case 2:
        return (
          <View style={globalStyles.stepCard}>
            <Text style={globalStyles.title}>Choose Characters</Text>
            <Text style={[globalStyles.text, styles.stepDescription]}>
              Pick characters for your story (you can select multiple)
            </Text>
            {renderSelectionGrid(characters, formData.selectedCharacters, toggleCharacter)}
          </View>
        );

      case 3:
        return (
          <View style={globalStyles.stepCard}>
            <Text style={globalStyles.title}>Select Setting</Text>
            <Text style={[globalStyles.text, styles.stepDescription]}>
              Where should this adventure take place?
            </Text>
            {renderSelectionGrid(themes, formData.selectedThemes, toggleTheme)}
          </View>
        );

      case 4:
        return (
          <View style={globalStyles.stepCard}>
            <Text style={globalStyles.title}>Educational Topics</Text>
            <Text style={[globalStyles.text, styles.stepDescription]}>
              Choose topics to weave into the story (optional)
            </Text>
            {renderSelectionGrid(educationalTopics, formData.educationalTopics, toggleEducationalTopic)}
          </View>
        );

      default:
        return null;
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return "Child's Name";
      case 2: return "Choose Characters";
      case 3: return "Select Setting";
      case 4: return "Educational Topics";
      default: return "";
    }
  };

  return (
    <ScrollView style={globalStyles.container} contentContainerStyle={styles.scrollContent}>
      <TouchableOpacity 
        style={globalStyles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <Text style={globalStyles.backButtonText}>← Back</Text>
      </TouchableOpacity>
      
      <View style={globalStyles.iconWrapperLarge}>
        <Text style={{ fontSize: 48 }}>📚</Text>
      </View>
      
      <Text style={[globalStyles.subtitle, styles.stepTitle]}>
        Step {currentStep} of 4: {getStepTitle()}
      </Text>
      
      <View style={globalStyles.progressDots}>
        {[1, 2, 3, 4].map(step => (
          <View 
            key={step} 
            style={[
              globalStyles.dot, 
              step <= currentStep && globalStyles.dotActive
            ]} 
          />
        ))}
      </View>
      
      {renderStep()}
      
      <View style={styles.buttonContainer}>
        {currentStep > 1 && (
          <TouchableOpacity 
            style={[globalStyles.buttonSecondary, styles.navigationButton]} 
            onPress={prevStep}
          >
            <Text style={globalStyles.buttonText}>Previous</Text>
          </TouchableOpacity>
        )}
        
        {currentStep < 4 ? (
          <TouchableOpacity 
            style={[globalStyles.button, styles.navigationButton]} 
            onPress={nextStep}
          >
            <Text style={globalStyles.buttonText}>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity 
            style={[globalStyles.button, styles.navigationButton]} 
            onPress={handleGenerate}
          >
            <Text style={globalStyles.buttonText}>Generate Story</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: theme.spacing.xl,
  },
  
  stepTitle: {
    color: theme.colors.accent,
    fontSize: theme.fontSizes.sm,
    fontWeight: theme.fontWeights.semibold,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  
  stepDescription: {
    textAlign: 'center',
    marginBottom: theme.spacing.lg,
    opacity: 0.8,
  },
  
  selectionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.lg,
    gap: theme.spacing.md,
  },
  
  navigationButton: {
    flex: 1,
  },
});

export default CustomStory;