/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {Suspense, useState} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  Image,
} from 'react-native';
import {FlagImage} from '../FlagImage';

interface FlagButton {
  flagSelectorStyle?: StyleProp<ViewStyle>;
  countrySelected: string;
  setModalVisible: (arg: boolean) => void;
}

export const FlagButton = ({
  flagSelectorStyle,
  countrySelected,
  setModalVisible,
}: FlagButton) => {
  return (
    <>
      <TouchableOpacity
        style={flagSelectorStyle}
        onPress={() => setModalVisible(true)}>
        <FlagImage flagCode={countrySelected} />
      </TouchableOpacity>
    </>
  );
};

export default FlagButton;
