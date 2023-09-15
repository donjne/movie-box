import React from 'react';
import movieData from './movieData.json'; // Data fetched from TMDB API
import movieRatings from './movieRatings.json'; // JSON file with additional ratings

const MovieCard = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {movieData.movies.map((movie) => {
        // Check if there's a rating available in the JSON file for this movie
        const additionalRating = movieRatings.ratings.find(
          (rating) => rating.imdb_id === movie.imdb_id
        );

        return (
          <div key={movie.id} className="bg-white p-4 rounded shadow">
            <img src={movie.posterUrl} alt={movie.title} className="w-full" />
            <h3 className="text-lg font-semibold">{movie.title}</h3>
            <p className="text-sm text-gray-600">{movie.releaseDate}</p>
            <p className="text-sm">
              IMDb: {additionalRating ? additionalRating.imdb_rating : movie.imdb_rating}
            </p>
            <p className="text-sm">
              Rotten Tomatoes:{' '}
              {additionalRating
                ? additionalRating.rotten_tomatoes_rating
                : movie.rotten_tomatoes_rating}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default MovieCard;
