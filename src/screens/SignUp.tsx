/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import validationSchema from '../helpers/validationSchema';
import tomcruise from '../assets/tom.jpg';
import {signUp, authToggleFunc, IAuthSignUp} from '../redux/actions/users';
import {useDispatch, useSelector} from 'react-redux';
import {Spinner, CustomAlert} from './../components/SuccesActions';
import {IRootStore} from '../redux/store';

const SignUp = (props: any) => {
  const dispatch = useDispatch();
  const {authToggle} = useSelector((state: IRootStore) => state.users);
  const [spinner, setSpinner] = React.useState(false);
  const [customAlert, setCustomAlert] = React.useState(false);

  const handleSignUp = (args: IAuthSignUp) => {
    dispatch(signUp(args));
  };

  React.useEffect(() => {
    if (authToggle) {
      dispatch(authToggleFunc());
      setSpinner(true);
    }
  }, [authToggle]);

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
      <Image
        source={tomcruise}
        style={{height: '100%', width: '100%'}}
        resizeMode="cover"
      />
      <View
        style={{
          position: 'absolute',
          width: '100%',
          backgroundColor: '#000000a0',
          height: '100%',
          justifyContent: 'center',
        }}>
        <Formik
          initialValues={{
            fullname: '',
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={val => handleSignUp(val)}>
          {({errors, handleChange, handleBlur, handleSubmit, values}) => (
            <View style={{height: '100%'}}>
              {spinner && <Spinner />}
              {customAlert && <CustomAlert text={'Sign Up Successfully'} />}
              <View style={{padding: 65}}>
                <View style={styles.signUpTextContainer}>
                  <Text style={styles.signUpText}>Sign Up</Text>
                  <Text style={styles.why}>
                    So, you're about to signning up now, boy?
                  </Text>
                  <Text style={styles.errorMessage}>{errors.email}</Text>
                  <Text style={styles.errorMessage}>{errors.password}</Text>
                </View>
                <View style={{paddingVertical: 20}}>
                  <View style={styles.textInputContainer}>
                    <TextInput
                      onChangeText={handleChange('fullname')}
                      onBlur={handleBlur('fullname')}
                      style={styles.textInput}
                      placeholderTextColor="#f5f5f5"
                      placeholder="Full Name"
                      value={values.fullname}
                    />
                  </View>
                  <View style={styles.textInputContainer}>
                    <TextInput
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      style={styles.textInput}
                      placeholderTextColor="#f5f5f5"
                      placeholder="Email"
                      value={values.email}
                    />
                  </View>
                  <View style={styles.textInputContainer}>
                    <TextInput
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      style={styles.textInput}
                      placeholderTextColor="#f5f5f5"
                      secureTextEntry={true}
                      placeholder="Password"
                      value={values.password}
                    />
                  </View>
                  <View style={{padding: 15, marginVertical: 20}}>
                    <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
                      <Text style={styles.btnText}>Go!</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
  },
  signUpText: {
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
  errorMessage: {
    fontSize: 20,
    color: 'red',
    fontFamily: 'Poppins-Light',
  },
});

export default SignUp;
