//Screen Onboarding
import React from 'react';
import { View, Text, Button } from 'react-native';

const Onboarding = ({ navigation }) => {
  return (
    <View>
      <Text>Onboarding Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default ScreenOnboard;
