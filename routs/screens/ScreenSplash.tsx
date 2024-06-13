import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('ScreenOnboard');
    }, 2000); // Navigate to Onboarding after 2 seconds
  }, []);

  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default ScreenSplash;
