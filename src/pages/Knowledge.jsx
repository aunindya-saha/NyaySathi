import React from 'react';
import { Card } from '../components/ui/Card';

const Knowledge = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-text-primary mb-8 text-center">
          আইন জানুন
        </h1>
        
        <Card>
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              শিগগিরই আসছে
            </h2>
            <p className="text-text-secondary">
              আইনি গাইড এবং তথ্যভিত্তিক কন্টেন্ট শীঘ্রই যোগ করা হবে।
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Knowledge;
