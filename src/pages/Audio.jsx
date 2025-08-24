import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, Download, Heart, Share2, Headphones } from 'lucide-react';

const Audio = () => {
  const podcasts = [
    {
      id: 1,
      title: 'Political Talk',
      description: 'In-depth discussion on current political situation and policy analysis',
      image: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '45:30',
      category: 'Politics',
      plays: '2.3M',
      isPlaying: false,
      rating: 4.8
    },
    {
      id: 2,
      title: 'Economic Review',
      description: 'Market analysis, investment advice, and financial news coverage',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '32:15',
      category: 'Business',
      plays: '1.8M',
      isPlaying: false,
      rating: 4.6
    },
    {
      id: 3,
      title: 'Sports World',
      description: 'Cricket and other sports latest updates with expert commentary',
      image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '28:45',
      category: 'Sports',
      plays: '3.1M',
      isPlaying: false,
      rating: 4.9
    },
    {
      id: 4,
      title: 'Health Advice',
      description: 'Medical experts share health tips and wellness advice',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '35:20',
      category: 'Health',
      plays: '1.5M',
      isPlaying: false,
      rating: 4.7
    },
    {
      id: 5,
      title: 'Tech Update',
      description: 'Latest technology trends, gadgets, and innovation news',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '25:10',
      category: 'Technology',
      plays: '2.7M',
      isPlaying: false,
      rating: 4.5
    },
    {
      id: 6,
      title: 'Entertainment World',
      description: 'Bollywood and TV industry latest news and celebrity interviews',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '40:25',
      category: 'Entertainment',
      plays: '4.2M',
      isPlaying: false,
      rating: 4.8
    }
  ];

  const categories = [
    'All', 'Politics', 'Business', 'Sports', 'Health', 'Technology', 'Entertainment'
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
          Audio - Podcasts
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Listen to expert opinions, analysis, and discussions on current topics
        </motion.p>
      </div>

      {/* Categories Filter */}
      <div className="mb-12">
        <div className="flex overflow-x-auto scrollbar-hide pb-4">
          <div className="flex space-x-4 min-w-max mx-auto">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className="px-8 py-3 rounded-full bg-white text-gray-700 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 hover:text-white transition-all duration-300 border-2 border-gray-200 hover:border-transparent whitespace-nowrap font-semibold text-lg shadow-md hover:shadow-lg"
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

      {/* Featured Podcast */}
      <motion.div 
        className="mb-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-10 text-white shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-green-500 px-4 py-2 rounded-full text-lg font-bold flex items-center space-x-2">
                <Headphones className="w-5 h-5" />
                <span>Trending</span>
              </div>
              <span className="text-lg opacity-90">2.5M+ listeners</span>
            </div>
            <h2 className="text-3xl font-bold mb-6 leading-tight">
              Today's Most Important Discussion
            </h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Expert analysis on current political and economic situation
            </p>
            <motion.button 
              className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-2xl hover:bg-white/30 transition-all text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-6 h-6" />
              <span>Listen Now</span>
            </motion.button>
          </div>
          <div className="hidden lg:block">
            <div className="w-40 h-40 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Volume2 className="w-20 h-20" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Podcasts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {podcasts.map((podcast, index) => (
          <motion.div
            key={podcast.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <div className="relative overflow-hidden">
              <img 
                src={podcast.image} 
                alt={podcast.title}
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Play Button */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-white/95 rounded-full p-5 shadow-xl backdrop-blur-sm">
                  {podcast.isPlaying ? (
                    <Pause className="w-10 h-10 text-green-600" />
                  ) : (
                    <Play className="w-10 h-10 text-green-600" />
                  )}
                </div>
              </motion.div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-4 py-2 rounded-full text-sm font-bold text-white ${
                  podcast.category === 'Politics' ? 'bg-red-500' :
                  podcast.category === 'Business' ? 'bg-blue-500' :
                  podcast.category === 'Sports' ? 'bg-green-500' :
                  podcast.category === 'Health' ? 'bg-pink-500' :
                  podcast.category === 'Technology' ? 'bg-purple-500' :
                  'bg-orange-500'
                }`}>
                  {podcast.category}
                </span>
              </div>

              {/* Duration */}
              <div className="absolute bottom-4 right-4">
                <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {podcast.duration}
                </span>
              </div>

              {/* Rating */}
              <div className="absolute top-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-bold text-gray-800">★ {podcast.rating}</span>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {podcast.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed line-clamp-2">
                {podcast.description}
              </p>
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-semibold text-gray-500">
                  {podcast.plays} plays
                </span>
                <div className="flex items-center space-x-2">
                  <motion.button 
                    className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className="w-5 h-5 text-gray-600" />
                  </motion.button>
                  <motion.button 
                    className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </motion.button>
                  <motion.button 
                    className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Download className="w-5 h-5 text-gray-600" />
                  </motion.button>
                </div>
              </div>
              
              <motion.button 
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Listen Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Audio;