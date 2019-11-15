import React from 'react';
//*REACT NATIVE BUILT IN COMPONENTS
import { View, Text, StyleSheet } from 'react-native';
//*REACT NATIVE APIs
import { TouchableOpacity, Platform } from 'react-native';
//*CREATED CONSTANTS
import Colors from '../constants/Colors';
//* STYLING 3 PARTYS LIBRARYS
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

const CustomHeaderButton = props => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.OS === 'android' ? Colors.white : Colors.primaryColor}
        />
    );
};

const styles = StyleSheet.create({

});

export default CustomHeaderButton;