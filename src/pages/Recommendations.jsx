import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaPlane, FaHotel, FaUtensils, FaArrowRight } from 'react-icons/fa';

const Recommendations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Santorini, Greece',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff',
      rating: 4.8,
      description: 'Beautiful sunsets and white architecture',
      highlights: ['Scenic Views', 'Local Cuisine', 'Historic Sites'],
      price: '$1,200',
    },
    {
      id: 2,
      name: 'Kyoto, Japan',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
      rating: 4.7,
      description: 'Traditional temples and gardens',
      highlights: ['Cultural Sites', 'Gardens', 'Traditional Food'],
      price: '$1,500',
    },
    {
      id: 3,
      name: 'Machu Picchu, Peru',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1',
      rating: 4.9,
      description: 'Ancient Incan citadel in the Andes',
      highlights: ['History', 'Hiking', 'Mountain Views'],
      price: '$1,800',
    },
  ];

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Discover Your Next Adventure
        </h1>
        <p className="text-gray-600 text-lg">
          Handpicked destinations for unforgettable experiences
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <motion.div
            key={destination.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
          >
            <div className="relative h-56">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center shadow-lg">
                <FaStar className="text-yellow-400 mr-1" />
                <span className="font-semibold">{destination.rating}</span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{destination.name}</h3>
              <p className="text-gray-600 mb-4">{destination.description}</p>

              <div className="space-y-3 mb-6">
                {destination.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center text-gray-700">
                    {i === 0 && <FaPlane className="mr-2 text-primary-500" />}
                    {i === 1 && <FaHotel className="mr-2 text-primary-500" />}
                    {i === 2 && <FaUtensils className="mr-2 text-primary-500" />}
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary-600">
                  {destination.price}
                </span>
                <button className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                  Learn More
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;