import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Search, Filter, Grid, List, SlidersHorizontal } from 'lucide-react';
import { ServiceTile } from '../components/ServiceTile';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Skeleton, SkeletonCard } from '../components/ui/Skeleton';
import { Section } from '../components/layout/Section';
import { PageShell } from '../components/layout/PageShell';
import { motion } from 'framer-motion';
import servicesData from '../data/services.json';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const { data: services = [], isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: () => Promise.resolve(servicesData),
  });

  // Get unique tags with counts
  const tagStats = services.reduce((acc, service) => {
    service.tags.forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});

  const allTags = Object.keys(tagStats);

  // Filter services based on search and tag
  const filteredServices = services.filter(service => {
    const matchesSearch = searchTerm === '' || 
      service.name_bn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.summary_bn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTag = selectedTag === '' || service.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  const handleGuideClick = (serviceId) => {
    // Navigate to knowledge section with service reference
    window.location.href = `/knowledge?ref=${serviceId}`;
  };

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
    <PageShell className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh"></div>
      <div className="absolute inset-0 pattern-dots opacity-20"></div>
      <Section className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">সরকারি সেবা একত্রে</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            সকল সরকারি সেবা এক জায়গায়। সহজ গাইড এবং সরাসরি লিংক।
          </p>
          <div className="flex justify-center mt-6">
            <Badge variant="primary" size="lg" className="bg-gradient-to-r from-emerald-400 to-teal-500 shadow-lg">
              মোট {services.length}টি সেবা
            </Badge>
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Card variant="glass" className="mb-8 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="সেবা বা ক্যাটেগরি খুঁজুন..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 bg-white/80 backdrop-blur-sm"
                    size="lg"
                  />
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="lg:w-64">
                <div className="relative">
                  <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
                  <select
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-border rounded-xl bg-white/80 backdrop-blur-sm text-text-primary focus-ring appearance-none font-bangla"
                  >
                    <option value="">সব ক্যাটেগরি</option>
                    {allTags.map(tag => (
                      <option key={tag} value={tag}>
                        {tag} ({tagStats[tag]})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* View Toggle */}
              <div className="flex bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-1 shadow-inner">
                <Button
                  variant={viewMode === 'grid' ? 'vibrant1' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-md"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'vibrant1' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-md"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Filter Tags */}
        {allTags.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <Button
              variant={selectedTag === '' ? 'vibrant1' : 'outline'}
              size="sm"
              onClick={() => setSelectedTag('')}
              className="hover:scale-105 transition-transform"
            >
              সব দেখুন ({services.length})
            </Button>
            {allTags.map((tag, index) => {
              const variants = ['vibrant1', 'vibrant2', 'vibrant3'];
              const variant = selectedTag === tag ? variants[index % variants.length] : 'outline';
              return (
                <Button
                  key={tag}
                  variant={variant}
                  size="sm"
                  onClick={() => setSelectedTag(tag)}
                  className="hover:scale-105 transition-transform"
                >
                  {tag} ({tagStats[tag]})
                </Button>
              );
            })}
          </motion.div>
        )}

        {/* Results Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-between items-center mb-6"
        >
          <div className="text-text-secondary">
            {searchTerm || selectedTag ? (
              <span>
                <strong>{filteredServices.length}</strong> টি সেবা পাওয়া গেছে
                {searchTerm && <span> "{searchTerm}" এর জন্য</span>}
                {selectedTag && <span> {selectedTag} ক্যাটেগরিতে</span>}
              </span>
            ) : (
              <span><strong>{services.length}</strong> টি সেবা উপলব্ধ</span>
            )}
          </div>
          {(searchTerm || selectedTag) && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSearchTerm('');
                setSelectedTag('');
              }}
            >
              সব দেখুন
            </Button>
          )}
        </motion.div>

        {/* Services Grid/List */}
        {isLoading ? (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1 max-w-4xl mx-auto'
            }`}
          >
            {filteredServices.map((service, index) => (
              <motion.div key={service.id} variants={itemVariants}>
                <ServiceTile
                  service={service}
                  onGuideClick={handleGuideClick}
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Empty State */}
        {!isLoading && filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <Card variant="outline" className="max-w-md mx-auto p-8">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                কোন সেবা পাওয়া যায়নি
              </h3>
              <p className="text-text-secondary mb-6">
                অন্য কীওয়ার্ড বা ক্যাটেগরি দিয়ে খুঁজে দেখুন
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTag('');
                }}
              >
                সব সেবা দেখুন
              </Button>
            </Card>
          </motion.div>
        )}
      </Section>
    </PageShell>
  );
};

export default Services;
