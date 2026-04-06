import React, { useRef, MouseEvent, createContext, useContext } from 'react';
import styles from './ChitiCard.module.css';

/**
 * ChitiCard — Compound Component (Slot Pattern)
 *
 * Use ChitiCard.Header, ChitiCard.Body, ChitiCard.Footer
 * to assemble any geometric layout without prop-drilling.
 *
 * Usage:
 *   <ChitiCard tilt>
 *     <ChitiCard.Header>Monthly Revenue</ChitiCard.Header>
 *     <ChitiCard.Body>$48,200</ChitiCard.Body>
 *     <ChitiCard.Footer>↑ 12.4% vs last month</ChitiCard.Footer>
 *   </ChitiCard>
 */

// Internal context so sub-components know their parent's tilt state
interface CardContext {
  tilt: boolean;
}
const ChitiCardContext = createContext<CardContext>({ tilt: false });

// --- Sub-Components ---

interface SlotProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Header: React.FC<SlotProps> = ({ children, className = '', ...props }) => (
  <div className={`${styles.cardHeader} ${className}`} {...props}>
    {children}
  </div>
);

const Body: React.FC<SlotProps> = ({ children, className = '', ...props }) => (
  <div className={`${styles.cardBody} ${className}`} {...props}>
    {children}
  </div>
);

const Footer: React.FC<SlotProps> = ({ children, className = '', ...props }) => (
  <div className={`${styles.cardFooter} ${className}`} {...props}>
    {children}
  </div>
);

// --- Main Card Component ---

export interface ChitiCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  tilt?: boolean;
}

type ChitiCardComposite = React.FC<ChitiCardProps> & {
  Header: typeof Header;
  Body: typeof Body;
  Footer: typeof Footer;
};

const ChitiCardBase: React.FC<ChitiCardProps> = ({
  children,
  tilt = false,
  className = '',
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!tilt || !cardRef.current || !spotlightRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    spotlightRef.current.style.left = `${x}px`;
    spotlightRef.current.style.top = `${y}px`;

    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -5;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 5;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!tilt || !cardRef.current || !spotlightRef.current) return;
    cardRef.current.style.transform = 'none';
    spotlightRef.current.style.opacity = '0';
  };

  const handleMouseEnter = () => {
    if (!tilt || !spotlightRef.current) return;
    spotlightRef.current.style.opacity = '1';
  };

  return (
    <ChitiCardContext.Provider value={{ tilt }}>
      <div
        ref={cardRef}
        className={`${styles.card} ${tilt ? styles.card_tiltable : ''} ${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        {...props}
      >
        {tilt && <div ref={spotlightRef} className={styles.spotlight} />}
        <div className={tilt ? styles.content_elevated : styles.content}>
          {children}
        </div>
      </div>
    </ChitiCardContext.Provider>
  );
};

// Attach sub-components to main component
export const ChitiCard = ChitiCardBase as ChitiCardComposite;
ChitiCard.Header = Header;
ChitiCard.Body = Body;
ChitiCard.Footer = Footer;

// Export context hook for advanced use-cases
export const useChitiCard = () => useContext(ChitiCardContext);
