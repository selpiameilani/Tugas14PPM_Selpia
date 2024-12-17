import { View, Text } from 'react-native';
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Setting from '../screens/DrawerScreen/Setting';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ paddingTop: 50, paddingLeft: 20, paddingBottom: 20 }}>
        <Text>Drawer Header</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false, // Menyembunyikan header di seluruh drawer navigator
      }}
    >
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{ drawerLabel: () => null }} // Menyembunyikan label "Home"
      />
      <Drawer.Screen
        name="Settings"
        component={Setting}
        options={{ drawerLabel: 'Settings' }} // Contoh label untuk layar lain
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
