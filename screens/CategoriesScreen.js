import React from 'react';
//*React Native Built In Components
import { View, Text, Button, StyleSheet } from 'react-native';

//*MAIN COMPONENT
const CategoriesScreen = props => {
    //*NAVIGATION.PUSH() EXAMPLE
    //navigation.push allows to navigate to the same page you are already in;
    //Good for rendering the same page with different content
    const MyButton = () => <Button title='Same Screen' onPress={() => props.navigation.push('Categories')} />;

    //*NAVIGATION.REPLACE() EXAMPLE
    //Navigates to the indicated page but you CAN NOT GO BACK PAGES
    const MyButton2 = () => <Button title='Cant come back from this' onPress={() => props.navigation.replace('CategoryMeals')} />;

    //*RENDERING COMPONENT
    return (
        <View style={styles.screen}>
            <Text>Categories Screen - Initial Navigation</Text>
            <Button
                title='Go to Meals'
                onPress={() => props.navigation.navigate({ routeName: 'CategoryMeals' })}
            />
            <MyButton />
            <MyButton2 />
        </View>
    );
};
//* STYLES
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CategoriesScreen;