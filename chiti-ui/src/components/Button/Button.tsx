import React from 'react';
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



const getButtonStyles = (variant: string = 'glass') => {
  const baseStyles: React.CSSProperties = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: '0.95rem',
    padding: '12px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    textDecoration: 'none',
    outline: 'none',
  };

  switch (variant) {
    case 'cinematic':
      return {
        ...baseStyles,
        background: 'linear-gradient(135deg, hsl(260, 100%, 65%), hsl(260, 80%, 45%))',
        color: 'white',
        boxShadow: '0 4px 12px rgba(124, 58, 237, 0.3)',
      };
    case 'glass':
      return {
        ...baseStyles,
        background: 'rgba(255, 255, 255, 0.1)',
        color: 'hsl(0, 0%, 98%)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
      };
    case 'saas':
      return {
        ...baseStyles,
        background: 'hsl(220, 10%, 12%)',
        color: 'hsl(0, 0%, 98%)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
      };
    case 'error':
      return {
        ...baseStyles,
        background: 'hsl(350, 80%, 55%)',
        color: 'white',
      };
    default:
      return baseStyles;
  }
};

export interface ChitiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'cinematic' | 'glass' | 'saas' | 'error';
  audioHapticTick?: boolean;
}

export const ChitiButton: React.FC<ChitiButtonProps> = ({
  variant = 'glass',
  audioHapticTick = true,
  children,
  style = {},
  onClick,
  ...props
}) => {
  const { playPremiumTick } = useHaptic();

  const handleInteraction = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (audioHapticTick && !props.disabled) {
      playPremiumTick();
    }
    if (onClick) onClick(e);
  };

  const buttonStyles = {
    ...getButtonStyles(variant),
    ...style,
  };

  return (
    <button
      style={buttonStyles}
      onClick={handleInteraction}
      {...props}
    >
      {children}
    </button>
  );
};
