import React from 'react';
import { movies } from '../data';

const Movies = () => {

  return (
    <div>
        {/*This component should render the text Movies Page in an <h1>, and make a new <div> for each movie. The <div> should contain the movie's title, time and a <ul> with a list of its genres.  */}
        <h1>Movies Page</h1>
        {movies.map((movie, index) => (
            <div key={index}> 
                <h3>Name: {movie.title}</h3> 
                <p>Movie Run Time: {movie.time}</p>
                <p>Genres</p>
                {movie.genres.map((genre, index) => (
                  <ul>
                    <li key={index}>{genre}</li>
                  </ul>
                ))}
            </div>))}
    </div>
  );
};

export default Movies;
