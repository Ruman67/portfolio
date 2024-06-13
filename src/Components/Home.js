import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import images from './images/ruman.jpeg'; // Updated import path
import './About/About.css';
import './Contact/Contact.css';
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["I am a Coder", "I am a Designer","I am a Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="home-container">
      <motion.div 
        className="text-container"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        key={textIndex} // This key ensures Framer Motion re-renders the component
      >
        <h1>{texts[textIndex]}</h1>
      </motion.div>
      <div className="image-container">
        <img src={images} alt="Rum"/>
      </div>
    </div>
  );
}

export default Home;
