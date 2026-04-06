import React from 'react';
import styles from './Button.module.css';
import { useHaptic } from '../../hooks/useHaptic';

/**
 * ChitiButton — Polymorphic Action Node
 *
 * Supports any HTML element or React component via the `as` prop.
 * This means the same visual Chiti Button style can be applied to
 * a native <button>, an <a> link, or a React Router <Link>.
 *
 * Usage:
 *   <ChitiButton>Submit</ChitiButton>
 *   <ChitiButton as="a" href="/dashboard">Go to Dashboard</ChitiButton>
 */

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = object
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

export type ChitiButtonOwnProps = {
  variant?: 'cinematic' | 'glass' | 'saas' | 'error';
  audioHapticTick?: boolean;
};

export type ChitiButtonProps<C extends React.ElementType = 'button'> =
  PolymorphicComponentProp<C, ChitiButtonOwnProps>;

export const ChitiButton = <C extends React.ElementType = 'button'>({
  as,
  variant = 'glass',
  audioHapticTick = true,
  children,
  className = '',
  onClick,
  ...props
}: ChitiButtonProps<C>) => {
  const { playPremiumTick } = useHaptic();
  const Component = as || 'button';

  const handleInteraction = (e: React.MouseEvent<Element>) => {
    if (audioHapticTick && !(props as { disabled?: boolean }).disabled) {
      playPremiumTick();
    }
    if (onClick) (onClick as React.MouseEventHandler<Element>)(e);
  };

  const variantClass = styles[`btn_${variant}`] || '';

  return (
    <Component
      className={`${styles.btn} ${variantClass} ${className}`}
      onClick={handleInteraction}
      {...props}
    >
      {children}
    </Component>
  );
};
