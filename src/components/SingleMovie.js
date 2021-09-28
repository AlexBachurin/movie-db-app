import React from 'react'
import { Link } from 'react-router-dom';
const SingleMovie = ({ Poster, Title, Year, imdbID }) => {
    //check if Poster value = 'N/A' we place placeholder in src
    let imgSrc = ''
    if (Poster === 'N/A') {
        imgSrc = 'https://res.cloudinary.com/dljezd6qv/image/upload/v1632861499/No-Image-Placeholder.svg.png'
    } else {
        imgSrc = Poster;
    }
    return (
        <Link to={`movies/${imdbID}`}>
            <article className="movie">
                <img className="movie-img" src={imgSrc} alt={Title} />
                <div className="movie-info">
                    <h4 className="movie-title">{Title}</h4>
                    <p className="movie-year">{Year}</p>
                </div>
            </article>
        </Link>
    )
}

export default SingleMovie
