import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import navigationString from './navigationString'
import *  as Screens  from '../screens'
const MainStack = (Stack) => {
  return (
   <>
           <Stack.Screen name={navigationString.HOMESCREEN} 
           component={Screens.Tabroutes}
           options={{headerShown:false}} 
           />
           <Stack.Screen name={navigationString.MYRECURRING} 
           component={Screens.Myrecurring}
           options={{headerShown:false}} 
           />
             <Stack.Screen name={navigationString.LOGIN} 
           component={Screens.Login}
           options={{headerShown:false}} 
           />
      </>
  )
}

export default MainStack

const styles = StyleSheet.create({})