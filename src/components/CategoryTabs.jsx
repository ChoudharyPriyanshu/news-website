import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CategoryTabs = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  
  const categories = [
    'Breaking News', 'Politics', 'Business', 'Sports', 'Entertainment', 'Technology',
    'Health', 'World News', 'Weather', 'Opinion', 'Lifestyle', 'Education',
    'Science', 'Travel', 'Food', 'Fashion'
  ];

  return (
    <div className="relative">
      <div className="flex overflow-x-auto scrollbar-hide pb-6">
        <div className="flex space-x-5 min-w-max">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className={`px-8 py-4 rounded-2xl text-lg font-semibold whitespace-nowrap transition-all duration-300 shadow-md ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg'
              }`}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;