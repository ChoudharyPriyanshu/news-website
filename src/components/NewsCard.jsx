import React from 'react';
import { motion } from 'framer-motion';
import { Play, Clock } from 'lucide-react';

const NewsCard = ({ news }) => {
  return (
    <motion.div 
      className="bg-white rounded-3xl shadow-lg overflow-hidden news-card-hover cursor-pointer border border-gray-100"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative">
        <img 
          src={news.image} 
          alt={news.title}
          className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
        />
        {news.isVideo && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <motion.div 
              className="bg-white/95 rounded-full p-4 shadow-xl backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
            >
              <Play className="w-8 h-8 text-red-600" />
            </motion.div>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className={`px-4 py-2 rounded-full text-sm font-bold ${
            news.category === 'Breaking News' ? 'bg-red-600 text-white' :
            news.category === 'Sports' ? 'bg-blue-600 text-white' :
            news.category === 'International' ? 'bg-purple-600 text-white' :
            'bg-gray-800 text-white'
          }`}>
            {news.category}
          </span>
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 leading-tight">
          {news.title}
        </h3>
        
        <div className="flex items-center text-gray-500 text-lg">
          <Clock className="w-5 h-5 mr-2" />
          <span>{news.time}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsCard;