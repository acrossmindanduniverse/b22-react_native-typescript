/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {TRootStore} from '../redux/store';
import {
  IResetPassword,
  resetPassword,
  authToggleFunc,
} from '../redux/actions/users';
import {Spinner, CustomAlert} from './../components/SuccesActions';

const ResetPassword = (props: any) => {
  const dispatch = useDispatch();
  const {errorResetPassword, resetToggle} = useSelector(
    (state: TRootStore) => state.users,
  );
  const [customAlert, setCustomAlert] = React.useState(false);
  const [spinner, setSpinner] = React.useState(false);
  const [input, setInput] = React.useState({
    reset_code: '',
    email: '',
    new_password: '',
    confirm_password: '',
  });

  const handleResetPassword = (args: IResetPassword) => {
    dispatch(resetPassword(args));
  };

  React.useEffect(() => {
    if (resetToggle) {
      dispatch(authToggleFunc());
      setSpinner(true);
    }
  }, [resetToggle]);

  React.useEffect(() => {
    if (spinner) {
      setTimeout(() => {
        setSpinner(false);
      }, 500);
      setTimeout(() => {
        setCustomAlert(true);
      }, 500);
    }
  }, [spinner, customAlert]);

  React.useEffect(() => {
    if (customAlert) {
      setTimeout(() => {
        setCustomAlert(false);
        props.navigation.navigate('signIn');
      }, 500);
    }
  }, [customAlert]);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          backgroundColor: '#000000a0',
          height: '100%',
        }}>
        <View style={{height: '100%', justifyContent: 'center'}}>
          {spinner && <Spinner />}
          {customAlert && <CustomAlert text="Reset Password Successfully" />}
          <View style={{padding: 65}}>
            <View style={{height: 40}}>
              {input.new_password.length < 8 && (
                <View
                  style={{
                    backgroundColor: '#000000a0',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={styles.errMsg}>
                    password must be 8 or greater
                  </Text>
                </View>
              )}
            </View>
            <View style={{height: 40}}>
              {input.new_password !== input.confirm_password && (
                <View
                  style={{
                    backgroundColor: '#000000a0',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={styles.errMsg}>password did not match</Text>
                </View>
              )}
            </View>
            <View style={{height: 40}}>
              {errorResetPassword !== '' && (
                <View
                  style={{
                    backgroundColor: '#000000a0',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={styles.errMsg}>{errorResetPassword}</Text>
                </View>
              )}
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                onChangeText={val =>
                  setInput({
                    ...input,
                    reset_code: val,
                  })
                }
                style={styles.textInput}
                placeholderTextColor="#f5f5f5"
                placeholder="Code"
              />
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
                placeholderTextColor="#f5f5f5"
                placeholder="Email"
              />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                onChangeText={val =>
                  setInput({
                    ...input,
                    new_password: val,
                  })
                }
                style={styles.textInput}
                placeholderTextColor="#f5f5f5"
                secureTextEntry={true}
                placeholder="Password"
              />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                onChangeText={val =>
                  setInput({
                    ...input,
                    confirm_password: val,
                  })
                }
                style={styles.textInput}
                placeholderTextColor="#f5f5f5"
                secureTextEntry={true}
                placeholder="Confirm Password"
              />
            </View>
            <View style={{padding: 15, marginVertical: 20}}>
              {input.new_password !== input.confirm_password ||
              input.new_password.length < 8 ? (
                <View style={styles.btn2}>
                  <Text style={styles.btnText}>Go!</Text>
                </View>
              ) : (
                <TouchableOpacity
                  onPress={() => handleResetPassword(input)}
                  style={styles.btn}>
                  <Text style={styles.btnText}>Go!</Text>
                </TouchableOpacity>
              )}
            </View>
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
  btn2: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    opacity: 0.5,
    alignItems: 'center',
  },
  btnText: {
    color: '#ffb3e7',
    fontFamily: 'Poppins-Medium',
    fontSize: 35,
  },
});

export default ResetPassword;
