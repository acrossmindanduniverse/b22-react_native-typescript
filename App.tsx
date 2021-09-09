import React from 'react';
import SignIn from './src/screens/SignIn';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthGoBack} from './src/components/GoBack';
import SignUp from './src/screens/SignUp';
import ForgotPassword from './src/screens/ForgotPassword';
import ResetPassword from './src/screens/ResetPassword';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerTransparent: true, header: AuthGoBack}}
          name="signIn"
          component={SignIn}
        />
        <Stack.Screen
          options={{headerTransparent: true, header: AuthGoBack}}
          name="signUp"
          component={SignUp}
        />
        <Stack.Screen
          options={{headerTransparent: true, header: AuthGoBack}}
          name="forgotPassword"
          component={ForgotPassword}
        />
        <Stack.Screen
          options={{headerTransparent: true, header: AuthGoBack}}
          name="resetPassword"
          component={ResetPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
