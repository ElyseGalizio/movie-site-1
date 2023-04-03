import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className='navbar'>
            <ul className='navbar-links'>
                <li>
                    <Link to='/movies'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;