import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import HeaderComp from '../../component/HeaderComp'
import { COLORS } from '../../Styles/colors'
import navigationString from '../../route/navigationString'
import Icon from 'react-native-vector-icons/FontAwesome';

const Booking = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('In-Progress');

  return (
    < SafeAreaView style={{flex:1}}>
      <HeaderComp title={'Adhok Booking'} bell={true} />
    <View style={styles.container}>

      

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'In-Progress' && styles.activeTab]}
          onPress={() => setActiveTab('In-Progress')}
        >
          <Text style={[styles.tabText, activeTab === 'In-Progress' && styles.activeTabText]}>In-Progress</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Completed' && styles.activeTab]}
          onPress={() => setActiveTab('Completed')}
        >
          <Text style={[styles.tabText, activeTab === 'Completed' && styles.activeTabText]}>Completed</Text>
        </TouchableOpacity>
      </View>

      {/* Inputs */}
      
<Text style={{alignSelf:'center',...styles.heading}}>No Booking Found</Text>
<View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>
      
      {/* Calendar Icon */}
      <TouchableOpacity style={{ ...styles.icon}}>
        <Icon name="calendar" size={30} color={COLORS.WHITE} />
      </TouchableOpacity>

      {/* Filter Icon */}
      <TouchableOpacity style={{ ...styles.icon}}>
        <Icon name="filter" size={30} color={COLORS.WHITE} />
      </TouchableOpacity>

    </View>
   




    </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: 16,
    justifyContent:'space-between'
  },
  heading: {
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 16,
    color:COLORS.BLACK
  },
  tabContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: COLORS.GRAY,
    overflow: 'hidden',
    marginBottom: 20,
    // width:'100%'
  },
  tabButton: {
    width: '50%',
    paddingVertical: 10,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#c4e538', // Light green color
  },
  tabText: {
    color: 'black',
    fontWeight: '600',
  },
  activeTabText: {
    color: 'white',
  },
  inputBox: {
    height: 50,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 3, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  nextButton: {
    height: 50,
    backgroundColor: '#c4e538',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  planButton: {
    height: 50,
    backgroundColor: '#c4e538',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  icon:{
    backgroundColor:COLORS.PINK,
  height:60,
  width:60,
  alignItems:'center',
  justifyContent:'center',

    borderRadius:100
  }
});


export default Booking

