/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import cheetah from '../assets/cheetah.png';

const SignIn = props => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Image
        source={cheetah}
        style={{height: '100%', width: '100%'}}
        resizeMode="cover"
      />
      <View
        style={{
          position: 'absolute',
          width: '100%',
          backgroundColor: '#000000a0',
          height: '100%',
          padding: 65,
          justifyContent: 'center',
        }}>
        <View>
          <View style={styles.signInTextContainer}>
            <Text style={styles.signInText}>Sign In</Text>
            <Text style={styles.why}>
              You can try the application without signning in or signning up,
              but why would you do that, boy?
            </Text>
          </View>
          <View style={{paddingVertical: 20}}>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#f5f5f5"
                placeholder="Email"
              />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#f5f5f5"
                secureTextEntry={true}
                placeholder="Password"
              />
            </View>
            <View style={{padding: 15, marginVertical: 20}}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Go!</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('forgotPassword')}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: 25,
                }}>
                <Text style={styles.forgotPassword}>Forgot Password ?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signInTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
  },
  signInText: {
    fontFamily: 'Poppins-Medium',
    color: '#ffb3e7',
    fontSize: 80,
  },
  why: {
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
    marginTop: 30,
    color: '#f5f5f5',
    fontSize: 25,
  },
  textInputContainer: {
    padding: 12,
    borderBottomColor: '#f5f5f5',
    borderBottomWidth: 2,
  },
  textInput: {
    fontSize: 18,
    color: '#f5f5f5',
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
  btn: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  btnText: {
    color: '#ffb3e7',
    fontFamily: 'Poppins-Medium',
    fontSize: 35,
  },
  forgotPassword: {
    color: '#f5f5f5',
    fontSize: 25,
  },
});

export default SignIn;
