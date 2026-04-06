import React, { InputHTMLAttributes } from 'react';

export interface ChitiInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Enables the destructive red border mapping to error states */
  error?: boolean;
}

export const ChitiInput: React.FC<ChitiInputProps> = ({ error, className, ...props }) => {
  return (
    <input 
      className={`c-input ${error ? 'error' : ''} ${className || ''}`}
      {...props}
    />
  );
};
