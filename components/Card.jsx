// Card.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Card = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    // Define your TMDB API key and base URL
    const apiKey = 'YOUR_API_KEY';
    const baseUrl = 'https://api.themoviedb.org/3';

    // Fetch the top-rated movies
    axios
      .get(`${baseUrl}/movie/top_rated`, {
        params: {
          api_key: apiKey,
          language: 'en-US',
          page: 1,
        },
      })
      .then((response) => {
        // Get the top 10 movies
        const top10Movies = response.data.results.slice(0, 10);
        setTopMovies(top10Movies);
      })
      .catch((error) => {
        console.error('Error fetching top movies:', error);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Top 10 Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {topMovies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-48 object-cover"
            />
            <div className="px-4 py-2">
              <h2 className="text-lg font-semibold">{movie.title}</h2>
              <p className="text-sm text-gray-600">
                Release Date: {movie.release_date}
              </p>
              {/* You can add IMDb and Rotten Tomatoes ratings here if available */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;