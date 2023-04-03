import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './reset.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import MovieList from './components/MovieList/MovieList';
import MovieDetails from './components/MovieDetails/MovieDetails';
import About from './components/About/About';

//Popular movies rendered on main page load
//Scroll through pages of movies
//Clicking on a movie redirects to details page via react router
//Create Contact or About page
//Add React Router function in Navbar
//Update Footer

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/movies' element={<MovieList />} />
        <Route path='/movies/:id' element={<MovieDetails />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Navigate to='/movies' replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
