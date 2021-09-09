/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export const Spinner = () => {
  return (
    // <View style={styles.parent}>
    <View style={styles.successBg}>
      <ActivityIndicator size="large" color="#fff" />
    </View>
    // </View>
  );
};

export const CustomAlert = ({text}) => {
  return (
    <View style={styles.successBg}>
      <View style={styles.textContainer}>
        <Icon
          style={{marginHorizontal: 5}}
          name="check"
          color="#fff"
          size={35}
        />
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  successBg: {
    width: '100%',
    backgroundColor: '#000000a0',
    position: 'absolute',
    justifyContent: 'center',
    height: '100%',
    paddingHorizontal: 30,
    zIndex: 1,
  },
  textContainer: {
    backgroundColor: '#ffb3e7',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#fff',
  },
});
