import React from 'react';
//*React Native Built In Components
import { View, Text, StyleSheet } from 'react-native';

//*MAIN COMPONENT
const FavoritesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Favorites Screen</Text>
        </View>
    );
};

FavoritesScreen.navigationOptions = {headerTitle: 'Favorite Meals'}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default FavoritesScreen;