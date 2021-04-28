import React from 'react';

import { MovieCard, MovieInformation, MovieImage, MovieOverview, MovieTitle } from './style';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const setVoteClass = (vote) => {
  if(vote >= 8) {
    return 'green';
  } else if(vote >= 6) {
    return 'orange';
  } else {
    return 'red'
  }
} 

const Movie = ({title, poster_path, overview, vote_average}) => ( 
    <MovieCard>
      <MovieImage src={poster_path ? IMG_API + poster_path : 'https://images.unsplash.com/photo-1512070679279-8988d32161be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=978&q=80'} alt={title}/>
      <MovieInformation>
        <MovieTitle>{title}</MovieTitle>
        <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
      </MovieInformation>

      <MovieOverview>
        <h2>Overview:</h2>
        <p>{overview}</p>
      </MovieOverview>
    </MovieCard>
)

export default Movie;