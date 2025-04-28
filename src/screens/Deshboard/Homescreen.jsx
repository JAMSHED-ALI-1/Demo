import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import HeaderComp from '../../component/HeaderComp'
import { COLORS } from '../../Styles/colors'
import navigationString from '../../route/navigationString'

const Homescreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Adhoc');

  return (
    <SafeAreaView style={{flex:1}}>
      <HeaderComp title={'Schedule'} bell={true} />
    <View style={styles.container}>

      <Text style={styles.heading}>Schedule a Service</Text>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Adhoc' && styles.activeTab]}
          onPress={() => setActiveTab('Adhoc')}
        >
          <Text style={[styles.tabText, activeTab === 'Adhoc' && styles.activeTabText]}>Adhoc</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Recurring' && styles.activeTab]}
          onPress={() => setActiveTab('Recurring')}
        >
          <Text style={[styles.tabText, activeTab === 'Recurring' && styles.activeTabText]}>Recurring</Text>
        </TouchableOpacity>
      </View>

      {/* Inputs */}
      <TouchableOpacity style={styles.inputBox} onPress={()=>navigation.navigate(navigationString.PROFILE)}>
        <Text>Danilee's Pelham,NY</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.inputBox} onPress={()=> navigation.navigate(navigationString.MYRECURRING) }>
        <Text>Select Service</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.inputBox}>
        <Text>Select Date</Text>
      </TouchableOpacity>

      {/* Buttons */}
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.planButton}>
        <Text style={styles.buttonText}>See All Plans</Text>
      </TouchableOpacity>

    </View>
    </SafeAreaView>
  )
}

export default Homescreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 16,
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
  }
});
