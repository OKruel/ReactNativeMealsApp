import React from 'react';
//*REACT NATIVE BUILT IN COMPONENTS
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
//*REACT NATIVE APIs
import { TouchableOpacity, ImageBackground } from 'react-native';
//*CREATED CONSTANTS
import Colors from '../constants/Colors';
//* COMPONENTS
import DefaultText from './DefaultText';


const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground
                            source={{ uri: props.itemData.item.imageUrl }}
                            style={styles.bgImage}
                        >
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{props.itemData.item.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <DefaultText>{props.itemData.item.duration}{' '}minutes</DefaultText>
                        <DefaultText>{props.itemData.item.complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{props.itemData.item.affordability.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: Colors.lightGrey,
        marginBottom: 15,
        borderRadius: 10,
        overflow: 'hidden'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    mealDetail: {
        height: '15%',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleContainer: {
        backgroundColor: Colors.mediumTransperency,
        paddingVertical: 5
    },
    title: {
        fontSize: 20,
        fontFamily: 'open-sans-bold',
        color: Colors.white,
        textAlign: 'center',
    }
});

export default MealItem;