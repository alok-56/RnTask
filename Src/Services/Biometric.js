import ReactNativeBiometrics from 'react-native-biometrics';

const rnBiometrics = new ReactNativeBiometrics();

export const checkBiometricsAvailability = async () => {
  try {
    const resultObject = await rnBiometrics.isSensorAvailable();
    const {available, biometryType} = resultObject;
    return {available, biometryType};
  } catch (error) {
    console.log('Error checking biometrics availability:', error);
  }
};

export const authenticateWithBiometrics = async () => {
  try {
    const resultObject = await rnBiometrics.simplePrompt({
      promptMessage: 'Confirm fingerprint',
    });
    const {success} = resultObject;
    return success;
  } catch (error) {
    console.log('Biometrics authentication failed:', error);
  }
};
