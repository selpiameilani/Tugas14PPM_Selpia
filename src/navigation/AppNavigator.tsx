import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartScreen from '../screens/TabScreen/StartScreen';
import DrawerNavigator from './DrawerNavigator';
import FavoritesScreen from '../screens/TabScreen/Favorites';
import RecipeDetailScreen from '../screens/Detail/RecipeDetailScreen';
import CategoryScreen from '../screens/Detail/CategoryScreen';
import Login from '../screens/Login';
import RegisterScreen from '../screens/Register';

type RootStackParamList = {
  StartScreen: undefined;
  Main: undefined;
  RecipeDetail: {title: string};
  Login: undefined;
  Register: undefined;
  Category: undefined;
  Favorites: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen">
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RecipeDetail"
          component={RecipeDetailScreen}
          options={{headerShown: false, title: 'Recipe detail'}}
        />
        <Stack.Screen
          name="Category"
          component={CategoryScreen}
          options={{headerShown: false, title: 'Category'}}
        />
        <Stack.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{headerShown: false, title: 'Favorites'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
