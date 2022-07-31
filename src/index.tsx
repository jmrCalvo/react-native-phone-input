import React, { useState } from 'react';
import {
  StyleProp,
  View,
  ViewStyle,
  ReturnKeyTypeOptions,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  ColorValue,
  StyleSheet,
  Text,
  TextStyle,
  Dimensions,
} from 'react-native';
import { FlagButton } from './components/FlagButton';
import { CountrySelector } from './components/CountrySelector';
import countries from './data/countries.json';
import { PhoneTextInput } from './components/PhoneTextInput';

interface PhoneInput {
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  placeholder?: string;
  returnKeyType?: ReturnKeyTypeOptions;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onChangeText?: (text: string) => void;
  placeholderTextColor?: ColorValue;
  textAlign?: 'left' | 'center' | 'right';
  flagSelectorStyle?: StyleProp<ViewStyle>;
  defaultCountry?: string;
  errorStyle?: StyleProp<TextStyle>;
  modalStyle?: ViewStyle;
}

const style = StyleSheet.create({
  defaultView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  defaulFlagStyle: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efecec',
    width: 50,
  },
  errorStyle: { color: 'red', marginTop: 5 },
  modalStyle: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: Dimensions.get('screen').height * 0.8,
    width: Dimensions.get('screen').width * 0.8,
    top: Dimensions.get('screen').height * 0.1,
    left: Dimensions.get('screen').width * 0.1,
  },
});

export const PhoneInput = ({
  containerStyle = style.defaultView,
  inputStyle,
  placeholder,
  returnKeyType,
  onBlur,
  onFocus,
  onChangeText,
  placeholderTextColor,
  textAlign,
  flagSelectorStyle = style.defaulFlagStyle,
  defaultCountry = 'us',
  errorStyle = style.errorStyle,
  modalStyle = style.modalStyle,
}: PhoneInput) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [countrySelected, setSelectedCountry] =
    useState<string>(defaultCountry);
  const [countryPhone, setcountryPhone] = useState(
    countries.find((country) => country.flag === defaultCountry)
      ?.dialing_code || ''
  );
  const [error, setError] = useState('');

  const changeFlag = (code: string) => {
    setSelectedCountry(code);
    setcountryPhone(
      countries.find((country) => country.flag === code)?.dialing_code + ' ' ||
        ''
    );
  };

  return (
    <>
      <CountrySelector
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setSelectedCountry={changeFlag}
        modalStyle={modalStyle}
      />
      <View style={[containerStyle, style.defaultView]}>
        <FlagButton
          flagSelectorStyle={flagSelectorStyle}
          setModalVisible={setModalVisible}
          countrySelected={countrySelected}
        />
        <PhoneTextInput
          inputStyle={inputStyle}
          placeholder={placeholder}
          returnKeyType={returnKeyType}
          onBlur={onBlur}
          onFocus={onFocus}
          onChangeText={onChangeText}
          placeholderTextColor={placeholderTextColor}
          textAlign={textAlign}
          countryPhone={countryPhone}
          setcountryPhone={setcountryPhone}
          setSelectedCountry={setSelectedCountry}
          setError={setError}
          countrySelected={countrySelected}
        />
      </View>
      {error && <Text style={errorStyle}>{error}</Text>}
    </>
  );
};

export default PhoneInput;
