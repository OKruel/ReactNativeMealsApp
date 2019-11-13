import React from 'react';
//*React Native Built In Components
import { View, Text, Button, StyleSheet } from 'react-native';

//*MAIN COMPONENT
const CategoryMealsScreen = props => {
        //*NAVIGATION.GOBACK() EXAMPLE
        //Goes back to previous page stack;
        //Good for leave the page automaticly after doing something
        const MyButton = () => <Button title='Go back' onPress={() => props.navigation.goBack()} />;
    return (
        <View style={styles.screen}>
            <Text>Category Meals Screen - Second in the Navigation Stack</Text>
            <Button 
            title='GO TO MEAL DETAILS' 
            onPress={() => props.navigation.navigate({routeName: 'MealDetail'})}
            />
            <MyButton/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CategoryMealsScreen;