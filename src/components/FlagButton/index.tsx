import React from 'react';
import { TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { FlagImage } from '../FlagImage';

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
        onPress={() => setModalVisible(true)}
      >
        <FlagImage flagCode={countrySelected} />
      </TouchableOpacity>
    </>
  );
};

export default FlagButton;
