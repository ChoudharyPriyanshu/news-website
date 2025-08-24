import React from 'react';
import { motion } from 'framer-motion';
import { Play, Clock } from 'lucide-react';

const NewsCard = ({ news }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden news-card-hover cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative">
        <img 
          src={news.image} 
          alt={news.title}
          className="w-full h-48 object-cover"
        />
        {news.isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="bg-white/90 rounded-full p-3 shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              <Play className="w-6 h-6 text-red-600" />
            </motion.div>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
            news.category === 'ब्रेकिंग न्यूज़' ? 'bg-red-600 text-white' :
            news.category === 'स्पोर्ट्स' ? 'bg-blue-600 text-white' :
            news.category === 'अंतर्राष्ट्रीय' ? 'bg-purple-600 text-white' :
            'bg-gray-800 text-white'
          }`}>
            {news.category}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-3 leading-snug">
          {news.title}
        </h3>
        
        <div className="flex items-center text-gray-500 text-sm">
          <Clock className="w-4 h-4 mr-1" />
          <span>{news.time}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsCard;