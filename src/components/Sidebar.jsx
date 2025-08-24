import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Calendar, User } from 'lucide-react';

const Sidebar = () => {
  const trendingNews = [
    {
      id: 1,
      title: 'Political Alliance Discussions Continue in State Assembly',
      time: '1 hour ago'
    },
    {
      id: 2,
      title: 'Investigation Update: New Developments in Ongoing Case',
      time: '2 hours ago'
    },
    {
      id: 3,
      title: 'Animal Welfare: Public Demands Justice in Cruelty Case',
      time: '3 hours ago'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Advertisement */}
      <motion.div 
        className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center shadow-xl"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-4">Download Our App</h3>
        <p className="text-lg mb-6 opacity-90">Get latest news updates on your mobile</p>
        <button className="bg-white text-purple-600 px-6 py-3 rounded-2xl font-bold hover:bg-gray-100 transition-colors text-lg">
          Download Now
        </button>
      </motion.div>

      {/* Trending Section */}
      <motion.div 
        className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center space-x-3 mb-6">
          <TrendingUp className="w-6 h-6 text-red-600" />
          <h3 className="text-2xl font-bold text-gray-900">Trending</h3>
        </div>
        
        <div className="space-y-6">
          {trendingNews.map((news, index) => (
            <motion.div 
              key={news.id}
              className="flex space-x-4 pb-4 border-b border-gray-100 last:border-b-0 cursor-pointer hover:bg-gray-50 p-3 rounded-2xl transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <div className="flex-shrink-0 w-3 h-3 bg-red-600 rounded-full mt-2"></div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
                  {news.title}
                </h4>
                <p className="text-sm text-gray-500 font-medium">{news.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Weather Widget */}
      <motion.div 
        className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl p-8 text-white shadow-xl"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold">Weather</h3>
          <Calendar className="w-6 h-6" />
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold mb-2">28°C</div>
          <div className="text-lg opacity-90">Delhi, India</div>
          <div className="text-lg opacity-80 mt-3">Partly Cloudy</div>
        </div>
      </motion.div>

      {/* Social Media */}
      <motion.div 
        className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="flex items-center space-x-3 mb-6">
          <User className="w-6 h-6 text-blue-600" />
          <h3 className="text-2xl font-bold text-gray-900">Follow Us</h3>
        </div>
        
        <div className="flex space-x-4">
          {['Facebook', 'Twitter', 'Instagram'].map((social, index) => (
            <motion.button
              key={social}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-2xl text-lg font-semibold hover:shadow-xl transition-all"
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