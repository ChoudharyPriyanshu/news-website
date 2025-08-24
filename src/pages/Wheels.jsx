import React from 'react';
import { motion } from 'framer-motion';
import { Car, Zap, Fuel, Users, Calendar, TrendingUp } from 'lucide-react';

const Wheels = () => {
  const carNews = [
    {
      id: 1,
      title: 'New Maruti Suzuki Swift 2024 Launch: Price and Features Revealed',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Launch',
      date: '2 days ago',
      price: 'Starting from $8,500',
      trending: true
    },
    {
      id: 2,
      title: 'Tesla Model 3 Coming to India Soon: Electric Revolution Begins',
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Electric',
      date: '1 day ago',
      price: 'Expected $52,000',
      trending: true
    },
    {
      id: 3,
      title: 'Mahindra Thar 5-Door Spotted: First Look at the Extended Version',
      image: 'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Upcoming',
      date: '3 days ago',
      price: 'Expected $19,500',
      trending: false
    },
    {
      id: 4,
      title: 'Honda City Hybrid Testing in India: Exceptional Fuel Economy Expected',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Hybrid',
      date: '4 days ago',
      price: 'Expected $15,600',
      trending: false
    },
    {
      id: 5,
      title: 'Royal Enfield Himalayan 450 Review: The New Adventure King',
      image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Motorcycle',
      date: '5 days ago',
      price: '$3,600',
      trending: false
    },
    {
      id: 6,
      title: 'Hyundai Creta Facelift 2024: Updated Design and New Features',
      image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Facelift',
      date: '1 week ago',
      price: 'Starting from $14,300',
      trending: false
    }
  ];

  const categories = [
    { name: 'All', icon: Car, count: 156, color: 'bg-blue-500' },
    { name: 'Electric', icon: Zap, count: 45, color: 'bg-green-500' },
    { name: 'Petrol', icon: Fuel, count: 89, color: 'bg-orange-500' },
    { name: 'SUV', icon: Users, count: 67, color: 'bg-purple-500' }
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
          Wheels - Auto News
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Latest updates from the automotive world - cars, bikes, reviews, and launch updates
        </motion.p>
      </div>

      {/* Categories Filter */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={category.name}
                className={`flex items-center space-x-3 ${category.color} text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="w-6 h-6" />
                <span className="font-semibold text-lg">{category.name}</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">
                  {category.count}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {carNews.map((news, index) => (
          <motion.div
            key={news.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <div className="relative overflow-hidden">
              <img 
                src={news.image} 
                alt={news.title}
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-4 py-2 rounded-full text-sm font-bold text-white ${
                  news.category === 'Electric' ? 'bg-green-500' :
                  news.category === 'Launch' ? 'bg-blue-500' :
                  news.category === 'Upcoming' ? 'bg-orange-500' :
                  news.category === 'Hybrid' ? 'bg-purple-500' :
                  news.category === 'Motorcycle' ? 'bg-red-500' :
                  'bg-gray-500'
                }`}>
                  {news.category}
                </span>
              </div>

              {/* Trending Badge */}
              {news.trending && (
                <div className="absolute top-4 right-4">
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-bold">Trending</span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight line-clamp-2">
                {news.title}
              </h3>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2 text-gray-500">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">{news.date}</span>
                </div>
                <span className="text-2xl font-bold text-green-600">
                  {news.price}
                </span>
              </div>
              
              <motion.button 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Read Full Story
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Wheels;