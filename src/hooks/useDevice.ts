import { useContext } from 'react';
import type { ContextProps } from '../types';
import { FRContext } from '../context/FRProvider';

export const useDevice = () => {
  const deviceContext = useContext<ContextProps | undefined>(FRContext);
  if (!deviceContext) {
    throw new Error(
      'the device context is not found, please use FRProvider in your root component'
    );
  }
  return deviceContext;
};
