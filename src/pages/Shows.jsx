import React from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Users, Star } from 'lucide-react';

const Shows = () => {
  const shows = [
    {
      id: 1,
      title: 'Prime Time News',
      description: 'In-depth analysis of current political affairs and breaking news coverage',
      image: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600',
      time: '8:00 PM',
      duration: '60 minutes',
      viewers: '2.5M',
      rating: 4.8
    },
    {
      id: 2,
      title: 'Guest Newsroom',
      description: 'Exclusive interviews with special guests discussing current issues',
      image: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=600',
      time: '9:00 PM',
      duration: '45 minutes',
      viewers: '1.8M',
      rating: 4.6
    },
    {
      id: 3,
      title: 'The Morning Show',
      description: 'Start your day with the latest news, weather, and lifestyle updates',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      time: '7:00 AM',
      duration: '120 minutes',
      viewers: '3.2M',
      rating: 4.9
    },
    {
      id: 4,
      title: 'Business Today',
      description: 'Market analysis, investment tips, and business news coverage',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      time: '6:00 PM',
      duration: '40 minutes',
      viewers: '1.5M',
      rating: 4.5
    },
    {
      id: 5,
      title: 'Health Focus',
      description: 'Health and wellness program with expert medical advice',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600',
      time: '10:00 AM',
      duration: '30 minutes',
      viewers: '900K',
      rating: 4.7
    },
    {
      id: 6,
      title: 'Sports Central',
      description: 'Complete sports coverage with highlights and expert analysis',
      image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600',
      time: '11:00 PM',
      duration: '45 minutes',
      viewers: '2.1M',
      rating: 4.8
    }
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
          Our Shows
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Watch the most popular news programs with expert analysis and exclusive coverage
        </motion.p>
      </div>

      {/* Shows Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {shows.map((show, index) => (
          <motion.div
            key={show.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <div className="relative overflow-hidden">
              <img 
                src={show.image} 
                alt={show.title}
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Play Button */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-white/95 rounded-full p-4 shadow-xl backdrop-blur-sm">
                  <Play className="w-8 h-8 text-red-600" />
                </div>
              </motion.div>

              {/* Rating Badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold text-gray-800">{show.rating}</span>
                </div>
              </div>

              {/* Show Stats */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between text-white text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{show.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{show.viewers}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                {show.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed line-height-7">
                {show.description}
              </p>
              
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  Duration: {show.duration}
                </span>
              </div>
              
              <motion.button 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl text-lg font-semibold hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Watch Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Shows;