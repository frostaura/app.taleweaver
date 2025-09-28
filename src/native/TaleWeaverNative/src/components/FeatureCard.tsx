import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/components';
import { theme } from '../styles/theme';
import { 
  ShieldIcon, 
  LockIcon, 
  MagicWandIcon, 
  BookIcon,
  StarIcon,
  MoonIcon,
  DiamondIcon
} from './Icons';

interface FeatureCardProps {
  title: string;
  icon: string;
  variant: 'privacy' | 'parental' | 'generate' | 'custom';
  onPress: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  icon,
  variant,
  onPress
}) => {
  const renderIcon = () => {
    switch (variant) {
      case 'privacy':
        return <ShieldIcon size={48} color={theme.colors.blue} />;
      case 'parental':
        return <LockIcon size={48} color={theme.colors.accent} />;
      case 'generate':
        return <MagicWandIcon size={64} color={theme.colors.star} />;
      case 'custom':
        return <BookIcon size={48} color={theme.colors.blue} />;
      default:
        return <BookIcon size={48} color={theme.colors.blue} />;
    }
  };

  const renderDecorationIcon = () => {
    switch (variant) {
      case 'privacy':
        return <StarIcon size={12} color={theme.colors.star} />;
      case 'parental':
        return <MoonIcon size={16} color={theme.colors.moon} />;
      case 'generate':
        return <StarIcon size={12} color={theme.colors.star} />;
      case 'custom':
        return <DiamondIcon size={8} color={theme.colors.diamond} />;
      default:
        return null;
    }
  };

  const renderContentLines = () => {
    if (variant === 'privacy') {
      return (
        <View style={styles.contentLines}>
          <View style={[styles.contentLine, { width: '100%' }]} />
          <View style={[styles.contentLine, { width: '80%' }]} />
          <View style={[styles.contentLine, { width: '90%' }]} />
          <View style={[styles.contentLine, { width: '75%' }]} />
        </View>
      );
    }
    
    if (variant === 'generate') {
      return (
        <View style={styles.contentLines}>
          <View style={[styles.contentLine, { width: '90%' }]} />
          <View style={[styles.contentLine, { width: '100%' }]} />
          <View style={[styles.contentLine, { width: '65%' }]} />
        </View>
      );
    }
    
    if (variant === 'parental') {
      return (
        <View style={styles.contentLines}>
          <View style={[styles.contentLine, { width: '100%' }]} />
          <View style={[styles.contentLine, { width: '80%' }]} />
          <View style={styles.toggleSwitch}>
            <View style={styles.toggleKnob} />
          </View>
        </View>
      );
    }
    
    if (variant === 'custom') {
      return (
        <View style={styles.contentLines}>
          <View style={[styles.contentLine, { width: '85%' }]} />
          <View style={[styles.contentLine, { width: '95%' }]} />
          <View style={[styles.contentLine, { width: '70%' }]} />
        </View>
      );
    }
    
    return null;
  };

  return (
    <TouchableOpacity 
      style={[globalStyles.card, styles.card]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Decoration icon */}
      <View style={styles.decorationWrapper}>
        {renderDecorationIcon()}
      </View>
      
      {/* Main content */}
      <View style={styles.contentArea}>
        <View style={globalStyles.iconWrapper}>
          {renderIcon()}
        </View>
        
        <Text style={[globalStyles.subtitle, { fontSize: 18 }]}>{title}</Text>
        
        {renderContentLines()}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    minHeight: 220,
    position: 'relative',
  },
  
  decorationWrapper: {
    position: 'absolute',
    top: theme.spacing.md,
    right: theme.spacing.md,
    zIndex: 1,
  },
  
  contentArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.md,
  },
  
  contentLines: {
    width: '100%',
    marginTop: theme.spacing.md,
  },
  
  contentLine: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 3,
    marginBottom: theme.spacing.sm,
  },
  
  toggleSwitch: {
    width: '80%',
    height: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 12,
    alignSelf: 'center',
    marginTop: theme.spacing.sm,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 4,
  },
  
  toggleKnob: {
    width: 16,
    height: 16,
    backgroundColor: theme.colors.accent,
    borderRadius: 8,
  },
});

export default FeatureCard;