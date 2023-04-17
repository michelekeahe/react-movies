// Function: Style movie cards
import React from 'react';

// 'movie' prop to pass info. like a variable
const MovieCard = ({ movie }) => {
   return (
      // Movie information. Year, title, poster, etc.
      <div className="movie">
         <div>
            <p>{movie.Year}</p>
         </div>
         <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://st4.depositphotos.com/18509294/31585/v/450/depositphotos_315855790-stock-illustration-cartoon-cow-logo-vector-mascot.jpg'} alt={movie.Title}/>
         </div>
         <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
         </div>
      </div>
   );
}

export default MovieCard;