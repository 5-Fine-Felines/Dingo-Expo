import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthLogin from '@/screens/AuthLogin';
import ScreenSplash from '@/screens/ScreenSplash';


const SCREENS = {
    HOME: 'HOME',
    BOOKING: 'BOOKING',
    FAVORITE: 'FAVORITE',
    PROFILE: 'PROFILE',
}

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
    return (
        <Stack.Navigator initialRouteName={SCREENS.HOME}>
            <Stack.Screen
                name={SCREENS.HOME}
                component={ScreenSplash}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default StackRoutes;