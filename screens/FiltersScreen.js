import React from 'react';
//*React Native Built In Components
import { View, Text, StyleSheet } from 'react-native';

//*MAIN COMPONENT
const FiltersScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Filters Screen</Text>
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

export default FiltersScreen;