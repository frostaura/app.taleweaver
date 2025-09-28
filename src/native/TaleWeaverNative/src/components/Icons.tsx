import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';

interface IconProps {
  size?: number;
  color?: string;
}

// Shield icon for Privacy Policy
export const ShieldIcon: React.FC<IconProps> = ({ size = 32, color = theme.colors.blue }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <Text style={[styles.icon, { fontSize: size * 0.8, color }]}>🛡️</Text>
  </View>
);

// Lock icon for Parental Controls  
export const LockIcon: React.FC<IconProps> = ({ size = 32, color = theme.colors.accent }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <Text style={[styles.icon, { fontSize: size * 0.8, color }]}>🔒</Text>
  </View>
);

// Magic wand icon for Quick Generate
export const MagicWandIcon: React.FC<IconProps> = ({ size = 32, color = theme.colors.star }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <Text style={[styles.icon, { fontSize: size * 0.8, color }]}>🪄</Text>
  </View>
);

// Book icon for Create Custom Story
export const BookIcon: React.FC<IconProps> = ({ size = 32, color = theme.colors.blue }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <Text style={[styles.icon, { fontSize: size * 0.8, color }]}>📚</Text>
  </View>
);

// Rabbit icon for action button
export const RabbitIcon: React.FC<IconProps> = ({ size = 24, color = theme.colors.pink }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <Text style={[styles.icon, { fontSize: size * 0.8, color }]}>🐰</Text>
  </View>
);

// Heart icon for action button
export const HeartIcon: React.FC<IconProps> = ({ size = 24, color = theme.colors.heart }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <Text style={[styles.icon, { fontSize: size * 0.8, color }]}>❤️</Text>
  </View>
);

// Cat icon for character selection
export const CatIcon: React.FC<IconProps> = ({ size = 24, color = theme.colors.primary }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <Text style={[styles.icon, { fontSize: size * 0.8, color }]}>🐱</Text>
  </View>
);

// Flower icon for character selection
export const FlowerIcon: React.FC<IconProps> = ({ size = 24, color = theme.colors.pink }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <Text style={[styles.icon, { fontSize: size * 0.8, color }]}>🌸</Text>
  </View>
);

// Dinosaur icon for character selection
export const DinosaurIcon: React.FC<IconProps> = ({ size = 24, color = theme.colors.primary }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <Text style={[styles.icon, { fontSize: size * 0.8, color }]}>🦕</Text>
  </View>
);

// Moon decoration
export const MoonIcon: React.FC<IconProps> = ({ size = 16, color = theme.colors.moon }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <Text style={[styles.icon, { fontSize: size * 0.8, color }]}>🌙</Text>
  </View>
);

// Star decoration
export const StarIcon: React.FC<IconProps> = ({ size = 12, color = theme.colors.star }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <Text style={[styles.icon, { fontSize: size * 0.8, color }]}>⭐</Text>
  </View>
);

// Diamond decoration
export const DiamondIcon: React.FC<IconProps> = ({ size = 8, color = theme.colors.diamond }) => (
  <View style={[styles.iconContainer, { width: size, height: size }]}>
    <Text style={[styles.icon, { fontSize: size * 0.8, color }]}>💎</Text>
  </View>
);

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    textAlign: 'center',
  },
});