import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import NavMenu from "../components/NavMenu";
import SomeWords from "../components/SomeWords";
import LogoJPG from "../public/Logo.png";
import { Logout } from "../components/Logout";
import tickets from "../public/Two-Tickets.svg";

function movies() {
  const [movieDetails, setMovieDetails] = useState([]);


  useEffect(() => {
    // Fetch movie details using the TMDb API (replace with your API key)
    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    const baseUrl = "https://api.themoviedb.org/3";

    axios
      .get(`${baseUrl}/movie/top_rated`, {
        params: {
          api_key: apiKey,
          language: "en-US",
        },
      })
      .then((response) => {
        const movieDetails = response.data.results.slice(0, 1).map((movie) => ({
          ...movie,
          imdb_id: movie.id, // inserting imdb_id trial
        }));
        setMovieDetails(movieDetails);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Movie Details</title>
        <meta name="description" content="Movie details page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-5 h-screen w-screen">
        {/* Side Section */}
        <div className="bg-[#ffffff] p-4 border-r border-gray-500 col-span-1 rounded-r-3xl">
          <div className="flex justify-center items-center mb-6 gap-2">
            <Image className="w-10 h-10" src={LogoJPG} alt="logo" />
            <h1 className="font-bold text-2xl">MovieBox</h1>
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
        <div className="col-span-4 p-6 overflow-y-scroll">
          {movieDetails.map((movie) => (
            <div key={movie.id}>
              {/* Movie Title */}
              <h1
                data-testid="movie-title"
                className="text-4xl font-semibold text-gray-700"
              >
                {movie.title}
              </h1>

              {/* Release Date, Runtime */}
              <div className="flex justify-between items-center">
                <p
                  data-testid="movie-release-date"
                  className="text-lg text-gray-700"
                >
                  Release Date (UTC): {movie.release_date}
                </p>
                <p
                  data-testid="movie-runtime"
                  className="text-lg text-gray-700"
                >
                  Runtime: {movie.runtime}175 minutes
                </p>
              </div>

              {/* Overview */}
              <p
                data-testid="movie-overview"
                className="text-lg mt-4 text-gray-600"
              >
                {movie.overview}
              </p>

              {/* Movie Details Container */}
              <div className="mt-4 text-gray-500">
                {/* Director */}
                <div className="mb-2">
                  <p>Director : Francis Ford Coppola</p>
                </div>

                {/* Writers */}
                <div className="mb-2">
                  <p>Writers : Mario Puzo</p>
                </div>

                {/* Stars */}
                <div className="mb-2">
                  <p>
                    Stars : Marlon Brando, Anthony Gounaris, Morgana King, Al
                    Martino
                  </p>
                </div>

                {/* Links */}
                <div className="flex justify-between items-center border border-gray-500 rounded w-96">
                  {/* Top Rated Link */}
                  <Link
                    href="#"
                    className="bg-red-700 text-white rounded px-4 py-2 border border-red-700"
                  >
                    Top rated #1
                  </Link>

                  {/* Awards Nominations Link */}
                  <div className="relative group">
                    <Link
                      href="#"
                      className="bg-white text-black rounded px-4 py-2 flex items-center group-hover:bg-[#ffd1d1]"
                    >
                      Awards 11 nominations
                      <span className="ml-2">▼</span>
                    </Link>
                    {/* Awards Dropdown */}
                    <div className="hidden group-hover:block absolute left-0 top-10 bg-white shadow-md py-2 px-4 rounded-md">
                      {/* Awards content */}
                      <p>Golden Globe Award for Best Original Score</p>
                      <p>Academy Awards for Best Production Design</p>
                      <p>Academy Awards for Best Directing...</p>
                      {/* ... Add more awards */}
                    </div>
                  </div>
                </div>

                {/* See Showtimes Button */}
                <div className="flex items-center bg-red-700 w-52 rounded px-4 py-2 mt-4 font-semibold">
                  <Image
                    src={tickets}
                    alt="MovieBox Logo"
                    className="w-8 h-8 mr-2"
                  />
                  <Link href="#" className=" text-white block text-center">
                    See Showtimes
                  </Link>
                </div>
                {/* More Watch Options Button */}
                <div className="flex justify-between bg-[#ffd1d1] items-center w-52 rounded  px-4 py-2 mt-4 font-semibold">
                  <img src="List-white.png" alt="list-white"/>
                  <Link
                    href="#"
                    className="text-gray-700 block text-center"
                  >
                    More watch options
                  </Link>
                </div>
                {/* Best Movies and Shows Container */}
                <div className="mt-4">
                  {/* Movie Posters Grid */}
                  <div className="grid grid-cols-3 gap-4 mt-2">
                    {/* Use slice to ensure only the first 3 movies are displayed */}
                    {movieDetails.map((movie) => (
                      <div className="relative group" key={movie.id}>
                        <img
                          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                          alt={movie.title}
                          width={100}
                          height={450}
                          className="rounded-lg"
                        />
                        {/* Poster Overlay */}
                        <div className="h-10 top-28 absolute inset-0 bg-[rgba(0,0,0,0.6)] rounded-lg flex items-center justify-around">
                          <img src="List-white.png" alt="list-white" className="w-5 h-5"/>
                          <Link
                            href={`/movies/${movie.id}`}
                            className="text-white font-semibold text-sm"
                          >
                            The Best Movies and Shows in September
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default movies;
