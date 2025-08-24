import React from 'react';
import { motion } from 'framer-motion';
import { Play, Eye, Clock, Share2, Radio } from 'lucide-react';

const Watch = () => {
  const videos = [
    {
      id: 1,
      title: 'LIVE: Breaking News Updates | Latest Headlines Today',
      thumbnail: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: 'LIVE',
      views: '45K watching',
      isLive: true,
      category: 'Breaking News'
    },
    {
      id: 2,
      title: 'Flood Crisis Coverage | Ground Report | Exclusive Investigation',
      thumbnail: 'https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '15:30',
      views: '2.3M views',
      uploadTime: '2 hours ago',
      category: 'Investigation'
    },
    {
      id: 3,
      title: 'Prime Minister Speech | Parliament Session | Full Coverage',
      thumbnail: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '45:20',
      views: '5.7M views',
      uploadTime: '1 day ago',
      category: 'Politics'
    },
    {
      id: 4,
      title: 'Cricket World Cup 2024 | Match Highlights | Expert Analysis',
      thumbnail: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '12:45',
      views: '8.9M views',
      uploadTime: '3 days ago',
      category: 'Sports'
    },
    {
      id: 5,
      title: 'Celebrity Interview | Exclusive Behind the Scenes',
      thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '25:15',
      views: '1.2M views',
      uploadTime: '1 week ago',
      category: 'Entertainment'
    },
    {
      id: 6,
      title: 'Stock Market Analysis | Investment Tips | Financial News',
      thumbnail: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '18:30',
      views: '890K views',
      uploadTime: '2 days ago',
      category: 'Business'
    }
  ];

  const categories = [
    'All', 'Live', 'News', 'Sports', 'Politics', 'Entertainment', 'Business', 'Technology'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-8 py-12"
    >
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.h1 
          className="text-5xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Watch - Video News
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Latest video news, live broadcasts, and exclusive programs
        </motion.p>
      </div>

      {/* Categories Filter */}
      <div className="mb-12">
        <div className="flex overflow-x-auto scrollbar-hide pb-4">
          <div className="flex space-x-4 min-w-max mx-auto">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className="px-8 py-3 rounded-full bg-white text-gray-700 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-600 hover:text-white transition-all duration-300 border-2 border-gray-200 hover:border-transparent whitespace-nowrap font-semibold text-lg shadow-md hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
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
        className="mb-16 bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl p-10 text-white shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-red-700 px-4 py-2 rounded-full text-lg font-bold animate-pulse flex items-center space-x-2">
                <Radio className="w-5 h-5" />
                <span>LIVE</span>
              </div>
              <span className="text-lg opacity-90">45,234 viewers watching now</span>
            </div>
            <h2 className="text-3xl font-bold mb-6 leading-tight">
              Breaking News: Today's Most Important Updates
            </h2>
            <motion.button 
              className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-2xl hover:bg-white/30 transition-all text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-6 h-6" />
              <span>Watch Live</span>
            </motion.button>
          </div>
          <div className="hidden lg:block">
            <div className="w-40 h-40 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Play className="w-20 h-20" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <div className="relative overflow-hidden">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              
              {/* Play Button */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-white/95 rounded-full p-5 shadow-xl backdrop-blur-sm">
                  <Play className="w-10 h-10 text-red-600" />
                </div>
              </motion.div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-sm font-bold text-white ${
                  video.category === 'Breaking News' ? 'bg-red-500' :
                  video.category === 'Politics' ? 'bg-blue-500' :
                  video.category === 'Sports' ? 'bg-green-500' :
                  video.category === 'Entertainment' ? 'bg-purple-500' :
                  video.category === 'Business' ? 'bg-orange-500' :
                  'bg-gray-500'
                }`}>
                  {video.category}
                </span>
              </div>

              {/* Duration/Live Badge */}
              <div className="absolute bottom-4 right-4">
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                  video.isLive 
                    ? 'bg-red-600 text-white animate-pulse' 
                    : 'bg-black/70 text-white'
                }`}>
                  {video.duration}
                </span>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight line-clamp-2">
                {video.title}
              </h3>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2 text-gray-500">
                  <Eye className="w-5 h-5" />
                  <span className="font-medium">{video.views}</span>
                </div>
                {video.uploadTime && (
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium">{video.uploadTime}</span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center space-x-3">
                <motion.button 
                  className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Watch Now
                </motion.button>
                <motion.button 
                  className="p-4 bg-gray-100 rounded-2xl hover:bg-gray-200 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Share2 className="w-6 h-6 text-gray-600" />
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