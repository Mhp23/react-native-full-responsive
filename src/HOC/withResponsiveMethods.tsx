import React from 'react';
import { useResponsiveMethods } from '../hooks';
import type { ResponsiveMethodsProps } from '../types';
/**
 * A HOC for when you want to use full responsive methods in your class components without additional steps as props.
 */
const withResponsiveMethods = <T extends object>(
  Component: React.ComponentType<T>
) => {
  const displayName = Component.displayName || Component.name || 'Component';

  const ComponentWithMethods = (
    props: Omit<T, keyof ResponsiveMethodsProps>
  ) => {
    const responsiveMethods = useResponsiveMethods();
    return <Component {...(props as T)} {...responsiveMethods} />;
  };

  ComponentWithMethods.displayName = `withResponsiveMethods(${displayName})`;

  return ComponentWithMethods;
};

export { withResponsiveMethods, withResponsiveMethods as withRM };
