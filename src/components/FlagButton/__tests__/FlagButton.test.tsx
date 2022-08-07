import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';
import { FlagButton } from '..';

describe('flag button', () => {
  test('click on image', () => {
    const showModal = jest.fn();
    const screen = render(
      <FlagButton countrySelected={''} setModalVisible={showModal} />
    );
    fireEvent(screen.UNSAFE_getByType(View), 'onClick');
    expect(showModal).toBeCalled();
  });
});
