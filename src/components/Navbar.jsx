import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, FileText, Users, Scale, Shield, Briefcase, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'সেবা', path: '/seba', icon: Shield },
    { name: 'আইন', path: '/knowledge', icon: Scale },
    { name: 'AI চ্যাট', path: '/chat', icon: MessageCircle, isAI: true },
    { name: 'কেস', path: '/case', icon: Briefcase },
    { name: 'রিপোর্ট', path: '/report', icon: FileText },
    { name: 'কমিউনিটি', path: '/community', icon: Users },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-surface/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="text-2xl transition-transform group-hover:scale-110">⚖️</div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-primary">NyaySathi</span>
              <span className="text-xl font-bold text-text-primary ml-1">ন্যায়সাথী</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 group ${
                    active
                      ? item.isAI 
                        ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/25'
                        : 'bg-primary text-white shadow-md'
                      : 'text-text-secondary hover:text-text-primary hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                    active ? 'text-white' : 'text-primary'
                  }`} />
                  <span className="font-medium">{item.name}</span>
                  {item.isAI && (
                    <div className="relative">
                      <Sparkles className="w-3 h-3 text-yellow-300 animate-sparkle" />
                      {!active && (
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
                      )}
                    </div>
                  )}
                  {active && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute inset-0 rounded-xl -z-10 ${
                        item.isAI 
                          ? 'bg-gradient-to-r from-primary-500 to-secondary-500'
                          : 'bg-primary'
                      }`}
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-border bg-surface">
                <div className="flex flex-col space-y-2">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const active = isActive(item.path);
                    return (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                            active
                              ? item.isAI 
                                ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/25'
                                : 'bg-primary text-white shadow-md'
                              : 'text-text-secondary hover:text-text-primary hover:bg-gray-50'
                          }`}
                        >
                          <Icon className={`w-5 h-5 ${
                            active ? 'text-white' : 'text-primary'
                          }`} />
                          <span className="font-medium">{item.name}</span>
                          {item.isAI && (
                            <div className="ml-auto flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-yellow-300 animate-sparkle" />
                              <span className="text-xs bg-yellow-300 text-yellow-800 px-1.5 py-0.5 rounded-full font-bold">AI</span>
                            </div>
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
