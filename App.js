import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useScreens } from 'react-native-screens';
//* EXPO IMPORTS
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
//*NAVIGATION
import MealsNavigator from './navigation/MealsNavigator';
//* REDUX
import { createStore, combineReducers } from 'redux';
import mealsReducer from './store/reducers/meals';
import { Provider } from 'react-redux';

//*OPTIMIZES PERFORMANCE USING UNDER THE HOOT NATIVE IOS AND ANDROID MECANISMS
useScreens();

//*CREATING STORE TO USE REDUX
const rootReducer = combineReducers({
  meals: mealsReducer
})
const store = createStore(rootReducer)

//*FUNCTION THAT DO NOT NEED TO BE RENDER WITH THE MAIN COMPONENT
//Function to load fonts asynchronous
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

//*MAIN COMPONENT
export default function App() {
  //*STATE
  const [fontLoaded, setFontLoaded] = useState(false);
  //* RETURNING JSX
  if (!fontLoaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)}>
        <Text>Loading Fonts</Text>
      </AppLoading>
    );
  };
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
};

