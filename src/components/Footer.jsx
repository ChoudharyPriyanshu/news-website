import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold">NewsChannel</span>
            </div>
            <p className="text-gray-400 text-sm">
              भारत की सबसे तेज़ और भरोसेमंद न्यूज़ वेबसाइट। हम आपको हर पल की ताज़ा खबरें प्रदान करते हैं।
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold">क्विक लिंक्स</h3>
            <ul className="space-y-2 text-gray-400">
              {['होम', 'न्यूज़', 'स्पोर्ट्स', 'मनोरंजन', 'बिजनेस', 'टेक्नोलॉजी'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold">संपर्क</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>contact@newschannel.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span>नई दिल्ली, भारत</span>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold">फॉलो करें</h3>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, color: 'hover:text-blue-500' },
                { icon: Twitter, color: 'hover:text-sky-500' },
                { icon: Instagram, color: 'hover:text-pink-500' },
                { icon: Youtube, color: 'hover:text-red-500' }
              ].map(({ icon: Icon, color }, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`text-gray-400 ${color} transition-colors`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p>&copy; 2024 NewsChannel. सभी अधिकार सुरक्षित।</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;