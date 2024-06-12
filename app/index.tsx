import { View, Text } from 'react-native'
import React from 'react'
import Auth from '@/screens/AuthLogin';

const index = () => {
  return (
    <View className='flex-1 bg-color-red'>
      <Auth />
    </View>
  )
}

export default index;
