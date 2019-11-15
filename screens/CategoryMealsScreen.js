import React from 'react';
//*REACT NATIVE BUILT IN COMPONENTS
import { View, Text, FlatList, StyleSheet } from 'react-native';
//*NATIVE CREATED DATA
import { CATEGORIES, MEALS } from '../data/dummy-data';
//*CREATED COMPONENTS
import MealItem from '../components/MealItem';


//*MAIN COMPONENT
const CategoryMealsScreen = props => {

    //! TEST AREA ------EXAMPLES BELOW---------------------------------------------
    //*CHECKING PROPS
    // console.log('Category Meals Screen Props -> ', props);
    //!---------------------------------------------------------------------------

    const renderMealData = itemData => {
        return (
            <MealItem
                itemData={itemData}
                onSelectMeal={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                        params: {
                            mealId: itemData.item.id
                        }
                    })
                }}
            />
        );
    }

    //*GETTING PARAMS PASSED FROM THE PREVIOUS SCREEN IN THE PROPS.NAVIGATION
    const catId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(meal =>
        meal.categoryId.indexOf(catId) >= 0
    )
    // console.log(displayedMeals)
    //* RENDERING UI
    return (
        <View style={styles.screen}>
            <FlatList
                keyExtractor={item => item.id}
                data={displayedMeals}
                renderItem={renderMealData}
                style={{ width: '100%', padding: 15 }}
            />
        </View>
    );
};
//*ADDING THE MANDATORY NAVIGATIONOPTIONS PROPERTY TO THE OBJECT WHICH IS A FUNCTION IN JAVASCRIPT
//This property will handle the creation of the Header and its style;
//Can be used as a object or a function;
//Receives a property called NAVIGATIONDATA which contains all the navigation properties;
CategoryMealsScreen.navigationOptions = navigationData => {
    // console.log('Category Meals Screen Navigation Data -> ', navigationData);
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return { headerTitle: selectedCategory.title };
}
//*STYLES
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CategoryMealsScreen;