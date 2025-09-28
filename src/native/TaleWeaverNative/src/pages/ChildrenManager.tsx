import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import { globalStyles } from '../styles/components';
import { theme } from '../styles/theme';

interface ChildrenManagerProps {
  navigation: any;
}

const ChildrenManager: React.FC<ChildrenManagerProps> = ({ navigation }) => {
  const [children, setChildren] = useState([
    {
      id: '1',
      name: 'Emma',
      age: 7,
      gender: 'female' as const,
    },
    {
      id: '2',
      name: 'Lucas',
      age: 5,
      gender: 'male' as const,
    },
  ]);

  const getGenderIcon = (gender: string) => {
    switch (gender) {
      case 'female':
        return '👧';
      case 'male':
        return '👦';
      default:
        return '🧑';
    }
  };

  const handleDeleteChild = (childId: string, childName: string) => {
    Alert.alert(
      'Delete Profile',
      `Are you sure you want to delete ${childName}'s profile?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          style: 'destructive',
          onPress: () => {
            setChildren(prev => prev.filter(child => child.id !== childId));
          }
        },
      ]
    );
  };

  const handleAddChild = () => {
    Alert.alert(
      'Add Child',
      'This feature is not implemented in this demo version.',
      [{ text: 'OK' }]
    );
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
        <Text style={{ fontSize: 48 }}>🔒</Text>
      </View>
      
      <Text style={globalStyles.title}>Parental Controls</Text>
      
      <Text style={[globalStyles.text, styles.description]}>
        Manage your children's profiles and story preferences
      </Text>
      
      {children.map((child) => (
        <View key={child.id} style={styles.childCard}>
          <View style={styles.childInfo}>
            <View style={styles.genderIcon}>
              <Text style={{ fontSize: 32 }}>{getGenderIcon(child.gender)}</Text>
            </View>
            
            <View style={styles.childDetails}>
              <Text style={[globalStyles.text, styles.childName]}>{child.name}</Text>
              <Text style={globalStyles.textSecondary}>Age: {child.age}</Text>
              <Text style={globalStyles.textSecondary}>Gender: {child.gender}</Text>
            </View>
          </View>
          
          <View style={styles.actionButtons}>
            <TouchableOpacity 
              style={globalStyles.buttonSecondary}
              onPress={() => Alert.alert('Edit Profile', `Edit ${child.name}'s profile (demo)`)}
            >
              <Text style={globalStyles.buttonText}>Edit</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[globalStyles.buttonSecondary, { backgroundColor: theme.colors.error }]}
              onPress={() => handleDeleteChild(child.id, child.name)}
            >
              <Text style={globalStyles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
      
      <TouchableOpacity 
        style={[globalStyles.button, styles.addButton]} 
        onPress={handleAddChild}
      >
        <Text style={globalStyles.buttonText}>+ Add Child</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: theme.spacing.xl,
  },
  
  description: {
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
    opacity: 0.8,
  },
  
  childCard: {
    ...globalStyles.card,
    position: 'relative',
  },
  
  childInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  
  genderIcon: {
    width: 48,
    height: 48,
    borderRadius: theme.borderRadius.medium,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.md,
  },
  
  childDetails: {
    flex: 1,
  },
  
  childName: {
    fontSize: theme.fontSizes.lg,
    fontWeight: theme.fontWeights.semibold,
    marginBottom: theme.spacing.xs,
  },
  
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.md,
  },
  
  addButton: {
    marginTop: theme.spacing.lg,
  },
});

export default ChildrenManager;