import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationString from './navigationString';
import *  as Screens  from '../screens'


const AuthStack = (Stack) => {

     
  return (
   <>
        <Stack.Screen name={navigationString.LOGIN} 
        component={Screens.Login}
        options={{headerShown:false}} 
        />
   </>

  )
}

export default AuthStack

const styles = StyleSheet.create({})