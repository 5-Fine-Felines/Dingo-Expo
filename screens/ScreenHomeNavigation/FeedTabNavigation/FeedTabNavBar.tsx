import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LatestNewsTab from '../FeedTab/LatestNewsTab';
import VetMedicalTab from '../FeedTab/VetMedicalTab';
import MissingTab from '../FeedTab/MissingTab';

const TABS = {
    LATESTNEWS: 'Latest News',
    VETMEDICAL: 'Veterinary Medical',
    MISSING: 'Missing',
    
  }
  
  const MaterialNavigator = createMaterialTopTabNavigator();

const FeedTabNavBar = () => {
  return (
    <MaterialNavigator.Navigator initialRouteName={TABS.LATESTNEWS}
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
            <MaterialNavigator.Screen name={TABS.LATESTNEWS} component={LatestNewsTab} />
            <MaterialNavigator.Screen name={TABS.VETMEDICAL} component={VetMedicalTab} />
            <MaterialNavigator.Screen name={TABS.MISSING} component={MissingTab} />
            
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

export default FeedTabNavBar