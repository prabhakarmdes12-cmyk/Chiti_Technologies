import React, { InputHTMLAttributes } from 'react';

export interface ChitiToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Callback fired whenever the hardware toggle shifts states */
  onToggle?: (checked: boolean) => void;
}

export const ChitiToggle: React.FC<ChitiToggleProps> = ({ onToggle, className, onChange, ...props }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onToggle) onToggle(e.target.checked);
    if (onChange) onChange(e);
  };
  
  return (
    <input 
      type="checkbox"
      className={`c-toggle ${className || ''}`}
      onChange={handleChange}
      {...props}
    />
  );
};
