import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import Back from 'react-native-vector-icons/Ionicons'; 

import { COLORS } from '../Styles/colors';

const HeaderComp = ({ title,back,bell,onPress }) => {
  return (
    <View style={styles.container}>

       {back?<TouchableOpacity onPress={onPress}>
        <Back name="arrow-back" size={30} color="#fff" />
      </TouchableOpacity>:<View/>}
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      {bell?<TouchableOpacity>
        <Icon name="bell" size={30} color="#fff" />
      </TouchableOpacity>:<View/>}
    </View>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Theme,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    padding: 16,
    paddingVertical:30
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
