import React from 'react';
import { motion } from 'framer-motion';
import { Play, Eye, Clock, Share2 } from 'lucide-react';

const Watch = () => {
  const videos = [
    {
      id: 1,
      title: 'LIVE: आज की बड़ी खबरें | Breaking News | Latest Updates',
      thumbnail: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: 'LIVE',
      views: '45K watching',
      isLive: true
    },
    {
      id: 2,
      title: 'राजस्थान में बाढ़ का कहर | Ground Report | Exclusive Coverage',
      thumbnail: 'https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '15:30',
      views: '2.3M views',
      uploadTime: '2 घंटे पहले'
    },
    {
      id: 3,
      title: 'PM Modi का संसद में भाषण | Full Speech | Parliament Session',
      thumbnail: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '45:20',
      views: '5.7M views',
      uploadTime: '1 दिन पहले'
    },
    {
      id: 4,
      title: 'Cricket World Cup 2024 | India vs Australia Highlights',
      thumbnail: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '12:45',
      views: '8.9M views',
      uploadTime: '3 दिन पहले'
    },
    {
      id: 5,
      title: 'Bollywood की बड़ी खबर | Celebrity Interview | Exclusive',
      thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '25:15',
      views: '1.2M views',
      uploadTime: '1 सप्ताह पहले'
    },
    {
      id: 6,
      title: 'Stock Market Analysis | Share Bazaar | Investment Tips',
      thumbnail: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '18:30',
      views: '890K views',
      uploadTime: '2 दिन पहले'
    }
  ];

  const categories = [
    'सभी', 'लाइव', 'न्यूज़', 'स्पोर्ट्स', 'राजनीति', 'मनोरंजन', 'बिजनेस', 'टेक्नोलॉजी'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 py-8"
    >
      <div className="mb-12">
        <motion.h1 
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          देखिए - वीडियो न्यूज़
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-600 max-w-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          ताज़ा खबरों के वीडियो, लाइव न्यूज़ और विशेष कार्यक्रम देखें
        </motion.p>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <div className="flex overflow-x-auto scrollbar-hide pb-2">
          <div className="flex space-x-3 min-w-max">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className="px-6 py-2 rounded-full bg-white text-gray-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white transition-all duration-300 border border-gray-200 whitespace-nowrap font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Live Video */}
      <motion.div 
        className="mb-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-8 text-white"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-red-600 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
            🔴 LIVE
          </div>
          <span className="text-sm opacity-90">45,234 लोग देख रहे हैं</span>
        </div>
        <h2 className="text-2xl font-bold mb-4">
          आज की सबसे बड़ी खबरें | Breaking News Updates
        </h2>
        <motion.button 
          className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Play className="w-5 h-5" />
          <span className="font-medium">लाइव देखें</span>
        </motion.button>
      </motion.div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="relative">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              
              {/* Play Button */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-white/90 rounded-full p-4 shadow-lg">
                  <Play className="w-8 h-8 text-red-600" />
                </div>
              </motion.div>

              {/* Duration/Live Badge */}
              <div className="absolute bottom-3 right-3">
                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                  video.isLive 
                    ? 'bg-red-600 text-white animate-pulse' 
                    : 'bg-black/70 text-white'
                }`}>
                  {video.duration}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight line-clamp-2">
                {video.title}
              </h3>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 text-gray-500 text-sm">
                  <Eye className="w-4 h-4" />
                  <span>{video.views}</span>
                </div>
                {video.uploadTime && (
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{video.uploadTime}</span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center justify-between">
                <motion.button 
                  className="flex-1 bg-gradient-to-r from-red-500 to-pink-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all mr-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  देखें
                </motion.button>
                <motion.button 
                  className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Share2 className="w-5 h-5 text-gray-600" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Watch;