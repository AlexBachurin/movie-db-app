import React, { useContext, useEffect, useState, useCallback } from "react";

const AppContext = React.createContext();


const AppProvider = ({ children }) => {
    //state
    const [loading, setLoading] = useState(false)
    const [movies, setMovies] = useState([]);
    //searchTerm
    const [term, setTerm] = useState('')
    //error
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')



    //fetch data
    const fetchMovies = useCallback(async () => {
        //url to fetch from
        let url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&s=${term}`
        setLoading(true);
        try {
            //need to check if we have something in input or else we get empty movie list on first fetch
            if (term) {
                const res = await fetch(url);
                const data = await res.json();
                console.log(data);
                //if we have bad response from server, for example then we search "a", response will be {Response: False, Error: Too Many Results}
                //so we handle it with cheсcking response, if its false we setting error, else we setting movies
                if (data.Response === 'False') {
                    setError(true)
                    setErrorMessage(data.Error)
                } else {
                    setMovies(data.Search);
                    setLoading(false);
                    setError(false)
                }

            } else {
                url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&s=avengers`
                const res = await fetch(url);
                const data = await res.json();
                console.log(data);
                setMovies(data.Search);
                setLoading(false)
                setError(false)
            }

        }
        catch (error) {
            console.log(error)
            setLoading(false)
        }
    }, [term])
    //search input
    const handleSearch = (e) => {
        setTerm(e.target.value)
    }

    //display movies on every input change
    useEffect(() => {
        fetchMovies()

    }, [term, fetchMovies])


    return <AppContext.Provider value={{
        movies,
        loading,
        term,
        handleSearch,
        error,
        errorMessage
    }}>
        {children}
    </AppContext.Provider>
}

//custom global hook

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext }