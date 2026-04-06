import React from 'react';

/**
 * ChitiCard — Simple Card Component
 *
 * Clean, modern card with optional tilt effect.
 *
 * Usage:
 *   <ChitiCard tilt>
 *     <h3>Monthly Revenue</h3>
 *     <p>$48,200</p>
 *   </ChitiCard>
 */

export interface ChitiCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  tilt?: boolean;
}

const getCardStyles = (tilt: boolean = false): React.CSSProperties => ({
  background: 'hsl(220, 10%, 8%)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: '12px',
  padding: '24px',
  position: 'relative',
  overflow: 'hidden',
  transition: tilt ? 'transform 0.3s ease' : 'none',
  cursor: tilt ? 'default' : 'default',
});

export const ChitiCard: React.FC<ChitiCardProps> = ({
  children,
  tilt = false,
  style = {},
  ...props
}) => {
  const cardStyles = {
    ...getCardStyles(tilt),
    ...style,
  };

  return (
    <div
      style={cardStyles}
      {...props}
    >
      {children}
    </div>
  );
};
