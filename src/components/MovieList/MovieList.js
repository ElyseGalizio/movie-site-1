import React from "react";
import axios from "axios";
import './MovieList.css';
import MovieCard from "../MovieCard/MovieCard";
// import Search from "../Search/Search";


//if time: 
//add TMDB credit to about page
//add search function
//add buttons to switch between popular movies and top rated movies -OR- links in navbar
function MovieList() {
  const [movies, setMovies] = React.useState([])
  // const [movieData, setMovieData] = React.useState([]);
  const [searchInput, setSearchInput] = React.useState('');

  React.useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = () => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=dc0fb7b28045cd04916b73e857aec4f9')
      .then(response => setMovies(response.data.results))
  }

  // const searchMovies = (searchValue) => {
  //   setSearchInput(searchValue)
  //   const filteredData = movieData.filter((item) => {
  //     return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
  //     console.log(filteredData)
  //   })
  // }

  return (
    <div>
      <div className='page-container'>
        <div className="app-head-container">
          <h1>Popular Movies</h1>
          {/* <Search /> */}
          <input onChange={(event) => setSearchInput(event.target.value)} type="text" placeholder="Search Titles" />

        </div>
        <div className='movies-container'>
          {/* filter movies that start with searchInput else show all movies if searchInput = ''
          add filter function here */}
          {/* create array of objects in replit, movie titles */}

          {movies.filter(item => searchInput !== '' ?
            item.original_title.toLowerCase().startsWith(searchInput.toLowerCase())
            :
            item
          ).map(item =>
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
