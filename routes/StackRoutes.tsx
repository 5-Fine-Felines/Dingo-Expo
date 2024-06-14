import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenSplash from '@/screens/ScreenSplash';
import ScreenOnboarding from '@/screens/ScreenOnboarding';
import ScreenAuth from '@/screens/ScreenAuth';
import { SCREENS } from './ScreenConstants';
import BottomNavBar from '@/components/BottomNavigationBar';
import UserProfile from '@/screens/UserProfile';

// Define the type for the navigation stack
export type RootStackParamList = {
  [SCREENS.SPLASH]: undefined;
  [SCREENS.ONBOARDING]: undefined;
  [SCREENS.AUTH]: undefined;
  [SCREENS.REGISTER]: undefined;
  [SCREENS.USERHOME]: undefined;
  [SCREENS.USERPROFILE]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackRoutes = () => {
  return (
      <Stack.Navigator initialRouteName={SCREENS.SPLASH}>
        <Stack.Screen
          name={SCREENS.SPLASH}
          component={ScreenSplash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.ONBOARDING}
          component={ScreenOnboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.AUTH}
          component={ScreenAuth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.USERHOME}
          component={BottomNavBar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.USERPROFILE}
          component={UserProfile}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  );
};

export default StackRoutes;
