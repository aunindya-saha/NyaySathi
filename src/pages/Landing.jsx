import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Section } from '../components/layout/Section';
import { PageShell } from '../components/layout/PageShell';
import { motion } from 'framer-motion';
import { 
  MessageCircle, Scale, FileText, Shield, BookOpen, Users, Phone, 
  CheckCircle, ArrowRight, Star, Zap, Clock, Globe 
} from 'lucide-react';

const Landing = () => {
  const highlights = [
    {
      icon: Scale,
      title: 'আইন গাইড',
      description: 'সহজ ভাষায় আইনি তথ্য ও দিকনির্দেশনা',
      link: '/knowledge',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: FileText,
      title: 'কেস ট্র্যাকার',
      description: 'আদালতের মামলার অগ্রগতি দেখুন',
      link: '/case',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Shield,
      title: 'সরকারি সেবা',
      description: 'অনলাইন জিডি, পিসিসি, ভূমি সেবা এক জায়গায়',
      link: '/seba',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: MessageCircle,
      title: 'কণ্ঠে প্রশ্ন',
      description: 'এআই চ্যাটবট দিয়ে তাৎক্ষণিক সহায়তা',
      link: '/chat',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ];

  const services = [
    { name: 'অনলাইন জিডি', icon: '🚨', popular: true },
    { name: 'পুলিশ ক্লিয়ারেন্স', icon: '👮', popular: true },
    { name: 'ভূমি রেকর্ড', icon: '🏞️', popular: false },
    { name: 'জন্ম-মৃত্যু নিবন্ধন', icon: '📋', popular: false },
    { name: 'পাসপোর্ট সেবা', icon: '📔', popular: true },
    { name: 'চালকের লাইসেন্স', icon: '🚗', popular: false }
  ];

  const features = [
    {
      icon: Zap,
      title: 'দ্রুত সেবা',
      description: 'AI-চালিত দ্রুত সমাধান'
    },
    {
      icon: Clock,
      title: '২৪/৭ সহায়তা',
      description: 'যেকোনো সময় সাহায্য পান'
    },
    {
      icon: Globe,
      title: 'সব জায়গায়',
      description: 'বাংলাদেশের যেকোনো প্রান্ত থেকে'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <PageShell>
      {/* Hero Section */}
      <Section variant="hero" className="relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 gradient-mesh"></div>
        <div className="absolute inset-0 pattern-dots opacity-30"></div>
        <div className="floating-shapes"></div>
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[90vh] py-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-6"
              >
                <Badge variant="primary" size="lg" className="mb-4 bg-gradient-to-r from-emerald-400 to-teal-500 shadow-lg">
                  <Star className="w-4 h-4 mr-1" />
                  বাংলাদেশের #১ আইনি সহায়ক
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight"
              >
                ন্যায়সাথী — <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">সহজ ভাষায় আইন</span>, <br />
                নিরাপদে ন্যায়বিচার
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-text-secondary mb-8 leading-relaxed"
              >
                সরকারি সেবা এক জায়গায়, সহজ গাইড, এবং এআই চ্যাটবট।
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              >
                <Link to="/knowledge">
                  <Button variant="vibrant1" size="lg" className="w-full sm:w-auto">
                    <Scale className="w-5 h-5 mr-2" />
                    আইন জানুন
                  </Button>
                </Link>
                <Link to="/chat">
                  <Button variant="vibrant2" size="lg" className="w-full sm:w-auto">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    এআই সহায়ক
                  </Button>
                </Link>
                <Link to="/seba">
                  <Button variant="vibrant3" size="lg" className="w-full sm:w-auto">
                    <Shield className="w-5 h-5 mr-2" />
                    সরকারি সেবা
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex items-center justify-center lg:justify-start gap-6 text-sm text-text-secondary"
              >
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-emerald-600" />
                      <span>{feature.title}</span>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Right Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative">
                <div className="w-96 h-96 rounded-full bg-gradient-to-br from-purple-400/30 via-pink-300/30 to-indigo-400/30 flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-2xl">
                  <div className="text-8xl animate-bounce">⚖️</div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg animate-float">
                  <span className="text-2xl">🛡️</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                  <span className="text-xl">📋</span>
                </div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '4s' }}>
                  <span className="text-lg">�</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16"
          >
            {[
              { number: '৫০+', label: 'সরকারি সেবা', icon: Shield, gradient: 'gradient1' },
              { number: '২৪/৭', label: 'এআই সহায়তা', icon: MessageCircle, gradient: 'gradient2' },
              { number: '১০০%', label: 'বিনামূল্যে', icon: CheckCircle, gradient: 'gradient3' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} variant={stat.gradient} className="text-center group hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-emerald-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">{stat.number}</div>
                  <div className="text-text-secondary font-medium">{stat.label}</div>
                </Card>
              );
            })}
          </motion.div>
        </div>
      </Section>

      {/* Quick Services */}
      <Section variant="accent" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-cyan-50 to-emerald-50"></div>
        <div className="absolute inset-0 pattern-grid opacity-20"></div>
        <div className="relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-center text-text-primary mb-12"
            >
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">জনপ্রিয় সেবাসমূহ</span>
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {services.map((service, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Link to="/seba">
                    <Card variant="glass" className="text-center py-6 group cursor-pointer relative overflow-hidden">
                      {service.popular && (
                        <Badge variant="accent" size="sm" className="absolute top-2 right-2 bg-gradient-to-r from-pink-400 to-red-500 text-white">
                          জনপ্রিয়
                        </Badge>
                      )}
                      <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300 filter drop-shadow-lg">{service.icon}</div>
                      <div className="text-sm font-medium text-text-primary">{service.name}</div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Highlights Section */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50"></div>
        <div className="relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-center text-text-primary mb-12"
            >
              <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">প্রধান সুবিধাসমূহ</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                const cardVariants = ['gradient1', 'gradient2', 'gradient3', 'gradient4'];
                return (
                  <motion.div key={index} variants={itemVariants}>
                    <Link to={item.link}>
                      <Card variant={cardVariants[index]} className="h-full text-center group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1">
                        <div className="flex justify-center mb-6">
                          <div className={`p-4 ${item.bgColor} rounded-2xl group-hover:scale-125 transition-transform duration-500 shadow-lg`}>
                            <Icon className={`w-8 h-8 ${item.color} group-hover:rotate-12 transition-transform duration-500`} />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:scale-105 transition-transform">
                          {item.title}
                        </h3>
                        <p className="text-text-secondary leading-relaxed mb-4">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-center">
                          <Button variant="outline" size="sm" className="group-hover:scale-110 transition-transform">
                            শুরু করুন
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Trust Section */}
      <Section variant="accent">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card variant="elevated" className="inline-flex items-center gap-3 px-8 py-4">
            <Shield className="w-6 h-6 text-primary" />
            <span className="text-text-primary font-medium text-lg">
              সরকারি সেবা পোর্টালগুলোর অফিসিয়াল লিংক সংযুক্ত
            </span>
          </Card>
        </motion.div>
      </Section>

      {/* Features Section */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"></div>
        <div className="absolute inset-0 pattern-dots opacity-30"></div>
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">কেন ন্যায়সাথী?</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'সহজ ভাষায় আইন',
                    description: 'জটিল আইনি বিষয়গুলো সহজ বাংলায় ব্যাখ্যা',
                    icon: BookOpen,
                    gradient: 'from-emerald-400 to-teal-500'
                  },
                  {
                    title: 'এক প্ল্যাটফর্মে সব',
                    description: 'সকল সরকারি সেবা একই জায়গায়',
                    icon: Globe,
                    gradient: 'from-blue-400 to-indigo-500'
                  },
                  {
                    title: 'এআই সহায়ক',
                    description: '২৪/৭ স্মার্ট চ্যাটবট সহায়তা',
                    icon: Zap,
                    gradient: 'from-purple-400 to-pink-500'
                  },
                  {
                    title: 'বিনামূল্যে',
                    description: 'সম্পূর্ণ প্ল্যাটফর্ম সবার জন্য বিনামূল্যে',
                    icon: CheckCircle,
                    gradient: 'from-amber-400 to-orange-500'
                  }
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className={`p-3 bg-gradient-to-r ${feature.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary text-lg mb-2 group-hover:scale-105 transition-transform">{feature.title}</h3>
                        <p className="text-text-secondary">{feature.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card variant="glass" padding="lg" className="bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl mb-6 animate-bounce filter drop-shadow-2xl">⚖️</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">ডিজিটাল বাংলাদেশের</span><br />
                    আইনি সেবা
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    প্রযুক্তির মাধ্যমে ন্যায়বিচার সবার কাছে পৌঁছে দিচ্ছি
                  </p>
                  <Button variant="vibrant1" size="lg">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    শুরু করুন
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Emergency Numbers */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50"></div>
        <div className="absolute inset-0 pattern-grid opacity-20"></div>
        <div className="relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-center text-text-primary mb-12"
            >
              <span className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">জরুরি নম্বরসমূহ</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'জরুরি সেবা', number: '৯৯৯', color: 'text-red-600', bgColor: 'bg-red-50', gradient: 'from-red-400 to-red-600' },
                { title: 'ভূমি সেবা', number: '১৬১২২', color: 'text-blue-600', bgColor: 'bg-blue-50', gradient: 'from-blue-400 to-blue-600' },
                { title: 'সাইবার ক্রাইম', number: '০১৭০৯৬১০৬৬৪', color: 'text-purple-600', bgColor: 'bg-purple-50', gradient: 'from-purple-400 to-purple-600' }
              ].map((emergency, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card variant="glass" className="text-center group hover:scale-110 transition-all duration-500 hover:shadow-2xl">
                    <div className={`w-20 h-20 bg-gradient-to-r ${emergency.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                      <Phone className="w-10 h-10 text-white group-hover:animate-pulse" />
                    </div>
                    <h3 className="font-semibold text-text-primary mb-3 text-lg group-hover:scale-105 transition-transform">{emergency.title}</h3>
                    <div className={`text-2xl font-bold ${emergency.color} group-hover:scale-110 transition-transform`}>{emergency.number}</div>
                    <Button variant="outline" size="sm" className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Phone className="w-4 h-4 mr-2" />
                      কল করুন
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Disclaimer */}
      <Section variant="default" className="bg-amber-50 border-y border-amber-200">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card variant="outline" className="bg-amber-50 border-amber-200 max-w-4xl mx-auto">
            <p className="text-amber-800 leading-relaxed">
              <strong>দাবিত্যাগ:</strong> এই প্ল্যাটফর্মে প্রদত্ত তথ্যসমূহ শুধুমাত্র সাধারণ দিকনির্দেশনার উদ্দেশ্যে। 
              গুরুত্বপূর্ণ আইনি বিষয়ে অভিজ্ঞ আইনজীবীর পরামর্শ নিন।
            </p>
          </Card>
        </motion.div>
      </Section>
    </PageShell>
  );
};

export default Landing;
