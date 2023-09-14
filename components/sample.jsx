import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpeg";
import b4 from "../assets/b4.jpg";
import b6 from "../assets/b6.jpg";

const images = [b1, b2, b3, b4, b6];

const Body = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isInputFocused, setInputFocused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isInputFocused) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [isInputFocused]);

  return (
    <div className="relative h-96">
      <motion.div
        key={currentImageIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "linear" }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="py-2 pr-10 pl-4 bg-gray-300 rounded-full focus:outline-none"
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
          />
          <button>
            <i className="bx bx-search-alt text-gray-800 text-xl absolute right-3 bottom-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;