import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Splash = ({retry,auth}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {
            auth===null?null:<TouchableOpacity
            style={{
              width: 160,
              height: 40,
              alignSelf: 'center',
              backgroundColor: 'aqua',
              borderRadius: 8,
            }}
            onPress={retry}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 16, fontWeight: '600', color: '#000'}}>
                Retry Biometric
              </Text>
            </View>
          </TouchableOpacity>
        }
      
    </View>
  );
};

export default Splash;
