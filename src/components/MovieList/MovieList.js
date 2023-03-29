import React from "react";
import axios from "axios";
import './MovieList.css';
import MovieCard from "../MovieCard/MovieCard";

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
        <div className='movies-container'>
          {movies.map(item =>
            <MovieCard
              id={item.id}
              image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              name={item.original_title}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
