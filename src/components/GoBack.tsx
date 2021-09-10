/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const AuthGoBack = (props: any) => {
  return (
    <View
      style={{
        padding: 55,
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}>
      {props.route.name !== 'signIn' && (
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Entypo color="#ffb3e7" size={35} name="chevron-left" />
        </TouchableOpacity>
      )}
      {props.route.name === 'signIn' && (
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            width: '100%',
          }}>
          <TouchableOpacity onPress={() => props.navigation.navigate('signUp')}>
            <Text
              style={{
                fontSize: 20,
                color: '#ffb3e7',
                fontFamily: 'Poppins-Medium',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

// export const
