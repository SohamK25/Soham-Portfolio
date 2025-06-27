// components/DaySky.js
import React, { useEffect, useState } from 'react';

const generateClouds = () => {
  const cloudCount = 4;
  return Array.from({ length: cloudCount }, (_, i) => ({
    id: i,
    top: `${Math.random() * 60 + 10}%`,
    left: `${Math.random() * 80}%`,
    size: Math.random() * 100 + 150,
    duration: Math.random() * 20 + 30,
    delay: Math.random() * 10,
  }));
};

const DaySky = () => {
  const [clouds, setClouds] = useState([]);

  useEffect(() => {
    setClouds(generateClouds());
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-gradient-to-b from-sky-200 to-white">
      {/* Sun */}
      <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-yellow-300 shadow-[0_0_60px_20px_rgba(255,223,0,0.4)]"></div>

      {/* Clouds */}
      {clouds.map(cloud => (
        <div
          key={cloud.id}
          className="absolute rounded-full bg-white/20 opacity-40 blur-2xl animate-cloud"
          style={{
            top: cloud.top,
            left: cloud.left,
            width: cloud.size,
            height: cloud.size * 0.6,
            animationDuration: `${cloud.duration}s`,
            animationDelay: `${cloud.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default DaySky;
