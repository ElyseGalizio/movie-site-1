import { Link } from 'react-router-dom';
import './MovieCard.css';

function MovieCard(props) {
    return (
        <Link to={`/movies/${props.id}`}>
            <div className='card'>
                <img className="card-image" src={props.image} alt={props.name} />
                <h2 className='card-title'>{props.name}</h2>
                <h2><i class="fa-solid fa-star"></i> {props.vote_average}</h2>
            </div>
        </Link>
    )
}

export default MovieCard;