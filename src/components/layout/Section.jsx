import React from 'react';
import { clsx } from 'clsx';

export const Section = ({ 
  children, 
  className, 
  variant = 'default',
  containerSize = 'default'
}) => {
  const variants = {
    default: 'py-section',
    hero: 'py-section bg-gradient-hero',
    accent: 'py-section bg-gray-50',
    dark: 'py-section bg-gray-900 text-white',
  };

  const containerSizes = {
    default: 'container-custom',
    full: 'w-full px-4',
    narrow: 'max-w-4xl mx-auto px-4',
  };

  return (
    <section className={clsx(variants[variant], className)}>
      <div className={clsx(containerSizes[containerSize])}>
        {children}
      </div>
    </section>
  );
};

export default Section;
