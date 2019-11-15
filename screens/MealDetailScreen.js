import React from 'react';
//*REACT NATIVE BUILT IN COMPONENTS
import { View, Text, Button, StyleSheet } from 'react-native';
//*NATIVE CREATED DATA
import { MEALS } from '../data/dummy-data';
//* STYLING 3 PARTYS LIBRARYS
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
//*CREATED COMPONENTS
import HeaderButton from '../components/HeaderButton';


//*MAIN COMPONENT
const MealDetailScreen = props => {

    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <View style={styles.screen}>
            <Text>Meal Detail Screen - Third in the Navigation Stack</Text>
        </View>
    );
};

MealDetailScreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: selectedMeal.title,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title='Favorites'
                iconName='ios-star'
                onPress={() => console.log('Marked as favorite')}
            />
        </HeaderButtons>
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MealDetailScreen;