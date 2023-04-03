import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './MovieDetails.css';

function MovieDetails() {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = React.useState();

    function fetchMovies() {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=dc0fb7b28045cd04916b73e857aec4f9`)
            .then(response => setMovieDetails(response.data))
    }

    React.useEffect(() => {
        fetchMovies()
    });

    return (
        <div className="App">
            <h1 className="app-head-container">Movie Details</h1>
            <div className="movie-details-container">
                <img src={`https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`} alt={movieDetails?.original_title} className="movie-details-img" />
                <div className="movie-details-information">
                    <h2>{movieDetails?.original_title}</h2>
                    <p>{movieDetails?.overview}</p>
                    <p>Release Date: {movieDetails?.release_date}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;