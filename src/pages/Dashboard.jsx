import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkedAlt, FaImages, FaChartLine, FaCompass } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const features = [
    {
      icon: FaMapMarkedAlt,
      title: 'Travel Map Journal',
      description: 'Document your journey with interactive maps',
      link: '/map-journal',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: FaImages,
      title: 'Photo Gallery',
      description: 'Organize travel photos with location tags',
      link: '/gallery',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: FaChartLine,
      title: 'Expense Tracker',
      description: 'Monitor your travel expenses',
      link: '/expenses',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: FaCompass,
      title: 'Recommendations',
      description: 'Discover new destinations',
      link: '/recommendations',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent mb-4">
          Welcome to TravelLog
        </h1>
        <p className="text-gray-600 text-lg">
          Your personal travel companion for documenting adventures
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link to={feature.link}>
              <div className="bg-white rounded-2xl shadow-lg p-8 card-hover">
                <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <feature.icon className="text-white text-2xl" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h2>
                <p className="text-gray-600 text-lg">
                  {feature.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;