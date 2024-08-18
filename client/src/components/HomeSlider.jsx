import React, { useState, useEffect } from 'react';
import homeslider1 from '../images/homeslider1.jpg';
import homeslider2 from '../images/homeslider2.jpg';
import homeslider3 from '../images/homeslider3.jpg';
import homeslider4 from '../images/homeslider4.jpg';
import homeslider5 from '../images/homeslider5.jpg';
function HomeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [homeslider1, homeslider2, homeslider3, homeslider4, homeslider5];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, );

  return (
    <div className="relative overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <img src={image} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
      <button 
        onClick={prevSlide} 
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent text-white p-4 text-3xl rounded-full shadow-lg">
        &#10094;
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent text-white p-4 text-3xl rounded-full shadow-lg">
        &#10095;
      </button>
    </div>
  );
}

export default HomeSlider;
