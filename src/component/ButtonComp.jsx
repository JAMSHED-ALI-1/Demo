import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextCompo from './TextCompo'
import { COLORS } from '../Styles/colors'

const ButtonComp = ({title,bgcolor,onPress}) => {
  return (
    <TouchableOpacity style={{...styles.button,backgroundColor:bgcolor}} 
    activeOpacity={0.7}
    onPress={onPress}
    >
      <TextCompo style={{...styles.text}}>{title}</TextCompo>
    </TouchableOpacity>
  )
}

export default ButtonComp

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#000',
        padding:10,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
    },
    text:{
        color:COLORS.BLACK,
        fontSize:16,
        fontWeight:'bold',
    }
})