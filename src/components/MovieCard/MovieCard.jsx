import './MovieCard.css';

export default function MovieCard({ movie, index }) {
    const imageURL = movie.posterPath;

    const cardStyle = {
        backgroundImage: `url(${imageURL})`
    }

    return (
        <div className="MovieCard" style={cardStyle}>
            <div className="MovieCardContent">
                <p>{movie.title}</p>
                <p>{movie.releaseDate}</p>
            </div>
        </div>
    )
}
