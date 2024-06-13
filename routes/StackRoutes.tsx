import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenSplash from '@/screens/ScreenSplash';
import ScreenOnboarding from '@/screens/ScreenOnboarding';
import ScreenAuth from '@/screens/ScreenAuth';
import { SCREENS } from './ScreenConstants';
import ScreenHome from '@/screens/ScreenHome';
import ButtomNavBar from '@/components/BottomNavigationBar';




  export type RootStackParamList = {
    [SCREENS.SPLASH]: undefined;
    [SCREENS.ONBOARDING]: undefined;
    [SCREENS.LOGIN]: undefined;
    [SCREENS.REGISTER]: undefined;
    [SCREENS.USERHOME]: undefined;
  };


const Stack = createNativeStackNavigator();

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
                name={SCREENS.LOGIN}
                component={ScreenAuth}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={SCREENS.USERHOME}
                component={ButtomNavBar}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default StackRoutes;