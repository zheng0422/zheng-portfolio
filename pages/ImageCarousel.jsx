import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import profile1 from '../public/profile1.jpg'; 
import profile2 from '../public/profile2.jpg';

const images = [profile1, profile2];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-76 md:w-76">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transform transition-opacity ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image src={image} alt={`profile ${index}`} layout="fill" objectFit="cover" />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
