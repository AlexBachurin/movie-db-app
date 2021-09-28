import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();
const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&s=avengers`

const AppProvider = ({ children }) => {
    //state
    const [loading, setLoading] = useState(false)
    const [movies, setMovies] = useState([]);



    //fetch data
    const fetchMovies = async () => {
        setLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setMovies(data.Search);
            setLoading(false)
        }
        catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchMovies()

    }, [])


    return <AppContext.Provider value={{
        movies,
        loading
    }}>
        {children}
    </AppContext.Provider>
}

//custom global hook

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext }