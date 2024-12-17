import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartScreen from '../screens/TabScreen/StartScreen';
import DrawerNavigator from './DrawerNavigator';
import FavoritesScreen from '../screens/TabScreen/Favorites';
import RecipeDetailScreen from '../screens/Detail/RecipeDetailScreen';
import CategoryScreen from '../screens/Detail/CategoryScreen';

type RootStackParamList = {
  StartScreen: undefined;
  Main: undefined;
  RecipeDetail: {title: String};
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
          name="Main"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RecipeDetail"
          component={RecipeDetailScreen}
          options={{headerShown: false, title: 'Recipe detail'}} // show header for RecipedetailScreen
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
