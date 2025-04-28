import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationString from './navigationString';
import *  as Screens  from '../screens'
import { COLORS } from '../Styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();
const Tabroutes = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
       
        backgroundColor: COLORS.WHITE,
        height: 80,
        borderTopWidth: 0, // <-- REMOVE TOP BORDER
        elevation: 0, // <-- REMOVE SHADOW ON ANDROID
        shadowOpacity: 0, // <-- REMOVE SHADOW ON iOS
      },
      tabBarLabelStyle:{fontSize:14,color:COLORS.BLACK},
      tabBarShowLabel:false,
      tabBarActiveTintColor:COLORS.PINK
    }}>
      <Tab.Screen name={navigationString.HOMESCREEN} 
      component={Screens.Homescreen} 
      options={{headerShown:false,
        tabBarIcon:({color, size, focused})=>{
          return(
            <Image source={require('../assets/booking.png')} style={{height:35,width:35}}
            tintColor={focused?COLORS.PINK:'black'}/>
          )
        },
   
        
      }} />
         <Tab.Screen name={navigationString.BOOKING} 
      component={Screens.Booking}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          // <Icon name={focused ? "calendar" : "calendar"} size={size} color={color} />
          <Image source={require('../assets/calender.png')} style={{height:35,width:35}}
          tintColor={focused?COLORS.PINK:'black'}/>
        ),
        // tabBarLabel: 'Profile',
        tabBarShowLabel:false,
        headerShown: false,
      }} />
      <Tab.Screen name={navigationString.PROFILE} 
      component={Screens.Profile}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <Image source={require('../assets/user.png')} style={{height:35,width:35}} tintColor={focused?COLORS.PINK:'black'}/>
        ),
        tabBarLabel: 'Profile',
        headerShown: false,
      }} />
    </Tab.Navigator>
  )
}

export default Tabroutes

const styles = StyleSheet.create({})