import React from 'react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { ExternalLink, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const getTagEmoji = (tag) => {
  const emojiMap = {
    'পুলিশ': '👮',
    'আদালত': '⚖️',
    'ভূমি': '🏞️',
    'ট্রাফিক': '🚦',
    'সাইবার': '💻',
    'আইন': '📚',
    'লিগ্যাল এইড': '🤝'
  };
  return emojiMap[tag] || '📋';
};

const getTagColor = (tag) => {
  const colorMap = {
    'পুলিশ': 'primary',
    'আদালত': 'secondary',
    'ভূমি': 'success',
    'ট্রাফিক': 'warning',
    'সাইবার': 'error',
    'আইন': 'default',
    'লিগ্যাল এইড': 'accent'
  };
  return colorMap[tag] || 'default';
};

export const ServiceTile = ({ service, onGuideClick }) => {
  const handleGuideClick = () => {
    if (onGuideClick) {
      onGuideClick(service.id);
    }
  };

  const handleDirectClick = () => {
    window.open(service.official_url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Card variant="glass" className="h-full flex flex-col group relative overflow-hidden shadow-xl hover:shadow-2xl">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/40 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Tag Badge */}
        <div className="absolute top-4 right-4 z-10">
          <Badge variant={getTagColor(service.tags[0])} size="sm" className="shadow-lg">
            {service.tags[0]}
          </Badge>
        </div>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6 pr-20 relative z-10">
          <div className="p-4 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg backdrop-blur-sm">
            <div className="text-3xl filter drop-shadow-lg">
              {getTagEmoji(service.tags[0])}
            </div>
          </div>
          <h3 className="text-xl font-semibold text-text-primary leading-tight group-hover:text-emerald-700 transition-colors">{service.name_bn}</h3>
        </div>
        
        {/* Description */}
        <p className="text-text-secondary mb-6 leading-relaxed flex-grow relative z-10">
          {service.summary_bn}
        </p>
        
        {/* Steps */}
        <div className="mb-6 relative z-10">
          <h4 className="font-semibold text-text-primary mb-3 flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-emerald-600" />
            যেভাবে করবেন:
          </h4>
          <ul className="space-y-3">
            {service.how_bn.slice(0, 3).map((step, index) => (
              <li key={index} className="text-sm text-text-secondary flex items-start gap-3 group/item">
                <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-r from-emerald-400 to-teal-500 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg group-hover/item:scale-110 transition-transform">
                  {index + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-6 relative z-10">
          <h4 className="font-semibold text-text-primary mb-3 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-600" />
            সুবিধা:
          </h4>
          <ul className="space-y-2">
            {service.benefits_bn.map((benefit, index) => (
              <li key={index} className="text-sm text-text-secondary flex items-start gap-3 group/benefit">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0 group-hover/benefit:scale-125 transition-transform" />
                <span className="leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto relative z-10">
          <Button
            variant="outline"
            size="md"
            onClick={handleGuideClick}
            className="flex-1 group-hover:scale-105 transition-transform"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            গাইড দেখুন
          </Button>
          <Button
            variant="vibrant1"
            size="md"
            onClick={handleDirectClick}
            className="flex-1 group-hover:scale-105 transition-transform"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            সরাসরি যান
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};
