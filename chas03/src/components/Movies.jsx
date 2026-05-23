import React from 'react';

export const Movies = ({movies}) => {
    return(
        <div id="movies-container">
            {movies.map((movie, index) => {
              return(
                <div className="movie-card" key={index}>
                  <h2>Movie {index+1}:</h2>
                  <p>{movie.name}</p>
                  <p>{movie.date}</p>
                  <p>{movie.genre}</p>
                  <p>{movie.plot}</p>
                  <a href={movie.imdbLink} target="_blank">Link to Movie on IMDb</a><br/>
                  <img src={movie.imgUrl} alt={movie.name}/>
                  <hr/>
                </div>
              )
            })}
        </div>
    )
}