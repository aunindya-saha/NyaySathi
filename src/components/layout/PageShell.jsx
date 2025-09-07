import React from 'react';
import { clsx } from 'clsx';

export const PageShell = ({ children, className }) => {
  return (
    <div className={clsx('min-h-screen bg-background', className)}>
      {children}
    </div>
  );
};

export default PageShell;
