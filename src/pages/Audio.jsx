import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, Download, Heart, Share2 } from 'lucide-react';

const Audio = () => {
  const podcasts = [
    {
      id: 1,
      title: 'राजनीति की बात',
      description: 'देश की राजनीतिक स्थिति पर गहरी चर्चा',
      image: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '45:30',
      category: 'राजनीति',
      plays: '2.3M',
      isPlaying: false
    },
    {
      id: 2,
      title: 'आर्थिक समीक्षा',
      description: 'बाजार की स्थिति और निवेश की सलाह',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '32:15',
      category: 'बिजनेस',
      plays: '1.8M',
      isPlaying: false
    },
    {
      id: 3,
      title: 'खेल जगत की खबरें',
      description: 'क्रिकेट और अन्य खेलों की ताज़ा अपडेट्स',
      image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '28:45',
      category: 'स्पोर्ट्स',
      plays: '3.1M',
      isPlaying: false
    },
    {
      id: 4,
      title: 'स्वास्थ्य सलाह',
      description: 'डॉक्टरों से स्वास्थ्य संबंधी सुझाव',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '35:20',
      category: 'स्वास्थ्य',
      plays: '1.5M',
      isPlaying: false
    },
    {
      id: 5,
      title: 'टेक्नोलॉजी अपडेट',
      description: 'नई तकनीक और गैजेट्स की जानकारी',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '25:10',
      category: 'टेक्नोलॉजी',
      plays: '2.7M',
      isPlaying: false
    },
    {
      id: 6,
      title: 'मनोरंजन की दुनिया',
      description: 'बॉलीवुड और टीवी की ताज़ा खबरें',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '40:25',
      category: 'मनोरंजन',
      plays: '4.2M',
      isPlaying: false
    }
  ];

  const categories = [
    'सभी', 'राजनीति', 'बिजनेस', 'स्पोर्ट्स', 'स्वास्थ्य', 'टेक्नोलॉजी', 'मनोरंजन'
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
          ऑडियो - पॉडकास्ट्स
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-600 max-w-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          विशेषज्ञों की राय, विश्लेषण और चर्चा सुनें
        </motion.p>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <div className="flex overflow-x-auto scrollbar-hide pb-2">
          <div className="flex space-x-3 min-w-max">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className="px-6 py-2 rounded-full bg-white text-gray-700 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 hover:text-white transition-all duration-300 border border-gray-200 whitespace-nowrap font-medium"
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

      {/* Featured Podcast */}
      <motion.div 
        className="mb-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-500 px-3 py-1 rounded-full text-sm font-bold">
                🎧 ट्रेंडिंग
              </div>
              <span className="text-sm opacity-90">2.5M+ सुनने वाले</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">
              आज की सबसे महत्वपूर्ण चर्चा
            </h2>
            <p className="text-lg opacity-90 mb-6">
              देश की राजनीतिक और आर्थिक स्थिति पर विशेषज्ञों की राय
            </p>
            <motion.button 
              className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5" />
              <span className="font-medium">सुनें</span>
            </motion.button>
          </div>
          <div className="hidden md:block">
            <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
              <Volume2 className="w-16 h-16" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Podcasts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {podcasts.map((podcast, index) => (
          <motion.div
            key={podcast.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="relative">
              <img 
                src={podcast.image} 
                alt={podcast.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Play Button */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-white/90 rounded-full p-4 shadow-lg">
                  {podcast.isPlaying ? (
                    <Pause className="w-8 h-8 text-green-600" />
                  ) : (
                    <Play className="w-8 h-8 text-green-600" />
                  )}
                </div>
              </motion.div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  podcast.category === 'राजनीति' ? 'bg-red-500 text-white' :
                  podcast.category === 'बिजनेस' ? 'bg-blue-500 text-white' :
                  podcast.category === 'स्पोर्ट्स' ? 'bg-green-500 text-white' :
                  podcast.category === 'स्वास्थ्य' ? 'bg-pink-500 text-white' :
                  podcast.category === 'टेक्नोलॉजी' ? 'bg-purple-500 text-white' :
                  'bg-orange-500 text-white'
                }`}>
                  {podcast.category}
                </span>
              </div>

              {/* Duration */}
              <div className="absolute bottom-4 right-4">
                <span className="bg-black/70 text-white px-2 py-1 rounded text-xs font-semibold">
                  {podcast.duration}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {podcast.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {podcast.description}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">
                  {podcast.plays} plays
                </span>
                <div className="flex items-center space-x-2">
                  <motion.button 
                    className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className="w-4 h-4 text-gray-600" />
                  </motion.button>
                  <motion.button 
                    className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Share2 className="w-4 h-4 text-gray-600" />
                  </motion.button>
                  <motion.button 
                    className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Download className="w-4 h-4 text-gray-600" />
                  </motion.button>
                </div>
              </div>
              
              <motion.button 
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                सुनें
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Audio;