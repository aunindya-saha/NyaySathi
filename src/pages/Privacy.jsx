import React from 'react';
import { Card } from '../components/ui/Card';

const Privacy = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-text-primary mb-8 text-center">
          প্রাইভেসি পলিসি
        </h1>
        
        <Card>
          <div className="prose prose-lg max-w-none">
            <h2>তথ্য সংগ্রহ ও ব্যবহার</h2>
            <p>
              আমরা ব্যবহারকারীদের প্রয়োজনীয় সেবা প্রদানের জন্য সর্বনিম্ন তথ্য সংগ্রহ করি।
            </p>
            
            <h3>আমরা যে তথ্য সংগ্রহ করি</h3>
            <ul>
              <li>ব্যবহারের পরিসংখ্যান (অজ্ঞাতনামে)</li>
              <li>চ্যাটবটের সাথে কথোপকথনের ইতিহাস</li>
              <li>সেবা উন্নতির জন্য ফিডব্যাক</li>
            </ul>

            <h3>তথ্যের নিরাপত্তা</h3>
            <p>
              আমরা ব্যবহারকারীদের তথ্য সুরক্ষায় প্রতিশ্রুতিবদ্ধ এবং উন্নত নিরাপত্তা ব্যবস্থা 
              প্রয়োগ করি।
            </p>

            <h3>যোগাযোগ</h3>
            <p>
              প্রাইভেসি সংক্রান্ত কোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন।
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;
