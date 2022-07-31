/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, SafeAreaView} from 'react-native';
import PhoneInput from './src';

const App = () => {
  return (
    <SafeAreaView
      style={{
        height: Dimensions.get('screen').height,
        justifyContent: 'center',
        marginHorizontal: 10,
      }}>
      <PhoneInput
        containerStyle={{
          marginTop: 10,
          borderWidth: 1,
          borderRadius: 3,
        }}
        inputStyle={{
          height: 35,

          padding: 10,
        }}
        placeholder="Phone number..."
        returnKeyType="done"
      />

      <PhoneInput
        containerStyle={{
          marginTop: 10,
          borderRadius: 3,
        }}
        inputStyle={{
          height: 35,
          borderWidth: 1,
          width: Dimensions.get('screen').width * 0.8,
          padding: 24,
          marginLeft: 10,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
          borderColor: '#42adff',
        }}
        flagSelectorStyle={{
          backgroundColor: '#42adff',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          width: 50,
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
        }}
        placeholder="Phone number..."
        returnKeyType="done"
      />
    </SafeAreaView>
  );
};

export default App;
