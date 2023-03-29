import { Link } from 'react-router-dom';
import './MovieCard.css';

function MovieCard(props) {
    return (
        <Link to={`/movies/${props.id}`}>
            <div className='card'>
                <img className="card-image" src={props.image} alt={props.name} />
                <p className="card-title">{props.name}</p>
            </div>
        </Link>
    )
}

export default MovieCard;