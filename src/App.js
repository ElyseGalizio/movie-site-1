import './reset.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import MovieCard from './components/MovieCard/MovieCard';

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
      <MovieCard
        image='https://image.tmdb.org/t/p/w500/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg'
        name='Cocaine Bear'
      />
      <Footer />
    </div>
  );
}

export default App;
