import React from 'react';
import { rs } from '../layout';
import { useWindowDimensions } from 'react-native';

const useResponsiveScale = (scaleSize: number): number => {
  if (!scaleSize) {
    throw new Error(
      'for using useResponsiveScale should pass scaleSize as argument.'
    );
  }
  const { width, height } = useWindowDimensions();

  const [fontSize, setFontSize] = React.useState<number>(() =>
    rs(scaleSize, width, height)
  );

  React.useEffect(() => {
    const newSize = rs(scaleSize, width, height);
    setFontSize(newSize);
  }, [width, height, scaleSize]);

  return fontSize;
};

export { useResponsiveScale, useResponsiveScale as useRS };
