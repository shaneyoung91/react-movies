// useParams hook
import { useParams } from 'react-router-dom';

export default function MovieDetailPage({ movies }) {
    const { movieName } = useParams();
    const movie = movies.find(movie => movie.title === movieName)
    
    return (
        <>
            <div>
                <h2>{movie.title}</h2>
                <p>Release Date: {movie.releaseDate}</p>
                <p>Cast: {movie.cast.join(', ')}</p>
            </div>
        </>
    )
}
