import React from 'react';
//*REACT NATIVE BUILT IN COMPONENTS
import { Button, FlatList, StyleSheet } from 'react-native';
//*NATIVE CREATED DATA
import { CATEGORIES } from '../data/dummy-data';
//*CREATED COMPONENTS
import CategoryGridTile from '../components/CategoryGridTile';
import HeaderButton from '../components/HeaderButton';
//* THIRD PARTY STYLING
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

//*MAIN COMPONENT
const CategoriesScreen = props => {

    //! TEST AREA ------EXAMPLES BELOW---------------------------------------------
    // console.log('Category Screen -> ', props)
    //*NAVIGATION.NAVIGATE() EXAMPLE
    //Navigates to the indicated page and you can go back only to the previous page
    const MyButton = () => <Button title='Regular Navigation' onPress={() => props.navigation.navigate({ routeName: 'CategoryMeals' })} />;

    //*NAVIGATION.PUSH() EXAMPLE
    //navigation.push allows to navigate to the same page you are already in;
    //Good for rendering the same page with different content
    const MyButton1 = () => <Button title='Same Screen' onPress={() => props.navigation.push('Categories')} />;

    //*NAVIGATION.REPLACE() EXAMPLE
    //Navigates to the indicated page but you CAN NOT GO BACK PAGES
    const MyButton2 = () => <Button title='Cant come back from this' onPress={() => props.navigation.replace('CategoryMeals')} />;

    //*NAVIGATION.GOBACK() EXAMPLE
    //Goes back to previous page stack;
    //Good for leave the page automaticly after doing something
    const MyButton3 = () => <Button title='Go back' onPress={() => props.navigation.goBack()} />;

    //*NAVIGATION.POPTOTOP() EXAMPLE
    //Goes back to the root screen directly;
    const MyButton4 = () => <Button title='Go to root page' onPress={() => props.navigation.popToTop()} />;
    //!--------------------------------------------------------------

    //*FUNCTIONS TO CREATE MARKUP
    const renderGridItem = itemData => {
        return <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() => {
                props.navigation.navigate({
                    routeName: 'CategoryMeals',
                    params: {
                        categoryId: itemData.item.id
                    }
                })
            }}
        />;
    };
    //*RENDERING COMPONENT
    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderGridItem}
        />
    );
};
//*ADDING THE MANDATORY NAVIGATIONOPTIONS PROPERTY TO THE OBJECT WHICH IS A FUNCTION IN JAVASCRIPT
//This property will handle the creation of the Header and its style;
//Can be used as a object or a function;
//Receives a property called NAVIGATIONDATA which contains all the navigation properties;
CategoriesScreen.navigationOptions = navigationData => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton} >
            <Item title='Menu' iconName='ios-menu' onPress={() => {
                navigationData.navigation.toggleDrawer()
             }} />
        </HeaderButtons>
    }
};
//* STYLES
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

});

export default CategoriesScreen;