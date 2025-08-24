import React from 'react';
import { motion } from 'framer-motion';
import NewsCard from './NewsCard';

const NewsGrid = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Ukraine Crisis: Latest Updates on International Diplomatic Efforts and Peace Negotiations',
      image: 'https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'International',
      time: '3 hours ago',
      isVideo: true
    },
    {
      id: 2,
      title: 'Crime Investigation: Major Breakthrough in High-Profile Case with New Evidence',
      image: 'https://images.pexels.com/photos/97050/pexels-photo-97050.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Crime',
      time: '4 hours ago',
      isVideo: true
    },
    {
      id: 3,
      title: 'Cricket Legend Announces Retirement from All Formats: End of an Era in Indian Cricket',
      image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Sports',
      time: '5 hours ago',
      isVideo: false
    },
    {
      id: 4,
      title: 'Viral Video: Heroic Act Goes Viral as Woman Saves Child from Danger',
      image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpg?auto=compress&cs=tinysrgb&w=400',
      category: 'Viral',
      time: '6 hours ago',
      isVideo: true
    },
    {
      id: 5,
      title: 'Sports Update: Veteran Player Reflects on Career and Future Plans',
      image: 'https://images.pexels.com/photos/262506/pexels-photo-262506.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Sports',
      time: '7 hours ago',
      isVideo: false
    },
    {
      id: 6,
      title: 'Animal Rights: Investigation into Animal Cruelty Case Sparks Public Outrage',
      image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Social',
      time: '8 hours ago',
      isVideo: true
    }
  ];

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-10"
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