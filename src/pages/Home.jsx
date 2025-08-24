import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import NewsGrid from '../components/NewsGrid';
import CategoryTabs from '../components/CategoryTabs';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 py-8"
    >
      <div className="mb-8">
        <CategoryTabs />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
          <Hero />
          <NewsGrid />
        </div>
        <div className="lg:col-span-1">
          <Sidebar />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;