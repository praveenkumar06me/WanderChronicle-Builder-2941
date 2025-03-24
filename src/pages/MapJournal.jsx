import React, { useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import { motion } from 'framer-motion';

const MapJournal = () => {
  const mapOption = {
    backgroundColor: '#fff',
    title: {
      text: 'My Travel Journal',
      left: 'center',
      top: 20
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}'
    },
    visualMap: {
      min: 0,
      max: 100,
      text: ['High', 'Low'],
      realtime: false,
      calculable: true,
      inRange: {
        color: ['#313695', '#4575b4', '#74add1', '#abd9e9']
      }
    },
    series: [{
      name: 'Countries Visited',
      type: 'map',
      map: 'world',
      roam: true,
      emphasis: {
        label: {
          show: true
        }
      },
      data: [
        { name: 'United States', value: 100 },
        { name: 'France', value: 80 },
        { name: 'Japan', value: 70 },
        { name: 'Italy', value: 60 },
      ]
    }]
  };

  useEffect(() => {
    // Load world map data
    fetch('https://raw.githubusercontent.com/apache/echarts/master/map/json/world.json')
      .then(response => response.json())
      .then(data => {
        window.echarts.registerMap('world', data);
      });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <div className="h-screen-90">
        <ReactECharts
          option={mapOption}
          style={{ height: '100%', width: '100%' }}
        />
      </div>
    </motion.div>
  );
};

export default MapJournal;