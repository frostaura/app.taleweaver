import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/components';
import { theme } from '../styles/theme';

interface ParentalControlsProps {
  navigation: any;
}

interface ToggleSwitchProps {
  enabled: boolean;
  onToggle: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ enabled, onToggle }) => (
  <TouchableOpacity 
    style={[styles.toggleSwitch, enabled && styles.toggleSwitchEnabled]} 
    onPress={onToggle}
    activeOpacity={0.7}
  >
    <View style={[styles.toggleThumb, enabled && styles.toggleThumbEnabled]} />
  </TouchableOpacity>
);

const ParentalControls: React.FC<ParentalControlsProps> = ({ navigation }) => {
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
    <ScrollView style={globalStyles.container} contentContainerStyle={styles.scrollContent}>
      <TouchableOpacity 
        style={globalStyles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <Text style={globalStyles.backButtonText}>← Back to Dashboard</Text>
      </TouchableOpacity>
      
      <View style={globalStyles.card}>
        <View style={globalStyles.iconWrapperLarge}>
          <Text style={{ fontSize: 48 }}>🔒</Text>
        </View>
        
        <Text style={globalStyles.title}>Parental Controls</Text>
        
        <Text style={[globalStyles.text, styles.description]}>
          Manage content filters and safety settings to create a safe storytelling environment for your children.
        </Text>

        <View style={styles.controlSection}>
          <Text style={[globalStyles.text, styles.sectionTitle]}>
            Content Safety
          </Text>
          
          <View style={styles.controlRow}>
            <View style={styles.controlText}>
              <Text style={[globalStyles.text, styles.controlLabel]}>Content Filtering</Text>
              <Text style={[globalStyles.text, styles.controlDescription]}>
                Filter age-inappropriate content
              </Text>
            </View>
            <ToggleSwitch 
              enabled={settings.contentFiltering} 
              onToggle={() => toggleSetting('contentFiltering')}
            />
          </View>

          <View style={styles.controlRow}>
            <View style={styles.controlText}>
              <Text style={[globalStyles.text, styles.controlLabel]}>Age-Appropriate Stories</Text>
              <Text style={[globalStyles.text, styles.controlDescription]}>
                Only show age-appropriate content
              </Text>
            </View>
            <ToggleSwitch 
              enabled={settings.ageAppropriate} 
              onToggle={() => toggleSetting('ageAppropriate')}
            />
          </View>

          <View style={styles.controlRow}>
            <View style={styles.controlText}>
              <Text style={[globalStyles.text, styles.controlLabel]}>Block Scary Content</Text>
              <Text style={[globalStyles.text, styles.controlDescription]}>
                Avoid frightening themes and imagery
              </Text>
            </View>
            <ToggleSwitch 
              enabled={settings.blockScaryContent} 
              onToggle={() => toggleSetting('blockScaryContent')}
            />
          </View>
        </View>

        <View style={styles.controlSection}>
          <Text style={[globalStyles.text, styles.sectionTitle]}>
            Story Generation
          </Text>
          
          <View style={styles.controlRow}>
            <View style={styles.controlText}>
              <Text style={[globalStyles.text, styles.controlLabel]}>Require Parent Approval</Text>
              <Text style={[globalStyles.text, styles.controlDescription]}>
                Review stories before children can listen
              </Text>
            </View>
            <ToggleSwitch 
              enabled={settings.requireApproval} 
              onToggle={() => toggleSetting('requireApproval')}
            />
          </View>

          <View style={styles.controlRow}>
            <View style={styles.controlText}>
              <Text style={[globalStyles.text, styles.controlLabel]}>Educational Content Only</Text>
              <Text style={[globalStyles.text, styles.controlDescription]}>
                Prioritize learning topics in stories
              </Text>
            </View>
            <ToggleSwitch 
              enabled={settings.educationalOnly} 
              onToggle={() => toggleSetting('educationalOnly')}
            />
          </View>
        </View>

        <View style={styles.controlSection}>
          <Text style={[globalStyles.text, styles.sectionTitle]}>
            Usage Controls
          </Text>
          
          <View style={styles.controlRow}>
            <View style={styles.controlText}>
              <Text style={[globalStyles.text, styles.controlLabel]}>Screen Time Limit</Text>
              <Text style={[globalStyles.text, styles.controlDescription]}>
                Set daily listening limits
              </Text>
            </View>
            <ToggleSwitch 
              enabled={settings.screenTimeLimit} 
              onToggle={() => toggleSetting('screenTimeLimit')}
            />
          </View>
        </View>

        <TouchableOpacity 
          style={[globalStyles.button, styles.manageButton]} 
          onPress={() => navigation.navigate('ChildrenManager')}
        >
          <Text style={globalStyles.buttonText}>👨‍👩‍👧‍👦 Manage Children Profiles</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: theme.spacing.xl,
  },
  
  description: {
    textAlign: 'center',
    marginBottom: theme.spacing.lg,
    opacity: 0.9,
  },
  
  controlSection: {
    marginBottom: theme.spacing.lg,
    padding: theme.spacing.md,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: theme.borderRadius.medium,
  },
  
  sectionTitle: {
    fontSize: theme.fontSizes.lg,
    fontWeight: theme.fontWeights.semibold,
    marginBottom: theme.spacing.md,
  },
  
  controlRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  
  controlText: {
    flex: 1,
    marginRight: theme.spacing.md,
  },
  
  controlLabel: {
    fontWeight: theme.fontWeights.semibold,
    marginBottom: theme.spacing.xs,
  },
  
  controlDescription: {
    fontSize: theme.fontSizes.sm,
    opacity: 0.7,
  },
  
  toggleSwitch: {
    width: 50,
    height: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 14,
    justifyContent: 'center',
    padding: 3,
  },
  
  toggleSwitchEnabled: {
    backgroundColor: theme.colors.accent,
  },
  
  toggleThumb: {
    width: 22,
    height: 22,
    backgroundColor: 'white',
    borderRadius: 11,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  
  toggleThumbEnabled: {
    alignSelf: 'flex-end',
  },
  
  manageButton: {
    marginTop: theme.spacing.md,
    width: '100%',
  },
});

export default ParentalControls;
