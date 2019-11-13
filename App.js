import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//* EXPO IMPORTS
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
//*NAVIGATION
import MealsNavigator from './navigation/MealsNavigator';

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
  return <MealsNavigator />
}
//*STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
