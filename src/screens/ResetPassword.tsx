/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const ResetPassword = () => {
  return (
    <View style={{flex: 1}}>
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
              placeholderTextColor="#f5f5f5"
              placeholder="Code"
            />
          </View>
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
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholderTextColor="#f5f5f5"
              secureTextEntry={true}
              placeholder="Confirm Password"
            />
          </View>
          <View style={{padding: 15, marginVertical: 20}}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Go!</Text>
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

export default ResetPassword;
