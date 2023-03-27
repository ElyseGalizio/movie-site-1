import './MovieCard.css';

function MovieCard(props) {
    return (
        <div className='card'>
            <img src={props.image} />
            <p>{props.name}</p>
        </div>
    )
}

export default MovieCard;