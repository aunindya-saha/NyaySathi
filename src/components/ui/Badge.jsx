import React from 'react';
import { clsx } from 'clsx';

export const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'md',
  className 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full focus-ring';
  
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary',
    accent: 'bg-accent/10 text-accent',
    success: 'bg-emerald-100 text-emerald-800',
    warning: 'bg-amber-100 text-amber-800',
    error: 'bg-red-100 text-red-800',
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <span
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
    >
      {children}
    </span>
  );
};
