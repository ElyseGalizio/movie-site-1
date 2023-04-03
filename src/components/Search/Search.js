// import React from 'react';
// import axios from 'axios';
// import './Search.css';

// function Search() {
//     const [movieData, setMovieData] = React.useState([]);
//     const [searchInput, setSearchInput] = React.useState('');

//     // const searchMovieTitles = () => {
//     //     axios.get('https://api.themoviedb.org/3/search/movie?api_key=dc0fb7b28045cd04916b73e857aec4f9&language=en-US&page=1&include_adult=false')
//     //         .then((response) => setMovieData(response.data.results));
//     // }

//     // React.useEffect(() => {
//     //     searchMovieTitles()
//     // }, [])

//     const searchMovies = (searchValue) => {
//         setSearchInput(searchValue)
//         const filteredData = movieData.filter((item) => {
//             return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
//             console.log(filteredData)
//         })
//     }





//     return (
//         <input
//             type='text'
//             placeholder='Search Titles'
//             onChange={(e) => setSearchInput(e.target.value)} />

//         // <input type="text" placeholder="Search Titles" onChange={(e) => setSearch(e.target.value)} />
//     )
// }

// export default Search;