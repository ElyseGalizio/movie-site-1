import './MovieCard.css';

function MovieCard(props) {
    return (
        <div className='card'>
            <img className="card-image" src={props.image} />
            <p className="card-title">{props.name}</p>
        </div>
    )
}

export default MovieCard;