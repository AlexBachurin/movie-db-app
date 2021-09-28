import React from 'react'
import { useGlobalContext } from '../context'
import SingleMovie from './SingleMovie';

const Movies = () => {

    const { movies } = useGlobalContext();
    return (
        <section className="movies">
            {/* display movies */}
            {movies.map(movie => {
                return <SingleMovie key={movie.imdbID} {...movie} />
            })}
        </section>
    )
}

export default Movies
