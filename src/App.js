import React, {useEffect, useState} from 'react';

import {
  ActivityIndicator,
  PermissionsAndroid,
  Platform,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {NotifierWrapper} from 'react-native-notifier';

import {Provider} from 'react-redux';

import setMaps from '../src/config/setMaps';
import {AuthContext} from './components/context';
import store from './redux/store';
import Router from './router';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(null);
  const authContext = React.useMemo(() => {
    signIn: () => {
      setToken('akjsajs');
      setIsLoading(false);
    };
    signUp: () => {
      setToken(null);
      setIsLoading(false);
    };
    signOut: () => {
      setToken('akjsajs');
      setIsLoading(false);
    };
  }, []);

  setMaps();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NotifierWrapper>
        <Provider store={store}>
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </Provider>
      </NotifierWrapper>
    </AuthContext.Provider>
  );
};

export default App;
