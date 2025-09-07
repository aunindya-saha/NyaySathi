import React from 'react';
import { clsx } from 'clsx';

export const Input = ({ 
  label, 
  error, 
  className,
  size = 'md',
  variant = 'default',
  id,
  ...props 
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-5 py-4 text-lg',
  };

  const variants = {
    default: 'border border-border bg-surface',
    filled: 'bg-gray-50 border border-gray-200',
    outline: 'border-2 border-primary/20 bg-surface',
  };

  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-text-primary">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={clsx(
          'w-full rounded-xl focus-ring font-bangla',
          'placeholder:text-text-secondary/60 transition-all duration-200',
          sizes[size],
          variants[variant],
          error 
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
            : 'focus:border-primary focus:ring-primary/20',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600 font-medium">{error}</p>
      )}
    </div>
  );
};
