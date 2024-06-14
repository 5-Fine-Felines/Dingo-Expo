import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserHome from '@/screens/ScreenHomeNavigation/UserHome';
import Search from '@/screens/ScreenHomeNavigation/Search';
import Feed from '@/screens/ScreenHomeNavigation/Feed';
import Library from '@/screens/ScreenHomeNavigation/Library';
import UserProfile from '@/screens/UserProfile';

const BottomNav = createBottomTabNavigator();

const BottomNavBar = () => {
    return (
        <BottomNav.Navigator
            initialRouteName='home'
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    borderTopLeftRadius: 32,
                    borderTopRightRadius: 32,
                    height: 72,
                    paddingHorizontal: 36
                }
            }}>
            <BottomNav.Screen
                name='home'
                component={UserHome}
                options={{
                    headerShown: false,
                    title: 'home',
                    tabBarIcon: ({ focused }) => (
                        <Image source={require("../assets/images/home.png")} />)
                }}
            />
            <BottomNav.Screen
                name='search'
                component={Search}
                options={{
                    headerShown: false,
                    title: 'Search',
                    tabBarIcon: ({ focused }) => (
                        <Image source={require("../assets/images/search2.png")} />
                    )
                }}
            />
            <BottomNav.Screen
                name='feed'
                component={Feed}
                options={{
                    headerShown: false,
                    title: 'Feed',
                    tabBarIcon: ({ focused }) => (
                        <Image source={require("../assets/images/playlist.png")} />
                    )
                }}
            />
            <BottomNav.Screen
                name='library'
                component={Library}
                options={{
                    headerShown: false,
                    title: 'Library',
                    tabBarIcon: ({ focused }) => (
                        <Image source={require("../assets/images/books.png")} />
                    )
                }}
            />
        </BottomNav.Navigator>
    )
}

export default BottomNavBar;
