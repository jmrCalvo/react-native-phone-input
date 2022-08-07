import { render } from '@testing-library/react-native';
import React from 'react';
import { Image } from 'react-native';
import { FlagImage } from '..';

describe('flag image', () => {
  test('not show a correctImage', () => {
    const screen = render(<FlagImage flagCode={''} />);
    expect(screen.UNSAFE_getByType(Image).props).not.toBeFalsy();
    expect(screen.UNSAFE_getByType(Image).props.source.testUri).toContain(
      'unknown'
    );
  });

  test('show a flag', () => {
    const screen = render(<FlagImage flagCode={'es'} />);
    expect(screen.UNSAFE_getByType(Image).props).not.toBeFalsy();
    expect(screen.UNSAFE_getByType(Image).props.source.testUri).toContain('es');
  });
});
