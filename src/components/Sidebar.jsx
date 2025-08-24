import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Calendar, User } from 'lucide-react';

const Sidebar = () => {
  const trendingNews = [
    {
      id: 1,
      title: 'बिहार में महागठबंधन के सीएम फेस पर फिर फैसला पेंड',
      time: '1 घंटे पहले'
    },
    {
      id: 2,
      title: 'अपने आप मरी, मैंने कुछ नहीं किया...',
      time: '2 घंटे पहले'
    },
    {
      id: 3,
      title: 'बेईजान से दुखान, कुत्ते को बुरी तरह पीटा',
      time: '3 घंटे पहले'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Advertisement */}
      <motion.div 
        className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl p-6 text-white text-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-lg font-bold mb-2">एप डाउनलोड करे</h3>
        <p className="text-sm mb-4">Latest news updates on your mobile</p>
        <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Download Now
        </button>
      </motion.div>

      {/* Trending Section */}
      <motion.div 
        className="bg-white rounded-xl shadow-lg p-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-red-600" />
          <h3 className="text-lg font-bold text-gray-800">ट्रेंडिंग</h3>
        </div>
        
        <div className="space-y-4">
          {trendingNews.map((news, index) => (
            <motion.div 
              key={news.id}
              className="flex space-x-3 pb-3 border-b border-gray-100 last:border-b-0 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <div className="flex-shrink-0 w-2 h-2 bg-red-600 rounded-full mt-2"></div>
              <div className="flex-1">
                <h4 className="text-sm font-medium text-gray-800 mb-1 line-clamp-2">
                  {news.title}
                </h4>
                <p className="text-xs text-gray-500">{news.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Weather Widget */}
      <motion.div 
        className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl p-6 text-white"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">मौसम</h3>
          <Calendar className="w-5 h-5" />
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold mb-1">28°C</div>
          <div className="text-sm opacity-90">दिल्ली, भारत</div>
          <div className="text-sm opacity-80 mt-2">धूप छांव</div>
        </div>
      </motion.div>

      {/* Social Media */}
      <motion.div 
        className="bg-white rounded-xl shadow-lg p-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="flex items-center space-x-2 mb-4">
          <User className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-bold text-gray-800">फॉलो करें</h3>
        </div>
        
        <div className="flex space-x-3">
          {['Facebook', 'Twitter', 'Instagram'].map((social, index) => (
            <motion.button
              key={social}
              className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              {social}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;