import React from 'react';
import { DefaultBases } from '../constants';
import type { ContextProps, PropsWithChildren } from '../types';

export const FRContext = React.createContext<ContextProps | undefined>(
  undefined
);

export const FRProvider: React.FC<PropsWithChildren<Partial<ContextProps>>> = ({
  bases,
  children,
  type = 'sm',
}) => {
  const contextValue = React.useMemo(() => {
    const newContext = {
      type,
      bases: {
        ...DefaultBases,
        ...bases,
      },
    };
    return newContext;
  }, [type, bases]);

  return (
    <FRContext.Provider value={contextValue}>{children}</FRContext.Provider>
  );
};
