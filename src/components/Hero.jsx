import React from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Eye } from 'lucide-react';

const Hero = () => {
  const featuredNews = {
    title: 'Breaking: Major Flood Relief Operations Underway, Army Rescues Hundreds of People',
    image: 'https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&w=800',
    time: '2 hours ago',
    views: '12.5K',
    category: 'Breaking News'
  };

  return (
    <motion.div 
      className="relative rounded-3xl overflow-hidden shadow-2xl mb-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="relative h-[400px] lg:h-[600px]">
        <img 
          src={featuredNews.image} 
          alt="Featured news" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
        
        <motion.div 
          className="absolute inset-0 flex items-end p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="text-white max-w-4xl">
            <motion.div 
              className="flex items-center space-x-6 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="bg-red-600 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                {featuredNews.category}
              </span>
              <div className="flex items-center space-x-6 text-lg">
                <div className="flex items-center space-x-1">
                  <Clock className="w-5 h-5" />
                  <span>{featuredNews.time}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-5 h-5" />
                  <span>{featuredNews.views}</span>
                </div>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-3xl lg:text-5xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {featuredNews.title}
            </motion.h1>
            
            <motion.button 
              className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-2xl hover:bg-white/30 transition-all duration-300 text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <Play className="w-6 h-6" />
              <span>Read Full Story</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;