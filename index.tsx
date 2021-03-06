/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {Provider} from 'react-redux';
import reduxConfig from './src/redux/store';
import App from './App';
import {name as appName} from './app.json';

const redux = reduxConfig();

const Main = () => {
  return (
    <Provider store={redux.store}>
      <PersistGate persistor={redux.persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
