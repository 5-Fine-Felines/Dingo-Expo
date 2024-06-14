import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HeaderBar from '@/components/HeaderBar';
import SearchTabNavBar from './SearchTabNavigation/SearchTabNavBar';



const Search = () => {
  

  return (
    <View style={styles.container}>
      <HeaderBar />
      <SearchTabNavBar />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
 
 
});

export default Search;
