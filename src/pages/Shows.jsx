import React from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Users } from 'lucide-react';

const Shows = () => {
  const shows = [
    {
      id: 1,
      title: 'नेता नगरी',
      description: 'राजनीतिक विश्लेषण और चर्चा का कार्यक्रम',
      image: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600',
      time: '8:00 PM',
      duration: '60 मिनट',
      viewers: '2.5M'
    },
    {
      id: 2,
      title: 'गेस्ट इन द न्यूज़रूम',
      description: 'विशेष अतिथियों के साथ समसामयिक मुद्दों पर चर्चा',
      image: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=600',
      time: '9:00 PM',
      duration: '45 मिनट',
      viewers: '1.8M'
    },
    {
      id: 3,
      title: 'दी वलनटॉप शो',
      description: 'मनोरंजन और जीवनशैली का कार्यक्रम',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      time: '7:00 PM',
      duration: '30 मिनट',
      viewers: '3.2M'
    },
    {
      id: 4,
      title: 'वलनटॉप बैठकी',
      description: 'सामाजिक मुद्दों पर खुली चर्चा',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      time: '6:00 PM',
      duration: '40 मिनट',
      viewers: '1.5M'
    },
    {
      id: 5,
      title: 'सेहत',
      description: 'स्वास्थ्य और कल्याण पर केंद्रित कार्यक्रम',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600',
      time: '10:00 AM',
      duration: '25 मिनट',
      viewers: '900K'
    },
    {
      id: 6,
      title: 'बिजनेस स्टोरीज',
      description: 'व्यापारिक समाचार और विश्लेषण',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      time: '11:00 AM',
      duration: '35 मिनट',
      viewers: '1.2M'
    }
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
          हमारे शोज़
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-600 max-w-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          देश की सबसे लोकप्रिय न्यूज़ चैनल के विशेष कार्यक्रम देखें
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {shows.map((show, index) => (
          <motion.div
            key={show.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="relative">
              <img 
                src={show.image} 
                alt={show.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-white/90 rounded-full p-4 shadow-lg">
                  <Play className="w-8 h-8 text-red-600" />
                </div>
              </motion.div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center space-x-4 text-sm">
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
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {show.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {show.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  अवधि: {show.duration}
                </span>
                <motion.button 
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  देखें
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Shows;