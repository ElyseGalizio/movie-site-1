import React from "react";
import axios from "axios";
import './MovieList.css';
import MovieCard from "../MovieCard/MovieCard";


//if time: 
//add search function
//add buttons to switch between popular movies and top rated movies -OR- links in navbar
function MovieList() {
  const [movies, setMovies] = React.useState([])

  React.useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = () => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=dc0fb7b28045cd04916b73e857aec4f9')
      .then(response => setMovies(response.data.results))
  }
  return (
    <div>
      <div className='page-container'>
        <h1>Popular Movies</h1>
        <div className='movies-container'>
          {movies.map(item =>
            <MovieCard
              key={item.id}
              id={item.id}
              image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              name={item.original_title}
              vote_average={item.vote_average}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
