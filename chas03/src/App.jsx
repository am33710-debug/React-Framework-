import React, { useState } from 'react';

import { Movies } from './components/Movies';
import { SignUp } from './components/SignUp';

export function App() {
  const movies = [
  {
    name: "Inception",
    date: "2010-07-16",
    genre: "Sci-Fi",
    plot: "A skilled thief enters people's dreams to steal secrets, but is given a chance at redemption through an impossible mission.",
    imdbLink: "https://www.imdb.com/title/tt1375666/",
    imgUrl: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmYtYTAwMC00ZjQ5LWFmNTEtODM1ZmRlY2RhZjg4XkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "The Dark Knight",
    date: "2008-07-18",
    genre: "Action",
    plot: "Batman faces the Joker, a criminal mastermind who plunges Gotham City into chaos.",
    imdbLink: "https://www.imdb.com/title/tt0468569/",
    imgUrl: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzktYTAwMC00ZjQ5LWFmNTEtODM1ZmRlY2RhZjg4XkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Interstellar",
    date: "2014-11-07",
    genre: "Adventure",
    plot: "A team of astronauts travels through a wormhole in search of a new home for humanity.",
    imdbLink: "https://www.imdb.com/title/tt0816692/",
    imgUrl: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDUtNmQ0Yy00ZDc5LTg5NTEtNjFkYzQyYjQ5N2Y3XkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "Parasite",
    date: "2019-05-30",
    genre: "Thriller",
    plot: "A poor family schemes to work for a wealthy household, leading to unexpected consequences.",
    imdbLink: "https://www.imdb.com/title/tt6751668/",
    imgUrl: "https://m.media-amazon.com/images/M/MV5BYWZjMjM2ZTktYzQ3Zi00YTAwLTk2OTctODU5YjM0N2M3N2M4XkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "The Matrix",
    date: "1999-03-31",
    genre: "Sci-Fi",
    plot: "A hacker discovers that reality is a simulation and joins a rebellion against the machines controlling humanity.",
    imdbLink: "https://www.imdb.com/title/tt0133093/",
    imgUrl: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3NTAtNDQ0OC00ZGI2LTlkODItYzdhZTk3N2Q5N2U3XkEyXkFqcGc@._V1_.jpg"
  }
];

  return(
    <div id="app-container">
      {/* <Movies movies={movies}/> */}
      <SignUp/>
    </div>
  )
}