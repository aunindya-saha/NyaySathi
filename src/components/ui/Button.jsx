import React from 'react';
import { clsx } from 'clsx';

export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus-ring disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none transform active:scale-95';
  
  const variants = {
    primary: 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl hover:scale-105',
    secondary: 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl hover:scale-105',
    outline: 'border-2 border-emerald-500 text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-emerald-600 hover:text-white hover:border-emerald-600 bg-white/80 backdrop-blur-sm hover:scale-105 transition-all duration-300',
    ghost: 'text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-emerald-100 hover:scale-105',
    danger: 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl hover:scale-105',
    accent: 'bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white shadow-lg hover:shadow-xl hover:scale-105',
    vibrant1: 'gradient-button-1 text-white hover:scale-105 hover:shadow-2xl',
    vibrant2: 'gradient-button-2 text-white hover:scale-105 hover:shadow-2xl',
    vibrant3: 'gradient-button-3 text-white hover:scale-105 hover:shadow-2xl',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5',
    xl: 'px-10 py-5 text-xl gap-3',
  };

  return (
    <button
      className={clsx(
        baseStyles, 
        variants[variant], 
        sizes[size], 
        disabled && 'hover:scale-100 hover:shadow-lg',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
