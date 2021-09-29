import React, { useEffect, useState, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loading from '../components/Loading';

const MoviePage = () => {
    //state for single movie info
    const [movieInfo, setMovieInfo] = useState({});
    const [loading, setLoading] = useState(false);
    //get id of clicked Link
    const { id } = useParams();
    console.log(id)
    let url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&i=${id}`
    //fetch single movie
    const fetchMovie = useCallback(async () => {
        setLoading(true)
        try {
            const res = await fetch(url);
            const movie = await res.json();
            console.log(movie)
            setMovieInfo(movie)
            setLoading(false)

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }, [url])

    useEffect(() => {
        fetchMovie();
    }, [id, fetchMovie])

    return (
        <>
            {loading ? <Loading /> : <section className="single-movie-page">
                <img src={movieInfo.Poster === 'N/A' ? 'https://res.cloudinary.com/dljezd6qv/image/upload/v1632861499/No-Image-Placeholder.svg.png' : movieInfo.Poster} alt={movieInfo.Title} />
                <div className="single-movie-info">
                    <h2>{movieInfo.Title}</h2>
                    <p>{movieInfo.Plot}</p>
                    <h4>{movieInfo.Year}</h4>
                    <Link to='/'>
                        <button>back to search</button>
                    </Link>
                </div>
            </section>}
        </>
    )
}

export default MoviePage
