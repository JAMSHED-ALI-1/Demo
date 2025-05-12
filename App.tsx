import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import BootSplash from "react-native-bootsplash";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/route/Routes';
import { COLORS } from './src/Styles/colors';
const App = () => {
  useEffect(() => {
    let isMounted = true;
  
    const init = async () => {
      try {
        // do multiple sync or async tasks here
      } catch (error) {
        console.error('Error during init:', error);
      } finally {
        if (isMounted) {
          await BootSplash.hide({ fade: true });
          console.log('BootSplash has been hidden successfully');
        }
      }
    };
  
    init();
  
    return () => {
      isMounted = false;
    };
  }, []);




  
  
  return (
    <>
    <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.BLACK}/>
    <Routes/>
    {/* <Text>hello How Are You</Text> */}
    </>
  )
}

export default App

const styles = StyleSheet.create({})