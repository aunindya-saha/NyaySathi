import React from 'react';
import { clsx } from 'clsx';

export const Card = ({ 
  children, 
  className, 
  hover = true, 
  variant = 'default',
  padding = 'default'
}) => {
  const variants = {
    default: 'bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg',
    elevated: 'gradient-card border-0 shadow-xl',
    outline: 'border-2 bg-white/90 backdrop-blur-sm shadow-md',
    ghost: 'bg-transparent border-0',
    glass: 'glass-effect shadow-xl',
    gradient1: 'bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 shadow-lg',
    gradient2: 'bg-gradient-to-br from-purple-50 to-pink-100 border border-purple-200 shadow-lg',
    gradient3: 'bg-gradient-to-br from-emerald-50 to-teal-100 border border-emerald-200 shadow-lg',
    gradient4: 'bg-gradient-to-br from-amber-50 to-orange-100 border border-amber-200 shadow-lg',
  };

  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8',
  };

  return (
    <div className={clsx(
      'rounded-2xl transition-all duration-300',
      variants[variant],
      paddings[padding],
      hover && 'hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1',
      className
    )}>
      {children}
    </div>
  );
};
