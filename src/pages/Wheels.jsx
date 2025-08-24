import React from 'react';
import { motion } from 'framer-motion';
import { Car, Zap, Fuel, Users, Calendar } from 'lucide-react';

const Wheels = () => {
  const carNews = [
    {
      id: 1,
      title: 'नई Maruti Suzuki Swift 2024 लॉन्च, जानें कीमत और फीचर्स',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'लॉन्च',
      date: '2 दिन पहले',
      price: '₹6.5 लाख से शुरू'
    },
    {
      id: 2,
      title: 'Tesla Model 3 भारत में जल्द, इलेक्ट्रिक कार की दुनिया में नया दौर',
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'इलेक्ट्रिक',
      date: '1 दिन पहले',
      price: '₹40 लाख (अनुमानित)'
    },
    {
      id: 3,
      title: 'Mahindra Thar 5-Door की तस्वीरें आईं सामने, देखें कैसा दिखेगा',
      image: 'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'अपकमिंग',
      date: '3 दिन पहले',
      price: '₹15 लाख (अनुमानित)'
    },
    {
      id: 4,
      title: 'Honda City Hybrid भारत में टेस्टिंग, मिलेगी शानदार माइलेज',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'हाइब्रिड',
      date: '4 दिन पहले',
      price: '₹12 लाख (अनुमानित)'
    },
    {
      id: 5,
      title: 'Royal Enfield Himalayan 450 रिव्यू: एडवेंचर का नया राजा',
      image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'बाइक',
      date: '5 दिन पहले',
      price: '₹2.8 लाख'
    },
    {
      id: 6,
      title: 'Hyundai Creta Facelift 2024: नए लुक के साथ आएगी अपडेटेड Creta',
      image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'फेसलिफ्ट',
      date: '1 सप्ताह पहले',
      price: '₹11 लाख से शुरू'
    }
  ];

  const categories = [
    { name: 'सभी', icon: Car, count: 156 },
    { name: 'इलेक्ट्रिक', icon: Zap, count: 45 },
    { name: 'पेट्रोल', icon: Fuel, count: 89 },
    { name: 'SUV', icon: Users, count: 67 }
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
          पहिए - ऑटो न्यूज़
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-600 max-w-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          कारों और बाइकों की दुनिया की ताज़ा खबरें, रिव्यू और लॉन्च अपडेट्स
        </motion.p>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-4">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={category.name}
                className="flex items-center space-x-2 bg-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-gray-700">{category.name}</span>
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold">
                  {category.count}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {carNews.map((news, index) => (
          <motion.div
            key={news.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="relative">
              <img 
                src={news.image} 
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  news.category === 'इलेक्ट्रिक' ? 'bg-green-500 text-white' :
                  news.category === 'लॉन्च' ? 'bg-blue-500 text-white' :
                  news.category === 'अपकमिंग' ? 'bg-orange-500 text-white' :
                  news.category === 'हाइब्रिड' ? 'bg-purple-500 text-white' :
                  news.category === 'बाइक' ? 'bg-red-500 text-white' :
                  'bg-gray-500 text-white'
                }`}>
                  {news.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight">
                {news.title}
              </h3>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 text-gray-500 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{news.date}</span>
                </div>
                <span className="text-lg font-bold text-green-600">
                  {news.price}
                </span>
              </div>
              
              <motion.button 
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                पूरी खबर पढ़ें
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Wheels;