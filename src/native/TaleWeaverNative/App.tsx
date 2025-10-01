import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import * as SplashScreen from 'expo-splash-screen';

import { store } from './src/store';
import { theme } from './src/styles/theme';
import Dashboard from './src/pages/Dashboard';
import PrivacyPolicy from './src/pages/PrivacyPolicy';
import ParentalControls from './src/pages/ParentalControls';
import ChildrenManager from './src/pages/ChildrenManager';
import QuickGenerate from './src/pages/QuickGenerate';
import CustomStory from './src/pages/CustomStory';

const Stack = createStackNavigator();

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  React.useEffect(() => {
    // Hide splash screen after a short delay
    const hideSplashScreen = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      await SplashScreen.hideAsync();
    };
    
    hideSplashScreen();
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar 
            style="light" 
            backgroundColor={theme.colors.primary}
            translucent={false}
          />
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              cardStyle: { backgroundColor: theme.colors.background },
              cardStyleInterpolator: ({ current }) => ({
                cardStyle: {
                  opacity: current.progress,
                },
              }),
            }}
            initialRouteName="Dashboard"
          >
            <Stack.Screen 
              name="Dashboard" 
              component={Dashboard}
              options={{ title: 'TaleWeaver' }}
            />
            <Stack.Screen 
              name="PrivacyPolicy" 
              component={PrivacyPolicy}
              options={{ title: 'Privacy Policy' }}
            />
            <Stack.Screen 
              name="ParentalControls" 
              component={ParentalControls}
              options={{ title: 'Parental Controls' }}
            />
            <Stack.Screen 
              name="ChildrenManager" 
              component={ChildrenManager}
              options={{ title: 'Children Manager' }}
            />
            <Stack.Screen 
              name="QuickGenerate" 
              component={QuickGenerate}
              options={{ title: 'Quick Generate' }}
            />
            <Stack.Screen 
              name="CustomStory" 
              component={CustomStory}
              options={{ title: 'Custom Story' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
