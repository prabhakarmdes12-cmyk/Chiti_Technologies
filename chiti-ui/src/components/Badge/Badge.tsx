import React, { HTMLAttributes } from 'react';

export interface ChitiBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'warn' | 'error';
}

export const ChitiBadge: React.FC<ChitiBadgeProps> = ({ variant = 'success', className, children, ...props }) => {
  return (
    <span 
      className={`c-badge ${variant} ${className || ''}`}
      {...props}
    >
      {children}
    </span>
  );
};
