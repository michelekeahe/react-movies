// Function: General layout and behaviors of movie app

import { useEffect, useState } from 'react';

// import styles
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';
import './App.css';

const API_URL = "http://www.omdbapi.com?apikey=f7b08724";

const App = () => {
   const [searchTerm, setSearchTerm] = useState([]);
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      searchMovies("cow"); // Default search
   }, []);

   // Search for movies
   const searchMovies = async (title) => {
      // Search API
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      setMovies(data.Search);
   };

   return (
      // Title
      <div className="app">
         <div className="title">
            <img src="https://cdn-icons-png.flaticon.com/512/2395/2395765.png" width="15%"></img>
            <h1>Moo-vies</h1>
         </div>
         
         {/* Search Bar & Icon */}
         <div className="search">
            <input
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               placeholder="Search for movies"
            />
            <img
               src={SearchIcon}
               alt="search"
               onClick={() => searchMovies(searchTerm)}
            />
         </div>

         {/* Display movies if matches found */}
         { movies?.length > 0 ?  (
            <div className="container"> 
               {/* Navigate over movies array*/}
               {movies.map((movie) => (
                  <MovieCard movie={movie}/>
               ))}
            </div>
         ) : (
            <div className="empty">
               <h2>No movies found</h2>
            </div>
         )}
      </div>
   );
};

export default App; // gotta export each component so we can call them