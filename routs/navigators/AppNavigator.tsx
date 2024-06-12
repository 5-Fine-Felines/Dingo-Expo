// navigation/AppNavigator.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenSplash from '../screens/ScreenSplash';
import ScreenOnboard from '../screens/ScreenOnboard';
import ScreenLogin from '../screens/ScreenLogin';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="ScreenSplash" component={ScreenSplash} options={{ headerShown: false }} />
        <Stack.Screen name="ScreenOnboard" component={ScreenOnboard} options={{ headerShown: false }} />
        <Stack.Screen name="ScreenLogin" component={ScreenLogin} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
