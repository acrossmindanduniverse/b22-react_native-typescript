/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import questionmark from '../assets/questionmark.jpg';
import {TRootStore} from '../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {
  authToggleFunc,
  forgotPassword,
  IForgotPassword,
} from '../redux/actions/users';

const ForgotPassword = (props: any) => {
  const dispatch = useDispatch();
  const {errorForgotPassword, forgotToggle} = useSelector(
    (state: TRootStore) => state.users,
  );
  const [customAlert, setCustomAlert] = React.useState(false);
  const [input, setInput] = React.useState({
    email: '',
  });

  const handleSendEmail = (args: IForgotPassword) => {
    dispatch(forgotPassword(args));
  };

  React.useEffect(() => {
    if (forgotToggle) {
      setCustomAlert(true);
      dispatch(authToggleFunc());
    }
  }, [forgotToggle]);

  React.useEffect(() => {
    if (customAlert) {
      setTimeout(() => {
        setCustomAlert(false);
        props.navigation.navigate('resetPassword');
      }, 500);
    }
  }, [customAlert]);

  React.useEffect(() => {
    if (input.email === '') {
      setTimeout(() => {
        dispatch(authToggleFunc());
      }, 1000);
    }
  }, [errorForgotPassword, input]);

  return (
    <View style={{flex: 1}}>
      <Image
        source={questionmark}
        resizeMode="cover"
        style={{height: '100%', width: '100%'}}
      />
      {forgotToggle && (
        <View style={{height: 40}}>
          <View
            style={{
              backgroundColor: '#000000a0',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.forgotToggleText}>
              reset code has been sent to email
            </Text>
          </View>
        </View>
      )}
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
          <View style={{height: 40}}>
            {errorForgotPassword !== '' && (
              <View
                style={{
                  backgroundColor: '#000000a0',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={styles.errMsg}>{errorForgotPassword}</Text>
              </View>
            )}
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              onChangeText={val =>
                setInput({
                  ...input,
                  email: val,
                })
              }
              style={styles.textInput}
              placeholder="Enter your email here"
              placeholderTextColor="#f5f5f5"
            />
          </View>
          <View style={{padding: 15, marginVertical: 20}}>
            <TouchableOpacity
              onPress={() => handleSendEmail(input)}
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
  errMsg: {
    fontFamily: 'Poppins-Light',
    fontSize: 18,
    color: 'red',
  },
  forgotToggleText: {
    fontFamily: 'Poppins-Light',
    fontSize: 18,
    color: '#f5f5f5',
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
});

export default ForgotPassword;
