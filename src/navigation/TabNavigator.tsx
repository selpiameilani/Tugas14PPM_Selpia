import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/TabScreen/Home';
import Profile from '../screens/TabScreen/Profile';
import Search from '../screens/TabScreen/Search';
import Favorites from '../screens/TabScreen/Favorites'; // Import screen Favorites
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text, View} from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'heart' : 'heart-outline';
          }

          
          return (
            <View style={{ alignItems: 'center' }}>
              <Ionicons name={iconName} size={size} color={color} />
              <Text style={{ color: color, fontSize: 12 }}>{route.name}</Text>
            </View>
          );
        },
        tabBarActiveTintColor: '#000', // Warna hitam untuk tab aktif
        tabBarInactiveTintColor: '#000', // Warna hitam untuk tab tidak aktif
        tabBarStyle: {
          backgroundColor: '#93F4A8', 
        },
        tabBarLabel: () => null, // Hilangkan label tab
        headerShown: false, // Menyembunyikan header pada setiap tab
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
