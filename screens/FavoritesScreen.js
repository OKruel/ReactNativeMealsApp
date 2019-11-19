import React from 'react';
//*React Native Built In Components
import { View, StyleSheet } from 'react-native';
//*CREATED COMPONENTS
import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
//*REDUX
import { useSelector } from 'react-redux';
//*THIRD PARTY STYLING
import { HeaderButtons, Item } from 'react-navigation-header-buttons';


//*MAIN COMPONENT
const FavoritesScreen = props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals);
    if (favMeals.length === 0 || !favMeals) {
        return <View style={styles.content}><DefaultText>No favorite meals selected. Start adding some!</DefaultText></View>
    }
    return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = navigationData => {
    return {
        headerTitle: 'Favorite Meals',
        headerLeft: < HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' iconName='ios-menu' onPress={() => {
                navigationData.navigation.toggleDrawer()
            }}></Item>
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavoritesScreen;