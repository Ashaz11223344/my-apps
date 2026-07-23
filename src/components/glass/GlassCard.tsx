import React from 'react';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'elevated' | 'inset' | 'card';
  hover?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  variant = 'card',
  hover = true,
  ...props
}) => {
  const baseClass = 
    variant === 'elevated' ? 'glass-elevated' :
    variant === 'inset' ? 'glass-inset' :
    'glass-card';

  const hoverClass = hover ? 'hover:scale-[1.02] cursor-pointer' : '';

  return (
    <div
      className={`${baseClass} ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
