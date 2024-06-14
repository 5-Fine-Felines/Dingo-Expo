import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LatestUpdate from '../SearchTab/LatestUpdate';
import Category from '../SearchTab/Category';
import Products from '../SearchTab/Products';

const TABS = {
    LATESTUPDATE: 'Latest Update',
    CATEGORY: 'Category',
    PRODUCT: 'PRODUCT',
    
  }
  
  const MaterialNavigator = createMaterialTopTabNavigator();



const SearchTabNavBar = () => {
  return (
    <MaterialNavigator.Navigator initialRouteName={TABS.LATESTUPDATE}
            style={{
                width:'100%'
            }}
            screenOptions={{
                tabBarStyle: styles.mTabBar,
                tabBarIndicatorStyle: styles.mTabIndicator,
                tabBarItemStyle: styles.mTabBarButton,
                tabBarLabelStyle: styles.mTabBarLabel,
                                       
                tabBarPressColor: 'transparent',
                tabBarInactiveTintColor: '#B8B8B8',
                tabBarActiveTintColor: '#176FF2',
                swipeEnabled: false,
            }}>
            <MaterialNavigator.Screen name={TABS.LATESTUPDATE} component={LatestUpdate} />
            <MaterialNavigator.Screen name={TABS.CATEGORY} component={Category} />
            <MaterialNavigator.Screen name={TABS.PRODUCT} component={Products} />
            
        </MaterialNavigator.Navigator>
  )
}

const styles = StyleSheet.create({
    mTabBar: {
        marginHorizontal:4,
        backgroundColor:'transparent',
        elevation:0,   
    },
    mTabIndicator:{
        position:"absolute",
        backgroundColor:'#196EEE',
        opacity:0.1,
        height:'100%',
        zIndex:-1,
        borderRadius:24,
        bottom:-4
    },
    mTabBarButton:{
        borderRadius:24,
        width:120,
        height:41
    },
    mTabBarLabel: {
        fontWeight:700,
        textTransform: 'capitalize',
        fontSize:14
    },

})



export default SearchTabNavBar