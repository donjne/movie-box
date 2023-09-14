import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import movieData from './heromovies.json';
import Image from 'next/image';
import LogoSVG from '../public/Logo.svg';
import menu from '../public/Menu.svg';
import imdb from '../public/imdb.svg';
import tomato from '../public/tomato.svg';
import play from '../public/Play.svg'
import Link from 'next/link';

function Hero() {
  const images = movieData.movies.map((movie) => movie.backdrop_path);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeMovie, setActiveMovie] = useState(1);
  const [isInputFocused, setInputFocused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isInputFocused) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [isInputFocused]);

  const handleMovieClick = (movieId) => {
    setActiveMovie(movieId);
  };

  return (
    <div className="relative h-screen text-white">
      <motion.div
        key={currentImageIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: 'linear' }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `${images[currentImageIndex]}`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Content */}
      <div className="absolute flex lg:space-x-80 md:space-x-24 justify-between items-center text-white p-4">
        {/* Logo and Title */}
        <div className="flex items-center mb-4">
          <Image
            src={LogoSVG} // Replace with your logo image path
            alt="MovieBox Logo"
            className="w-50 h-50 mr-2"
          />
        </div>

        {/* Search Input */}
        <div className="relative w-72 mb-4">
          <input
            type="text"
            placeholder="What do you want to watch?"
            className="w-full py-2 pr-10 pl-4 bg-transparent border border-white rounded-md focus:outline-none"
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
          />
          <button><FontAwesomeIcon
            icon={faSearch}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white"
          /></button>
        </div>

        {/* Sign In */}
        <div className="flex items-center mb-4">
          <Link href="../entered" className="mr-2">Sign In</Link>
          <Image
            src={menu} // Replace with your user icon image path
            alt="User Icon"
            className="w-18 h-18"
          />
        </div>
      </div>
      <div className="absolute top-1/3 left-9">
        {/* Movie Details */}
        <div className="mb-2">
          {/* Movie Title */}
          <h1 className="text-4xl font-semibold mb-2 text-white">
            {movieData.movies[currentImageIndex].title}
          </h1>
          <div className="flex items-center gap-6">
            {/* IMDb Rating */}
            <div className="flex items-center">
              <Image
                src={imdb} // Replace with your IMDb logo image path
                alt="IMDb Logo"
                className="w-10 h-10 mx-2"
              />
              <p className="text-xl">
                {movieData.movies[currentImageIndex].imdb_rating}
              </p>
            </div>
            {/* Rotten Tomatoes Rating */}
            <div className="flex items-center">
              <Image
                src={tomato} // Replace with your Rotten Tomatoes logo image path
                alt="Rotten Tomatoes Logo"
                className="w-8 h-8 mx-2"
              />
              <span className="text-xl">
                {movieData.movies[currentImageIndex].rotten_tomatoes_rating}
              </span>
            </div>
          </div>
          {/* Description */}
          <p className="text-lg mt-4 md:w-1/3 max-sm:w-56 max-sm:text-sm">
            {movieData.movies[currentImageIndex].description}
          </p>
          {/* Watch Trailer Button */}
          <a href={movieData.movies[currentImageIndex].href} className="flex w-56 items-center font-semibold mt-4 py-2 px-6 bg-red-500 text-white rounded-full">
          <Image
                src={play} // Replace with your IMDb logo image path
                alt="IMDb Logo"
                className="w-8 h-8 mx-2"
              />
            WATCH TRAILER
          </a>
        </div>
      </div>

      {/* Movie Buttons */}
      <div className="absolute top-1/3 right-4 flex flex-col items-center space-y-2">
        {movieData.movies.map((movie) => (
          <button
            key={movie.id}
            className={`${
              currentImageIndex+ 1 === movie.id ? 'text-white' : 'text-gray-400'
            }`}
            onClick={() => handleMovieClick(movie.id)}
          >
            — {movie.id}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Hero;
