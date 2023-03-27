import './reset.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

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
      <Footer />
    </div>
  );
}

export default App;
