import React from 'react'

const SingleMovie = ({ Poster, Title, Year, imdbID }) => {
    return (
        <article className="movie">
            <img className="movie-img" src={Poster} alt={Title} />
            <div className="movie-info">
                <h4 className="movie-title">{Title}</h4>
                <p className="movie-year">{Year}</p>
            </div>
        </article>
    )
}

export default SingleMovie
