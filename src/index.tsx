import React, {useState} from 'react';
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
} from 'react-native';
import FlagButton from './components/FlagButton';
import FlagModalSelector from './components/CountrySelector';
import countries from './data/countries.json';
import {PhoneTextInput} from './components/phoneTextInput';

interface PhoneInput {
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  placeholder?: string;
  returnKeyType?: ReturnKeyTypeOptions | undefined;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onChangeText?: (text: string) => void;
  placeholderTextColor?: ColorValue;
  textAlign?: 'left' | 'center' | 'right' | undefined;
  flagSelectorStyle?: StyleProp<ViewStyle>;
  defaultCountry?: string;
  errorStyle?: StyleProp<TextStyle>;
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
  errorStyle: {color: 'red', marginTop: 5},
});

const PhoneInput = ({
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
}: PhoneInput) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [countrySelected, setSelectedCountry] =
    useState<string>(defaultCountry);
  const [countryPhone, setcountryPhone] = useState(
    countries.find(country => country.flag === defaultCountry)?.dialing_code ||
      '',
  );
  const [error, setError] = useState('');

  const changeFlag = (code: string) => {
    setSelectedCountry(code);
    setcountryPhone(
      countries.find(country => country.flag === code)?.dialing_code + ' ' ||
        '',
    );
  };

  return (
    <>
      <FlagModalSelector
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setSelectedCountry={changeFlag}
      />
      <View style={[containerStyle, style.defaultView]}>
        <FlagButton
          flagSelectorStyle={flagSelectorStyle}
          defaultCountry={defaultCountry}
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
