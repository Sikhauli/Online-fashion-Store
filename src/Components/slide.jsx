

import '../Style/slide.css';
import React, { useState, useEffect } from 'react';

const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="slideshow">
            {images.map((image, index) => (
                <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
                    <img src={image} alt={`Slide ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default Slideshow;
