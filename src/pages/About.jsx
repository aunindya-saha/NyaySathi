import React from 'react';
import { Card } from '../components/ui/Card';

const About = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-text-primary mb-8 text-center">
          আমাদের সম্পর্কে
        </h1>
        
        <Card>
          <div className="prose prose-lg max-w-none">
            <h2>ন্যায়সাথী প্ল্যাটফর্ম</h2>
            <p>
              ন্যায়সাথী একটি ডিজিটাল প্ল্যাটফর্ম যা বাংলাদেশের নাগরিকদের আইনি সেবা এবং 
              সরকারি সুবিধাসমূহ সহজভাবে পৌঁছে দিতে কাজ করে।
            </p>
            
            <h3>আমাদের লক্ষ্য</h3>
            <ul>
              <li>সহজ ভাষায় আইনি তথ্য প্রদান</li>
              <li>সরকারি সেবাসমূহের একীভূত প্ল্যাটফর্ম</li>
              <li>এআই-চালিত সহায়তা প্রদান</li>
              <li>ডিজিটাল বাংলাদেশ গড়তে অবদান রাখা</li>
            </ul>

            <h3>দাবিত্যাগ</h3>
            <p>
              এই প্ল্যাটফর্মে প্রদত্ত তথ্যসমূহ শুধুমাত্র সাধারণ দিকনির্দেশনার উদ্দেশ্যে। 
              এটি পেশাদার আইনি পরামর্শের বিকল্প নয়।
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
