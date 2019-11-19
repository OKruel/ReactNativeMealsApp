import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
//*CREATED COMPONENTS
import MealItem from '../components/MealItem';
//*REDUX
import { useSelector } from 'react-redux';

const MealList = props => {

    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

    const renderMealData = itemData => {
        const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id)
        return (
            <MealItem
                itemData={itemData}
                onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                        params: {
                            mealId: itemData.item.id,
                            mealTitle: itemData.item.title,
                            isFav: isFavorite
                        }
                    })
                }}
            />
        );
    }

    return (
        <View style={styles.list}>
            <FlatList
                keyExtractor={item => item.id}
                data={props.listData}
                renderItem={renderMealData}
                style={{ width: '100%', padding: 15 }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MealList;


