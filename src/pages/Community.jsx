import React from 'react';
import { Card } from '../components/ui/Card';

const Community = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          কমিউনিটি ফোরাম
        </h1>
        
        <Card>
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">শিগগিরই আসছে</h2>
            <p className="text-slate-600">কমিউনিটি ফোরাম শীঘ্রই যোগ করা হবে।</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Community;
