import MovieCard from "../../components/MovieCard/MovieCard";
import './MoviesListPage.css';

export default function MoviesListPage({movies}) {
    
    return (
        <>
            <div className="MovieCardContainer">
                    {movies.map((movie, index) => (
                        <MovieCard movie={movie} key={index} index={index} />
                    ))}
            </div>
        </>
    )
}
