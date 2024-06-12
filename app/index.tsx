import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Auth from '@/screens/AuthLogin';
import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from '@/routes/StackRoutes';

const index = () => {
  return (
      <SafeAreaView style={{ flex: 1 }}>
        <StackRoutes />
      </SafeAreaView>
  )
}

export default index;
