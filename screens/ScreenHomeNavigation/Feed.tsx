import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HeaderBar from '@/components/HeaderBar'
import SearchTabNavBar from './SearchTabNavigation/SearchTabNavBar'
import FeedTabNavBar from './FeedTabNavigation/FeedTabNavBar'

const Feed = () => {
  return (
    <View style={styles.container}>
      <HeaderBar />
      <FeedTabNavBar />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
})

export default Feed