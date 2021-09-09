/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import questionmark from '../assets/questionmark.jpg';

const ForgotPassword = props => {
  return (
    <View style={{flex: 1}}>
      <Image
        source={questionmark}
        resizeMode="cover"
        style={{height: '100%', width: '100%'}}
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
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email here"
              placeholderTextColor="#f5f5f5"
            />
          </View>
          <View style={{padding: 15, marginVertical: 20}}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('resetPassword')}
              style={styles.btn}>
              <Text style={styles.btnText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default ForgotPassword;
