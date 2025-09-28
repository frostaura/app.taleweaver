import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { store } from './src/store';
import { theme } from './src/styles/theme';
import Dashboard from './src/pages/Dashboard';
import PrivacyPolicy from './src/pages/PrivacyPolicy';
import ChildrenManager from './src/pages/ChildrenManager';
import QuickGenerate from './src/pages/QuickGenerate';
import CustomStory from './src/pages/CustomStory';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar style="light" backgroundColor={theme.colors.primary} />
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              cardStyle: { backgroundColor: theme.colors.background },
            }}
          >
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
            <Stack.Screen name="ChildrenManager" component={ChildrenManager} />
            <Stack.Screen name="QuickGenerate" component={QuickGenerate} />
            <Stack.Screen name="CustomStory" component={CustomStory} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
