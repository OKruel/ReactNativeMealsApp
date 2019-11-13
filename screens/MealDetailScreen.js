import React from 'react';
//*React Native Built In Components
import { View, Text, Button, StyleSheet } from 'react-native';

//*MAIN COMPONENT
const MealDetailScreen = props => {
    //*NAVIGATION.POPTOTOP() EXAMPLE
    //Goes back to the root screen directly;
    const MyButton = () => <Button title='Go to root page' onPress={() => props.navigation.popToTop()} />;
    return (
        <View style={styles.screen}>
            <Text>Meal Detail Screen - Third in the Navigation Stack</Text>
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

export default MealDetailScreen;