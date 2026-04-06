import React from 'react';

export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
  className?: string;
}

const getSkeletonStyles = (
  width: string | number,
  height: string | number,
  borderRadius: string
): React.CSSProperties => ({
  width: typeof width === 'number' ? `${width}px` : width,
  height: typeof height === 'number' ? `${height}px` : height,
  borderRadius,
  background: 'linear-gradient(90deg, hsl(220, 10%, 12%) 25%, hsl(220, 10%, 16%) 50%, hsl(220, 10%, 12%) 75%)',
  backgroundSize: '200% 100%',
  animation: 'skeleton-loading 1.5s infinite',
});

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '16px',
  borderRadius = '4px',
  className = ''
}) => {
  const skeletonStyles = getSkeletonStyles(width, height, borderRadius);

  return (
    <div
      className={className}
      style={skeletonStyles}
      aria-label="Loading content"
      aria-busy="true"
    />
  );
};
