import React from 'react'

const MoviePage = () => {
    return (
        <section className="single-movie-page">
            <img src="https://res.cloudinary.com/dljezd6qv/image/upload/v1632861499/No-Image-Placeholder.svg.png" alt="" />
            <div className="single-movie-info">
                <h2>title</h2>
                <p>text</p>
                <h4>year</h4>
                <button>back to search</button>
            </div>
        </section>
    )
}

export default MoviePage
