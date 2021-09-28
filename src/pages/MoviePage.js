import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
    const fetchMovie = async () => {
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
    }

    useEffect(() => {
        fetchMovie();
    }, [id])

    return (
        <>
            {loading ? <Loading /> : <section className="single-movie-page">
                <img src={movieInfo.Poster} alt={movieInfo.Title} />
                <div className="single-movie-info">
                    <h2>{movieInfo.Title}</h2>
                    <p>{movieInfo.Plot}</p>
                    <h4>{movieInfo.Year}</h4>
                    <button>back to search</button>
                </div>
            </section>}
        </>
    )
}

export default MoviePage
