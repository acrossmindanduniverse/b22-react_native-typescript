/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import defaultPicture from '../assets/defaultPicture.png';
import {useSelector, useDispatch} from 'react-redux';
import {signOut} from '../redux/actions/users';
import {TRootStore} from '../redux/store';

const Home = () => {
  const {userData}: any = useSelector((state: TRootStore) => state.users);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
    AsyncStorage.removeItem('persist:users');
  };

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          backgroundColor: '#000000a0',
          height: '100%',
          padding: 65,
          justifyContent: 'center',
        }}>
        <View style={styles.userParent}>
          <Image
            source={defaultPicture}
            resizeMode="cover"
            style={{
              width: 120,
              height: 120,
              borderRadius: 120 / 2,
            }}
          />
          <View style={styles.infoParent}>
            <Text style={styles.primaryText}>{userData?.email}</Text>
            <Text style={styles.primaryText}>{userData?.fullname}</Text>
          </View>
        </View>
        <View style={{padding: 90}}>
          <TouchableOpacity onPress={handleSignOut} style={styles.signOutBtn}>
            <Text style={styles.signOutText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userParent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoParent: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryText: {
    fontSize: 35,
    fontFamily: 'Poppins-Light',
  },
  signOutBtn: {
    borderRadius: 15,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderColor: '#ffb3e7',
    borderWidth: 1,
  },
  signOutText: {
    fontSize: 18,
    color: '#ffb3e7',
    fontFamily: 'Poppins-Medium',
  },
});

export default Home;
