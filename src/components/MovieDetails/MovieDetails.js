import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function MovieDetails() {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = React.useState([]);

    function fetchMovies() {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=dc0fb7b28045cd04916b73e857aec4f9`)
            .then(response => setMovieDetails(response.data))
    }

    React.useEffect(() => {
        fetchMovies()
    }, []);

    return (
        <div className="App">
            <h1>Movie Details</h1>
            <p>{movieDetails?.original_title}</p>
            <p>{movieDetails?.overview}</p>
            <img src={`https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`} alt={movieDetails?.original_title} />
        </div>
    )
}

export default MovieDetails;