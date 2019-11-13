import React from 'react';
//* NAVIGATION
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'; //Creates back and foward navigation using stack system
import { createBottomTabsNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
//*PAGES
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

//*FUNCTION WHICH CREATES THE STACK BACK AND FOWARD STYLE OF NAVIGATION
const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {screen: CategoryMealsScreen},
    MealDetail: MealDetailScreen
});

export default createAppContainer(MealsNavigator)