import React from 'react';
//*REACT NATIVE BUILT IN COMPONENTS
import { View, Text, StyleSheet } from 'react-native';
//*REACT NATIVE APIs
import { TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
//*CREATED CONSTANTS
import Colors from '../constants/Colors';


const CategoryGridTile = props => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' || Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }
    return (
        <View style={styles.gridItem}>
            <TouchableCmp onPress={props.onSelect} style={{ flex: 1 }}>
                <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                    <Text style={styles.title} numberOfLines={2} >{props.title}</Text>
                </View>
            </TouchableCmp>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >=21 ? 'hidden' : 'visible',
        elevation: 10
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: Colors.black,
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,        
        padding: 13,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right'
    }
});

export default CategoryGridTile;