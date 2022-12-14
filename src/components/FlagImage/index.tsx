import React, { Suspense } from 'react';
import { Image } from 'react-native';
import importImage from '../../helpers/importImage';

export const FlagImage = ({ flagCode }: { flagCode: string }) => {
  return (
    <Suspense fallback={null}>
      <Image source={importImage(flagCode || '')} />
    </Suspense>
  );
};
