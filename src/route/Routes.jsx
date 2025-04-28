import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthStack from './AuthStack'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainStack from './MainStack'

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer >
    <Stack.Navigator>

    {MainStack(Stack)}     

    </Stack.Navigator>

</NavigationContainer>
  )
}

export default Routes

const styles = StyleSheet.create({})