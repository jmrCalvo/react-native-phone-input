import React from 'react';
import {
  ColorValue,
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  StyleProp,
  TextInput,
  TextInputChangeEventData,
  TextInputFocusEventData,
  ViewStyle,
} from 'react-native';
import { phoneValidator } from '../../utils/flagValidator';
import countries from '../../data/countries.json';

interface PhoneTextInput {
  inputStyle?: StyleProp<ViewStyle>;
  placeholder?: string;
  returnKeyType?: ReturnKeyTypeOptions | undefined;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onChangeText?: (text: string) => void;
  placeholderTextColor?: ColorValue;
  textAlign?: 'left' | 'center' | 'right' | undefined;
  countryPhone: string;
  setcountryPhone: (phone: string) => void;
  setSelectedCountry: (code: string) => void;
  setError: (error: string) => void;
  countrySelected: string;
}

export const PhoneTextInput = ({
  inputStyle,
  placeholder,
  returnKeyType,
  onBlur,
  onFocus,
  onChangeText,
  placeholderTextColor,
  textAlign,
  countryPhone,
  setcountryPhone,
  setSelectedCountry,
  setError,
  countrySelected,
}: PhoneTextInput) => {
  const onChangecountryPhone = (phone: string) => {
    phone = phone.replace(/[^\d.+ ]/g, '');

    const possibleCountrie = countries.filter((country) => {
      return phone
        .replace('+', '')
        .replace('00', '')
        .startsWith(country.dialing_code.replace('+', ''));
    });
    setSelectedCountry(possibleCountrie[0]?.flag || '');
    setcountryPhone(phone);
    onChangeText && onChangeText(phone);
  };

  const onBlurPhone = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const possibleCountrie = countries.filter((country) => {
      return countryPhone.startsWith(country.dialing_code);
    });

    if (
      !phoneValidator({
        number: countryPhone
          .replace(possibleCountrie[0]?.dialing_code || '', '')
          .trim(),
        countryCode: possibleCountrie[0]?.flag || '',
      })
    ) {
      setError('err.not.valid.phone');
      setcountryPhone(
        countries.find((country) => country.flag === countrySelected)
          ?.dialing_code || ''
      );
    }

    onBlur && onBlur(e);
  };

  const onFocusPhone = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setError('');
    onFocus && onFocus(e);
  };

  return (
    <TextInput
      style={inputStyle}
      placeholder={placeholder}
      keyboardType="phone-pad"
      returnKeyType={returnKeyType}
      onBlur={onBlurPhone}
      onFocus={onFocusPhone}
      onChangeText={onChangecountryPhone}
      placeholderTextColor={placeholderTextColor}
      textAlign={textAlign}
      value={countryPhone}
    />
  );
};

export default PhoneTextInput;
