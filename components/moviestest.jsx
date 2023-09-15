import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

function movies() {
  const router = useRouter();
  const { id } = router.query;

  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch movie details using the TMDb API (replace with your API key)
      const apiKey = 'YOUR_TMDB_API_KEY';
      const baseUrl = 'https://api.themoviedb.org/3';
      
      axios
        .get(`${baseUrl}/movie/${id}`, {
          params: {
            api_key: apiKey,
            language: 'en-US',
          },
        })
        .then((response) => {
          setMovieDetails(response.data);
        })
        .catch((error) => {
          console.error('Error fetching movie details:', error);
        });
    }
  }, [id]);

  return (
    <>
      <Head>
        <title>Movie Details</title>
        <meta name="description" content="Movie details page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-5 h-screen w-screen">
        {/* Side Section */}
        <div
          className="bg-[#ffffff] p-4 border-r border-gray-500 col-span-1 rounded-r-3xl"
        >
          <div className='flex justify-center items-center mb-6 gap-2'>
          <Image className="w-10 h-10"
            src={LogoJPG} 
            alt="logo"
          />
          <h1 className='font-bold text-2xl'>MovieBox</h1>
          </div>
          <NavMenu />
          <div className="text-1xl text-white p-3">
            <SomeWords />
          </div>
          <div className="flex hover:bg-[#ffd1d1] text-black h-[50px] p-6 rounded-md justify-between items-center">
            <Logout />
          </div>
        </div>
        
        {/* Main Dashboard Section */}
        <div className="col-span-4 p-6">
          {movieDetails ? (
            <div>
              {/* Movie Title */}
              <h1 data-testid="movie-title" className="text-4xl font-semibold">
                {movieDetails.title}
              </h1>
              
              {/* Release Date, Runtime */}
              <div className="flex justify-between items-center">
                <p data-testid="movie-release-date" className="text-lg">
                  Release Date (UTC): {movieDetails.release_date}
                </p>
                <p data-testid="movie-runtime" className="text-lg">
                  Runtime: {movieDetails.runtime} minutes
                </p>
              </div>

              {/* Overview */}
              <p data-testid="movie-overview" className="text-lg mt-4">
                {movieDetails.overview}
              </p>

              {/* Movie Details Container */}
              <div className="mt-4">
                {/* Description */}
                <div className="mb-4">
                  {/* ... (Description content) */}
                </div>

                {/* Director */}
                <div className="mb-2">
                  <p>Director: name1, name2, name3</p>
                </div>

                {/* Writers */}
                <div className="mb-2">
                  <p>Writers: name1, name2, name3</p>
                </div>

                {/* Stars */}
                <div className="mb-2">
                  <p>Stars: name1, name2, name3</p>
                </div>

                {/* Links */}
                <div className="flex justify-between items-center">
                {/* Top Rated Link */}
                <Link href="#">
                    <a className="bg-red-500 text-white rounded-full px-4 py-2">
                    Top rated #
                    </a>
                </Link>

                {/* Awards Nominations Link */}
                <div className="relative group">
                    <Link href="#">
                    <a className="bg-white text-black rounded-full px-4 py-2 flex items-center group-hover:bg-[#ffd1d1]">
                        Awards nominations
                        <span className="ml-2">▼</span>
                    </a>
                    </Link>
                    {/* Awards Dropdown */}
                    <div className="hidden group-hover:block absolute left-0 top-10 bg-white shadow-md py-2 px-4 rounded-md">
                    {/* Awards content */}
                    <p>Award 1: Award name</p>
                    <p>Award 2: Award name</p>
                    {/* ... Add more awards */}
                    </div>
                </div>
                </div>

                {/* See Showtimes Button */}
                <Link href="#">
                <a className="bg-red-500 text-white rounded-full px-4 py-2 mt-4 block">
                    See Showtimes
                </a>
                </Link>

                {/* More Watch Options Button */}
                <Link href="#">
                <a className="bg-pink-500 text-white rounded-full px-4 py-2 mt-4 block">
                    More Watch Options
                </a>
                </Link>
                {/* Best Movies and Shows Container */}
                <div className="mt-4">
                <p className="text-xl font-semibold">
                    The best movies and shows in September
                </p>
                {/* Movie Posters Grid */}
                <div className="grid grid-cols-3 gap-4 mt-2">
                    {/* Use slice to ensure only the first 3 movies are displayed */}
                    {topMovies.slice(0, 3).map((movie) => (
                    <div className="relative group" key={movie.id}>
                        <Image
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt={movie.title}
                        width={300}
                        height={450}
                        className="rounded-lg"
                        />
                        {/* Poster Overlay */}
                        <div className="hidden group-hover:block absolute inset-0 bg-[rgba(0,0,0,0.6)] rounded-lg flex items-center justify-center">
                        <Link href={`/movies/${movie.id}`}>
                            <a className="text-white font-semibold">View Details</a>
                        </Link>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
                </div>
                </main>
                </>
          )
                    }
                    export default movies

