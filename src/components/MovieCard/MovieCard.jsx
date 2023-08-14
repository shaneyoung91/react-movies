import './MovieCard.css';
import { Link } from 'react-router-dom';

export default function MovieCard({ movie, index }) {
    const imageURL = movie.posterPath;

    const cardStyle = {
        backgroundImage: `url(${imageURL})`
    }

    return (
        <>
            <div className="MovieCard" style={cardStyle}>
                <div className="MovieCardContent">
                    <p>{movie.title}</p>
                    <p>{movie.releaseDate}</p>
                    <Link to={`/movies/${encodeURIComponent(movie.title)}`}>Movies Detail</Link>
                </div>
            </div>
        </>
    )
}
