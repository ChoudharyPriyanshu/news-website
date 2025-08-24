import React from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Eye } from 'lucide-react';

const Hero = () => {
  const featuredNews = {
    title: 'राजस्थान में नारीश और बाहू से 2 महिलाओं की मौत, सेना जवान जोरी, संकर्षी लोगों को किया रेस्क्यू',
    image: 'https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&w=800',
    time: '2 घंटे पहले',
    views: '12.5K',
    category: 'ब्रेकिंग न्यूज़'
  };

  return (
    <motion.div 
      className="relative rounded-2xl overflow-hidden shadow-2xl mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="relative h-96 lg:h-[500px]">
        <img 
          src={featuredNews.image} 
          alt="Featured news" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
        
        <motion.div 
          className="absolute inset-0 flex items-end p-6 lg:p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="text-white max-w-3xl">
            <motion.div 
              className="flex items-center space-x-4 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="bg-red-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                {featuredNews.category}
              </span>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{featuredNews.time}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{featuredNews.views}</span>
                </div>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-2xl lg:text-4xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {featuredNews.title}
            </motion.h1>
            
            <motion.button 
              className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <Play className="w-5 h-5" />
              <span className="font-medium">पूरी खबर देखें</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;