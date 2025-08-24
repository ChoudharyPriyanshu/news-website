import React from 'react';
import { motion } from 'framer-motion';
import NewsCard from './NewsCard';

const NewsGrid = () => {
  const newsItems = [
    {
      id: 1,
      title: 'जेलेस्की को शोधा दे रहे टंप रूसी मिश्राइल मार रही, लेकिन पुत्तिन ये नहीं कर पा रहा, पता है क्यों?',
      image: 'https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'अंतर्राष्ट्रीय',
      time: '3 घंटे पहले',
      isVideo: true
    },
    {
      id: 2,
      title: 'स्कोपियो दी, बुलेट दी, फिर भी निक्की को जलाकर मार डाला... बहन ने सुनाई आपबीती',
      image: 'https://images.pexels.com/photos/97050/pexels-photo-97050.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'क्राइम',
      time: '4 घंटे पहले',
      isVideo: true
    },
    {
      id: 3,
      title: 'चेतक पुजारा न इडियन क्रिकेट के सभी फॉर्मेट से लिया संन्यास, बोले- हर अच्छी चीज का एक अंत होता है...',
      image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'स्पोर्ट्स',
      time: '5 घंटे पहले',
      isVideo: false
    },
    {
      id: 4,
      title: 'नरी ने उपकने वाले के ऊपर लगा दी छलांग, पीछे की नजह पता चलने पर हर कोई कर रहा सलाम',
      image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpg?auto=compress&cs=tinysrgb&w=400',
      category: 'वायरल',
      time: '6 घंटे पहले',
      isVideo: true
    },
    {
      id: 5,
      title: 'एक मेच तो जरूरी...\' अभी रह गई पुजारा की इच्छा, नहीं मिला ऑन-फील्ड रिटायरमेंट का मौका',
      image: 'https://images.pexels.com/photos/262506/pexels-photo-262506.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'स्पोर्ट्स',
      time: '7 घंटे पहले',
      isVideo: false
    },
    {
      id: 6,
      title: 'बेईजान से दुखान, कुत्ते को बुरी तरह पीटा, फिर बाइक से बांधकर कई किमी तक घसीटा',
      image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'सोशल',
      time: '8 घंटे पहले',
      isVideo: true
    }
  ];

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {newsItems.map((news, index) => (
        <motion.div
          key={news.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <NewsCard news={news} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default NewsGrid;