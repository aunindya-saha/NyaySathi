import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ExternalLink, Shield } from 'lucide-react';

const Footer = () => {
  const emergencyNumbers = [
    { label: 'জরুরি সেবা', number: '৯৯৯', color: 'text-red-600' },
    { label: 'NLASO', number: '১৬১০৬', color: 'text-blue-600' },
    { label: 'ভূমি সেবা', number: '১৬১২২', color: 'text-green-600' },
    { label: 'CID সাইবার', number: '০১৭০৯৬১০৬৬৪', color: 'text-purple-600' },
  ];

  const quickLinks = [
    { name: 'আমাদের সম্পর্কে', path: '/about' },
    { name: 'প্রাইভেসি পলিসি', path: '/privacy' },
    { name: 'সাহায্য', path: '/help' },
  ];

  const externalLinks = [
    { name: 'BD Laws', url: 'https://bdlaws.minlaw.gov.bd/' },
    { name: 'সরকারি সেবা', url: 'https://services.portal.gov.bd/' },
    { name: 'পুলিশ', url: 'https://www.police.gov.bd/' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="text-3xl">⚖️</div>
              <div>
                <span className="text-2xl font-bold text-emerald-400">NyaySathi</span>
                <span className="text-2xl font-bold ml-1">ন্যায়সাথী</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              সহজ ভাষায় আইন, নিরাপদে ন্যায়বিচার। সরকারি সেবা এক জায়গায়, সহজ গাইড, এবং এআই চ্যাটবট।
            </p>
            <div className="inline-flex items-center gap-2 bg-amber-900/20 text-amber-200 px-4 py-2 rounded-lg border border-amber-700/30">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">
                সরকারি সেবা পোর্টালগুলোর অফিসিয়াল লিংক সংযুক্ত
              </span>
            </div>
          </div>

          {/* Emergency Numbers */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-emerald-400">জরুরি নম্বরসমূহ</h3>
            <div className="space-y-3">
              {emergencyNumbers.map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <Phone className="w-4 h-4 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                  <div>
                    <div className="text-gray-300 text-sm">{item.label}</div>
                    <div className={`font-bold ${item.color}`}>{item.number}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-emerald-400">দ্রুত লিংক</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-700">
                <div className="text-sm text-gray-400 mb-2">বাহ্যিক লিংক</div>
                {externalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 mb-2"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="bg-amber-900/10 border border-amber-700/30 rounded-lg p-4 mb-6">
            <p className="text-amber-200 text-sm leading-relaxed">
              <strong>দাবিত্যাগ:</strong> এ প্ল্যাটফর্মে দেওয়া তথ্য সাধারণ দিশা মাত্র; আইনি পরামর্শের বিকল্প নয়। 
              গুরুত্বপূর্ণ আইনি বিষয়ে অভিজ্ঞ আইনজীবীর পরামর্শ নিন।
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-2 md:mb-0">
            © ২০২৫ NyaySathi ন্যায়সাথী। সর্বস্বত্ব সংরক্ষিত।
          </div>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span>সংস্করণ ১.০.০</span>
            <span>•</span>
            <span>Made with ❤️ for Bangladesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
