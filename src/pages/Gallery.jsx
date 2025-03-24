import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';

const Gallery = () => {
  const [photos] = useState([
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d',
      location: 'Paris, France',
      date: '2024-02-15',
      title: 'Eiffel Tower at Sunset'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
      location: 'Rome, Italy',
      date: '2024-01-20',
      title: 'Roman Colosseum'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1480796927426-f609979314bd',
      location: 'Tokyo, Japan',
      date: '2023-12-10',
      title: 'Cherry Blossoms in Tokyo'
    },
  ]);

  return (
    <div className="container mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-800 mb-8 text-center"
      >
        Travel Memories
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
          >
            <div className="relative h-72">
              <img
                src={photo.url}
                alt={photo.location}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">{photo.title}</h3>
                  <div className="flex items-center text-white/90 space-x-4">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{photo.location}</span>
                    </div>
                    <div className="flex items-center">
                      <FaCalendar className="mr-2" />
                      <span>{photo.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Gallery;