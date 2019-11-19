import React from 'react';
//*NATIVE CREATED DATA
import { CATEGORIES } from '../data/dummy-data';
//*CREATED COMPONENTS
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';
//*REDUX
import { useSelector } from 'react-redux';
//*React Native Built In Components
import { View, StyleSheet } from 'react-native';


//*MAIN COMPONENT
const CategoryMealsScreen = props => {

    //! TEST AREA ------EXAMPLES BELOW---------------------------------------------
    //*CHECKING PROPS
    // console.log('Category Meals Screen Props -> ', props);
    //!---------------------------------------------------------------------------

    //*GETTING PARAMS PASSED FROM THE PREVIOUS SCREEN IN THE PROPS.NAVIGATION
    const catId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const displayedMeals = availableMeals.filter(meal =>
        meal.categoryId.indexOf(catId) >= 0
    );
    //* RENDERING UI
    if (displayedMeals.length === 0 || !displayedMeals) {
        return <View style={styles.content}><DefaultText>No meals found! Check your filters!</DefaultText></View>;
    };
    return <MealList listData={displayedMeals} navigation={props.navigation} />;
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
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsScreen;