import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import { globalStyles } from '../styles/components';
import { theme } from '../styles/theme';
import { MagicWandIcon } from '../components/Icons';

interface QuickGenerateProps {
  navigation: any;
}

const QuickGenerate: React.FC<QuickGenerateProps> = ({ navigation }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);

  const themes = [
    { id: 'adventure', name: 'Adventure', icon: '🗺️' },
    { id: 'magical', name: 'Magical', icon: '🔮' },
    { id: 'nature', name: 'Nature', icon: '🌳' },
    { id: 'space', name: 'Space', icon: '🚀' },
  ];

  const characters = [
    { id: 'dragon', name: 'Dragon', icon: '🐉' },
    { id: 'unicorn', name: 'Unicorn', icon: '🦄' },
    { id: 'fairy', name: 'Fairy', icon: '🧚' },
    { id: 'wizard', name: 'Wizard', icon: '🧙' },
  ];

  const handleGenerate = () => {
    if (!selectedTheme || !selectedCharacter) {
      Alert.alert('Missing Selection', 'Please select both a theme and character first!');
      return;
    }

    setIsGenerating(true);
    // Simulate story generation
    setTimeout(() => {
      setIsGenerating(false);
      Alert.alert('Story Generated!', 'Your magical story is ready! (This is a demo)');
    }, 3000);
  };

  const renderSelectionGrid = (items: any[], selectedItem: string | null, onSelect: (id: string) => void) => (
    <View style={styles.selectionGrid}>
      {items.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={[
            globalStyles.selectableItem,
            selectedItem === item.id && globalStyles.selectableItemSelected,
          ]}
          onPress={() => onSelect(item.id)}
        >
          <Text style={{ fontSize: 32, marginBottom: theme.spacing.xs }}>{item.icon}</Text>
          <Text style={globalStyles.selectableItemText}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <ScrollView style={globalStyles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={[globalStyles.text, { fontSize: theme.fontSizes.lg }]}>← Back</Text>
        </TouchableOpacity>
        <Text style={[globalStyles.title, styles.appTitle]}>TaleWeaver</Text>
        <View style={{ width: 50 }} />
      </View>
      
      <View style={globalStyles.card}>
        <View style={styles.magicWandContainer}>
          <MagicWandIcon size={64} color={theme.colors.star} />
        </View>
        
        <Text style={globalStyles.subtitle}>Quick Story Generator</Text>
        <Text style={[globalStyles.textSecondary, styles.description]}>
          Select a theme and character for instant story magic!
        </Text>
        
        {/* Theme Selection */}
        <View style={styles.sectionContainer}>
          <Text style={[globalStyles.text, styles.sectionTitle]}>Choose a Theme:</Text>
          {renderSelectionGrid(themes, selectedTheme, setSelectedTheme)}
        </View>
        
        {/* Character Selection */}
        <View style={styles.sectionContainer}>
          <Text style={[globalStyles.text, styles.sectionTitle]}>Choose a Character:</Text>
          {renderSelectionGrid(characters, selectedCharacter, setSelectedCharacter)}
        </View>
        
        <TouchableOpacity
          style={[
            globalStyles.button,
            styles.generateButton,
            (!selectedTheme || !selectedCharacter || isGenerating) && styles.buttonDisabled,
          ]}
          onPress={handleGenerate}
          disabled={!selectedTheme || !selectedCharacter || isGenerating}
        >
          <Text style={globalStyles.buttonText}>
            {isGenerating ? 'Creating Magic... ✨' : '🪄 Generate Story'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: theme.spacing.xl,
  },
  
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
    width: '100%',
  },
  
  appTitle: {
    margin: 0,
    fontSize: theme.fontSizes.lg,
  },
  
  magicWandContainer: {
    alignItems: 'center',
    marginVertical: theme.spacing.lg,
  },
  
  description: {
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
  },
  
  sectionContainer: {
    marginBottom: theme.spacing.xl,
  },
  
  sectionTitle: {
    fontSize: theme.fontSizes.lg,
    fontWeight: theme.fontWeights.bold,
    marginBottom: theme.spacing.md,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  
  selectionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  
  generateButton: {
    width: '100%',
    marginTop: theme.spacing.xl,
    paddingVertical: theme.spacing.lg,
  },
  
  buttonDisabled: {
    backgroundColor: theme.colors.textSecondary,
    opacity: 0.6,
  },
});

export default QuickGenerate;