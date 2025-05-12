import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import TextinputComp from '../../../component/TextinputComp';
import TextCompo from '../../../component/TextCompo';
import { COLORS } from '../../../Styles/colors';
import ButtonComp from '../../../component/ButtonComp';
import navigationString from '../../../route/navigationString';

const Signup = ({navigation}) => {
    // console.log(navigation,'hgshjggsjhgdhjsgdhgshg')
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={require('../../../assets/ApexLogo.png')} // Replace with your logo path
          style={styles.logo}
         
          resizeMode="contain"
        />
        <Image
         source={require('../../../assets/Object.png')} // Replace with your image path
          style={styles.illustration}
          resizeMode="contain"
          
        />
      </View>

      <View style={styles.formContainer}>
        <TextCompo style={styles.label}>Full Name</TextCompo>
        <TextinputComp
       placeholder={'Enter your name'}/>

        <TextCompo style={styles.label}>Phone No.</TextCompo>
       <TextinputComp
       placeholder={'Enter your name'}/>

        <TextCompo style={styles.label}>OTP</TextCompo>
        <View style={styles.otpContainer}>
          {[...Array(6)].map((_, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
            />
          ))}
        </View>

       <View style={{alignItems:'center',width:'100%',marginTop:30}}>
       <ButtonComp title={'SignUp'} bgcolor={COLORS.GRAY}
        onPress={()=>navigation.navigate(navigationString.SIGNUPFORM)}/>
       </View>

        <Text style={styles.referralText}>Have a referral code ?</Text>
      </View>
    </ScrollView>
  );
};

export default Signup;
const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#000',
    },
    topSection: {
      backgroundColor: '#000',
      alignItems: 'center',
      paddingTop: 20,
    },
    logo: {
      width: 100,
      height: 80,
      marginBottom: 10,
    },
    illustration: {
      width: '100%',
      height: 200,
      backgroundColor:COLORS.WHITE
    },
    formContainer: {
      backgroundColor: '#000',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    //   flex:1,
      padding: 20,
      height:'100%',
    //   marginTop: -10,
    },
    label: {
      color: '#fff',
      fontSize: 16,
      marginTop: 15,
    },
    input: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 12,
      marginTop: 8,
      fontSize: 16,
    },
    otpContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    otpInput: {
      backgroundColor: '#000',
      color: '#fff',
      borderColor: '#fff',
      borderWidth: 1,
      width: 40,
      height: 50,
      textAlign: 'center',
      fontSize: 18,
      borderRadius: 5,
    },
    signupButton: {
      backgroundColor: '#fff',
      borderRadius: 10,
      marginTop: 25,
      paddingVertical: 15,
      alignItems: 'center',
    },
    signupText: {
      color: '#000',
      fontWeight: 'bold',
      fontSize: 16,
    },
    referralText: {
      color: '#aaa',
      textAlign: 'center',
      marginTop: 20,
    },
  });
  