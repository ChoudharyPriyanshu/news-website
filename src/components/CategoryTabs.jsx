import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CategoryTabs = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  
  const categories = [
    'नेता नगरी', 'सेहत', 'किताबवाला', 'गेस्ट इन द न्यूज़रूम', 'दी वलनटॉप शो', 'वलनटॉप बैठकी',
    'तारीख', 'ट्रिपायारी', 'सॉशल लिस्ट', 'बिजनेस स्टोरीज', 'मौसम', 'न्यूज', 'स्पोर्ट्स',
    'एंटरटेनमेंट', 'वलनइवास', 'टेक्नोलॉजी', 'सेहत'
  ];

  return (
    <div className="relative">
      <div className="flex overflow-x-auto scrollbar-hide pb-4">
        <div className="flex space-x-4 min-w-max">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className={`px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-pink-300'
              }`}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.05 }}
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