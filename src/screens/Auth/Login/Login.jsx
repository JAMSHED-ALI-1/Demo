


import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../../Styles/colors';
import TextinputComp from '../../../component/TextinputComp';
import ButtonComp from '../../../component/ButtonComp';
import TextCompo from '../../../component/TextCompo';
import navigationString from '../../../route/navigationString';

const Login = ({navigation}) => {
  const [timeLeft, setTimeLeft] = React.useState(90);


  React.useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);


  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Image source={require('../../../assets/ApexLogo.png')} resizeMode="contain" />
      </View>
      <View style={styles.lowerContainer}>
        <TextCompo style={styles.normalText}>Phone Number</TextCompo>
        <View style={styles.phoneInputContainer}>
          <TouchableOpacity style={styles.countryCode}>
            <Text style={styles.countryCodeText}>+91</Text>
          </TouchableOpacity>
          <View style={styles.phoneInputWrapper}>
            <TextinputComp
              placeholder="Enter your phone number"
              keyboardType="numeric"
              autoCapitalize="none"
              autoCorrect={false}
              maxLength={10}
              returnKeyType="done"
            />
          </View>
        </View>

        <TextCompo style={styles.text}>Enter the OTP Shared on</TextCompo>
<View style={styles.bottom}>
  <View style={{alignItems:'center',width:'100%'}}>

<ButtonComp title="Login" />
        <TextCompo style={{...styles.timerText,color:COLORS.RED}}>{timeLeft}</TextCompo>

        <TouchableOpacity onPress={() => setTimeLeft(90)}>
          <TextCompo style={styles.linkText}>Didn’t get an OTP? Resend</TextCompo>
        </TouchableOpacity>
  </View>
        <TouchableOpacity onPress={() => navigation.navigate(navigationString.SIGNUP)}>
          <TextCompo style={styles.linkText}>Don’t have an account? Signup</TextCompo>
        </TouchableOpacity>
</View>
       

      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
  },
  upperContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerContainer: {
    flex: 0.6,
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  normalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.BLACK,
    marginTop: 20,
  },
  phoneInputContainer: {
    backgroundColor: COLORS.GRAY,
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.GRAY,
    borderRadius: 10,
    marginTop: 10,
  },
  countryCode: {
    borderRightWidth: 1,
    borderColor: COLORS.BLACK,
    paddingRight: 10,
    paddingVertical: 10,
    marginRight: 10,
  },
  countryCodeText: {
    fontSize: 16,
    color: COLORS.BLACK,
  },
  phoneInputWrapper: {
    flex: 1,
  },
  text: {
    fontFamily: 'Montserrat',
    color: COLORS.BLACK,
    fontSize: 16,
    fontWeight: '400',
    marginTop: 25,
  },
  timerText: {
    fontSize: 16,
    color: COLORS.BLACK,
    fontWeight: '600',
    marginTop: 15,
  },
  linkText: {
    color: COLORS.BLACK,
    fontSize: 16,
    fontWeight: '500',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
  bottom:{
    // flexDirection: 'row',
    flex:1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  }
});
