import React from 'react';
import { useMediaQuery } from '../hooks';
import type { DeviceType, MappedDeviceType } from '../types';
/**
 * A HOC for when you want to use full responsive methods in your class components without additional steps as props.
 */
const withMediaQuery = <T extends object>(
  Component: React.ComponentType<T>,
  thresholds?: Partial<MappedDeviceType>
) => {
  const displayName = Component.displayName || Component.name || 'Component';

  const ComponentWithMethods = (props: { type?: DeviceType }) => {
    const media = useMediaQuery(thresholds);
    return <Component {...(props as T)} type={media} />;
  };

  ComponentWithMethods.displayName = `withMediaQuery(${displayName})`;

  return ComponentWithMethods;
};

export { withMediaQuery, withMediaQuery as withMQ };
