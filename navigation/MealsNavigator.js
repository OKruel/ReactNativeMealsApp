import React from 'react';
//* NAVIGATION
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'; //Creates back and foward navigation using stack system
import { createBottomTabNavigator } from 'react-navigation-tabs';//Creates a bottom tab with links to navigate;
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'; //A tab navigator that the style seems more like android;
import { createDrawerNavigator } from 'react-navigation-drawer';
//*PAGES
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
//*REACT NATIVE APIs
import { Platform } from 'react-native';
//*CREATED CONSTANTS
import Colors from '../constants/Colors';
//* STYLING 3 PARTYS LIBRARYS
import { Ionicons } from '@expo/vector-icons';


//*NAVIGATION SUMMARY
//There are 3 types of navigation: Stack, Tabs and Drawer;
//*1 - STACK
//A stack of pages is created through the createStackNavigator function which takes a object;
//This object takes the pages you want to render;
//Creates also a back and foward navigation system through the stack of pages;
//The object with the navigation stack is exported with the createAppContainer();
//You can access the object through props 
//*FUNCTION WHICH CREATES THE STACK NAVIGATION

const defaultStackNavOptions = {
    headerStyle: { backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : Colors.white },
    headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.primaryColor
}

const MealsNavigator = createStackNavigator({
    Categories: { screen: CategoriesScreen },
    CategoryMeals: { screen: CategoryMealsScreen },
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
});

const FavoritesNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
});

//*2 - TABS
const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavoritesNavigator,
        navigationOptions: {
            tabBarLabel: 'Favorites',
            tabBarIcon: tabInfo => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.black
        }
    }
}

const MealsFavTabNavigator = Platform.OS === 'android' ?
    createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Colors.secondaryColor,
        shifting: true
    }) :
    createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Colors.secondaryColor,
            activeBackgroundColor: Colors.primaryColor
        }
    });


export default createAppContainer(MealsFavTabNavigator)