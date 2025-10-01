import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { globalStyles } from '../styles/components';
import { theme } from '../styles/theme';
import { MagicWandIcon } from '../components/Icons';

interface QuickGenerateProps {
  navigation: any;
}

interface ChildProfile {
  id: string;
  name: string;
  age: number;
  defaultSettings: {
    themes: string[];
    characters: string[];
    storyLength: string;
  };
}

// Mock profile repository for native
const mockProfiles: ChildProfile[] = [
  {
    id: 'profile-1',
    name: 'Emma',
    age: 5,
    defaultSettings: {
      themes: ['magical-forest', 'castle-kingdom'],
      characters: ['unicorn-purple', 'fairy-blonde'],
      storyLength: 'medium',
    },
  },
];

const QuickGenerate: React.FC<QuickGenerateProps> = ({ navigation }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeProfile, setActiveProfile] = useState<ChildProfile | null>(null);
  
  useEffect(() => {
    // Load first profile or active profile
    // In a real app, this would check Redux state
    if (mockProfiles.length > 0) {
      setActiveProfile(mockProfiles[0]);
    }
  }, []);

  const handleGenerate = () => {
    if (!activeProfile) {
      Alert.alert('No Profile', 'Please create a child profile first in Parental Controls');
      return;
    }

    setIsGenerating(true);
    // Simulate story generation using profile defaults
    setTimeout(() => {
      setIsGenerating(false);
      Alert.alert(
        'Story Generated!',
        `Story created for ${activeProfile.name}! (This is a demo)\nUsing: ${activeProfile.defaultSettings.themes.join(', ')}`
      );
    }, 3000);
  };

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
        
        {activeProfile ? (
          <>
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>{activeProfile.name}'s Story ✨</Text>
              <Text style={[globalStyles.textSecondary, { textAlign: 'center', marginTop: theme.spacing.xs }]}>
                Using {activeProfile.name}'s favorite settings
              </Text>
              <View style={styles.settingsPreview}>
                {activeProfile.defaultSettings.themes.slice(0, 2).map((theme, idx) => (
                  <View key={idx} style={styles.settingBadge}>
                    <Text style={styles.badgeText}>{theme}</Text>
                  </View>
                ))}
                <View style={styles.settingBadge}>
                  <Text style={styles.badgeText}>{activeProfile.defaultSettings.storyLength}</Text>
                </View>
              </View>
            </View>
            
            <Text style={[globalStyles.textSecondary, styles.description]}>
              Generate a magical story with one click using {activeProfile.name}'s favorites!
            </Text>
          </>
        ) : (
          <Text style={[globalStyles.textSecondary, styles.description]}>
            Create a child profile first to use Quick Generate
          </Text>
        )}
        
        <TouchableOpacity
          style={[
            globalStyles.button,
            styles.generateButton,
            (!activeProfile || isGenerating) && styles.buttonDisabled,
          ]}
          onPress={handleGenerate}
          disabled={!activeProfile || isGenerating}
        >
          <Text style={globalStyles.buttonText}>
            {isGenerating ? 'Creating Magic... ✨' : '🪄 Generate Story'}
          </Text>
        </TouchableOpacity>
        
        {!activeProfile && (
          <TouchableOpacity
            style={[globalStyles.buttonSecondary, styles.createProfileButton]}
            onPress={() => navigation.navigate('ChildrenManager')}
          >
            <Text style={globalStyles.buttonText}>Create Child Profile</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
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
    marginBottom: theme.spacing.lg,
  },
  
  profileInfo: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  
  profileName: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.lg,
    fontWeight: theme.fontWeights.bold,
    textAlign: 'center',
  },
  
  settingsPreview: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: theme.spacing.xs,
    marginTop: theme.spacing.sm,
  },
  
  settingBadge: {
    backgroundColor: 'rgba(255, 179, 102, 0.2)',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  
  badgeText: {
    color: theme.colors.accent,
    fontSize: theme.fontSizes.sm,
  },
  
  generateButton: {
    width: '100%',
    marginTop: theme.spacing.lg,
    paddingVertical: theme.spacing.lg,
  },
  
  createProfileButton: {
    width: '100%',
    marginTop: theme.spacing.md,
    paddingVertical: theme.spacing.md,
  },
  
  buttonDisabled: {
    backgroundColor: theme.colors.textSecondary,
    opacity: 0.6,
  },
});

export default QuickGenerate;