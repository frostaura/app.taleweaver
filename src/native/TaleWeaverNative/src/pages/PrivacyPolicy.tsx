import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/components';
import { theme } from '../styles/theme';

interface PrivacyPolicyProps {
  navigation: any;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ navigation }) => {
  return (
    <ScrollView style={globalStyles.container} contentContainerStyle={styles.scrollContent}>
      <TouchableOpacity 
        style={globalStyles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <Text style={globalStyles.backButtonText}>← Back</Text>
      </TouchableOpacity>
      
      <View style={globalStyles.card}>
        <View style={globalStyles.iconWrapperLarge}>
          <Text style={{ fontSize: 48 }}>🛡️</Text>
        </View>
        
        <Text style={globalStyles.title}>Privacy Policy</Text>
        
        <View style={styles.policyContent}>
          <View style={styles.policySection}>
            <Text style={[globalStyles.text, styles.sectionTitle]}>
              Local Storage Only
            </Text>
            <Text style={globalStyles.text}>
              All your child's data stays on this device. We never sync data across devices 
              or send it to our servers. This ensures maximum privacy and compliance with 
              app store policies.
            </Text>
          </View>
          
          <View style={styles.policySection}>
            <Text style={[globalStyles.text, styles.sectionTitle]}>
              What We Store
            </Text>
            <Text style={globalStyles.text}>
              • Child profiles (name, age, preferences){'\n'}
              • Generated stories and favorites{'\n'}
              • Parental control settings{'\n'}
              • App preferences and settings
            </Text>
          </View>
          
          <View style={styles.policySection}>
            <Text style={[globalStyles.text, styles.sectionTitle]}>
              What We Don't Collect
            </Text>
            <Text style={globalStyles.text}>
              • No personal information sent to servers{'\n'}
              • No tracking or analytics{'\n'}
              • No third-party data sharing{'\n'}
              • No location data
            </Text>
          </View>
          
          <View style={styles.policySection}>
            <Text style={[globalStyles.text, styles.sectionTitle]}>
              Data Security
            </Text>
            <Text style={globalStyles.text}>
              Your data is encrypted and stored securely on your device. 
              Only you have access to your family's stories and profiles.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: theme.spacing.xl,
  },
  
  policyContent: {
    marginBottom: theme.spacing.xl,
  },
  
  policySection: {
    marginBottom: theme.spacing.lg,
    padding: theme.spacing.md,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: theme.borderRadius.medium,
  },
  
  sectionTitle: {
    fontSize: theme.fontSizes.lg,
    fontWeight: theme.fontWeights.semibold,
    marginBottom: theme.spacing.sm,
  },
});

export default PrivacyPolicy;