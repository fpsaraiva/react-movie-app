import React, { useEffect, useState } from "react";

import Movie from '../../components/Movie';

import { HeaderBackground, HeaderInput, MovieContainer } from './style';

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&page=1`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query="`;

export default function Home() {
  document.title = 'React Movie App | Home';

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (FEATURED_API) => {
    fetch(FEATURED_API)
      .then(res => res.json())
      .then(data => {setMovies(data.results)});
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {
      getMovies(SEARCH_API+searchTerm);
      setSearchTerm("");
    }
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <HeaderBackground>
        <form onSubmit={handleOnSubmit}>
          <HeaderInput type="search" placeholder="Search" value={searchTerm} onChange={handleOnChange}/>
        </form>
      </HeaderBackground>
      <MovieContainer>
        {movies.length > 0 && movies.map(movie => (
          <Movie key={movie.id} {...movie} />
        ))}
      </MovieContainer>
    </div>
  )
}
