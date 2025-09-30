import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { globalStyles } from '../styles/components';
import { theme } from '../styles/theme';
import FeatureCard from '../components/FeatureCard';

interface DashboardProps {
  navigation: any;
}

const Dashboard: React.FC<DashboardProps> = ({ navigation }) => {
  return (
    <LinearGradient
      colors={theme.gradients.background}
      style={styles.container}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={globalStyles.title}>TaleWeaver</Text>
        
        {/* Primary Action - Quick Generate (Full Width) */}
        <View style={styles.primaryCard}>
          <FeatureCard
            title="Quick Generate"
            icon="🪄"
            variant="generate"
            onPress={() => navigation.navigate('QuickGenerate')}
          />
        </View>
        
        {/* Secondary Action - Custom Story (Full Width) */}
        <View style={styles.secondaryCard}>
          <FeatureCard
            title="Create Custom Story"
            icon="📚"
            variant="custom"
            onPress={() => navigation.navigate('CustomStory')}
          />
        </View>
        
        {/* Parent/Legal Cards (2 Column Grid) */}
        <View style={globalStyles.grid}>
          <View style={globalStyles.gridItem}>
            <FeatureCard
              title="Parental Controls"
              icon="🔒"
              variant="parental"
              onPress={() => navigation.navigate('ChildrenManager')}
            />
          </View>
          
          <View style={globalStyles.gridItem}>
            <FeatureCard
              title="Privacy Policy"
              icon="🛡️"
              variant="privacy"
              onPress={() => navigation.navigate('PrivacyPolicy')}
            />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.lg,
  },
  
  scrollContent: {
    flexGrow: 1,
  },
  
  primaryCard: {
    marginBottom: theme.spacing.md,
  },
  
  secondaryCard: {
    marginBottom: theme.spacing.md,
  },
});

export default Dashboard;