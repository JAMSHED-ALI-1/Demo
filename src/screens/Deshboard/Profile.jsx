import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert, SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS } from '../../Styles/colors'
import Icon from 'react-native-vector-icons/Entypo'; 
import HeaderComp from '../../component/HeaderComp';
import navigationString from '../../route/navigationString';
const Profile = ({navigation}) => {
    const menuItems = [
        'My Profile',
        'Invoices',
        'Kids',
        'About Us',
        'Terms & Conditions',
        'Logout',
        'Close Account'
      ];
       
      const handlePress = (item) => {
        if (item === 'Logout') {
          Alert.alert(
            'Logout',
            'Do you really want to logout?',
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {
                text: 'Yes',
                onPress: () => {
                  // Navigate to Login screen
                  navigation.navigate(navigationString.LOGIN);
                },
              },
            ],
            { cancelable: true }
          );
        }else {
          // Later you can navigate to another screen here
          console.log('Pressed:', item);
        }
        if(item==='Invoices'){
            console.log(navigationString.MYRECURRING)
            // navigation.navigate(navigationString.MYRECURRING) 
        }
      }

      const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.menuItem} onPress={() => handlePress(item)}>
          <Text style={styles.menuText}>{item}</Text>
          <Icon name="chevron-right" size={20} color="#aaa" />
        </TouchableOpacity>
      );
  return (
    <SafeAreaView style={{flex:1}}>
    <HeaderComp title={'My Profile'} bell={true}/>
     <View style={styles.container}>
          <FlatList 
            data={menuItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.listContent}
          />
          <View style={styles.versionContainer}>
            <Text style={styles.versionText}>Version 1.0 (1.03)</Text>
          </View>
        </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  menuText: {
    fontSize: 16,
    color: 'black',
  },
  versionContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  versionText: {
    color: '#999',
    fontSize: 14,
  }
})