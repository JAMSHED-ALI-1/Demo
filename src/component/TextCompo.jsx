//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../Styles/colors';
import { textScale } from '../Styles/responsiveSize';

// create a component
const TextCompo = ({
    text = '',
    style = {},
    children,
    ...props
}) => {
  

    return (
            <Text 

            style={{
                ...styles.textStyle, 
                ...style,
        
            }}
            {...props}
            >{text} {children}</Text>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        // fontFamily: fontFamily.regular,
        color: COLORS.WHITE,
        fontSize:textScale(12),
        textAlign:'left'
    },
});




export default TextCompo

