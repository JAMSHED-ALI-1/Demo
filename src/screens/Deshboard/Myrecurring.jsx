import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../Styles/colors'
import HeaderComp from '../../component/HeaderComp'

const DATA = [
  {
    id: 1,
    heading: 'Monthly Plan (1-child) 1-2 Days',
    normalText: 'At learning center starts from 13-apr-25',
    date: 'Monday-Tuesday',
    state: 'pending'
  },
  {
    id: 2,
    heading: 'Monthly Plan (1-child) 1-2 Days',
    normalText: 'At learning center starts from 13-apr-25',
    date: 'Monday-Tuesday',
    state: 'approved'
  }
]

const Myrecurring = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <HeaderComp title={'My Recurring Booking'} back={true} onPress={()=>navigation.goBack()}/>
      <View style={styles.container}>
        {DATA.map((item, index) => (
          <View key={item.id}>
            <View style={styles.itemContainer}>
              <View style={{ flex: 1 }}>
                <Text style={styles.headingText}>{item.heading}</Text>
                <Text style={styles.normalText}>{item.normalText}</Text>
                <Text style={styles.dateText}>{item.date}</Text>
              </View>
              <View style={[styles.stateContainer,{backgroundColor:item.id===1?'#abe4fc':'#ddb7a5'}]}>
                <Text style={styles.stateText}>{item.state}</Text>
              </View>
            </View>

            {/* Line after each item */}
            <View style={styles.divider} />
          </View>
        ))}
      </View>
    </SafeAreaView>
  )
}

export default Myrecurring

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.WHITE
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  headingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  normalText: {
    fontSize: 14,
    color: COLORS.GRAY,
    marginTop: 4,
  },
  dateText: {
    fontSize: 14,
    color: COLORS.GRAY,
    marginTop: 2,
  },
  stateContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor:'red',
    padding:5,
    borderRadius:20,
    height:30
  },
  stateText: {
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 8,
  },
})
