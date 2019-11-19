import React, { useEffect, useCallback } from 'react';
//*REACT NATIVE BUILT IN COMPONENTS
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
//*REDUX
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/meals';
//* STYLING 3 PARTYS LIBRARYS
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
//*CREATED COMPONENTS
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
//*CREATED CONSTANTS
import Colors from '../constants/Colors';


const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
}

//*MAIN COMPONENT
const MealDetailScreen = props => {
    const availableMeals = useSelector(state => state.meals.meals);
    const mealId = props.navigation.getParam('mealId');
    
    const currentMealIsFavorite = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId));
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);

    const dispatch = useDispatch();

    const toggleFavoritesHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId]);

    useEffect(() => {
        props.navigation.setParams({ toggleFav: toggleFavoritesHandler })
    }, [toggleFavoritesHandler]);

    useEffect(() => {
        props.navigation.setParams({ isFav: currentMealIsFavorite })
    }, [currentMealIsFavorite]);

    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.detail}>
                <DefaultText>{selectedMeal.duration}{' '}minutes</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map((value, index) => (
                <ListItem key={index}>{value}</ListItem>
            ))}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map((value, index) => (
                <ListItem key={index}>{value}</ListItem>
            ))}

        </ScrollView>
    );
};

MealDetailScreen.navigationOptions = navigationData => {
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const toggleFavorite = navigationData.navigation.getParam('toggleFav');
    const isFavorite = navigationData.navigation.getParam('isFav')
    return {
        headerTitle: mealTitle,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title='Favorites'
                iconName={isFavorite ? 'ios-star' : 'ios-star-outline' } 
                onPress={toggleFavorite}
            />
        </HeaderButtons>
    };
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        textAlign: "center"
    },
    image: {
        width: '100%',
        height: 200
    },
    detail: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: Colors.grey,
        borderWidth: 1,
        padding: 10
    }
});

export default MealDetailScreen;