import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import BottomTab from './Src/Navigation/BottomTab';
import {NavigationContainer} from '@react-navigation/native';
import {
  authenticateWithBiometrics,
  checkBiometricsAvailability,
} from './Src/Services/Biometric';
import Splash from './Src/Screens/Splash';
import NetInfo from '@react-native-community/netinfo';
import NoNetwork from './Src/Components/NoNetwork';

const App = () => {
  const [authcheck, setAuthCheck] = useState(null);
  const [connected, setConnected] = useState(false);
  useEffect(() => {
    checkBiometrics();
    NetwordChcek();
  }, []);

  const NetwordChcek = () => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setConnected(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  };

  const checkBiometrics = async () => {
    try {
      const {available, biometryType} = await checkBiometricsAvailability();
      if (available) {
        let success = await authenticateWithBiometrics();
        if (success) {
          Alert.alert('Authentication successful');
          setAuthCheck(true);
        } else {
          setAuthCheck(false);
        }
      } else {
        setAuthCheck(true);
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <NavigationContainer>
      <>
        {connected ? (
          <>
            {authcheck ? (
              <BottomTab />
            ) : (
              <Splash retry={checkBiometrics} auth={authcheck}></Splash>
            )}
          </>
        ) : <NoNetwork></NoNetwork>}
      </>
    </NavigationContainer>
  );
};

export default App;
