import React from 'react'
import SearchForm from '../components/SearchForm'
import Movies from '../components/Movies'
import { useGlobalContext } from '../context'
import Loading from '../components/Loading'
const Home = () => {
    //display loading while fetching
    const { loading, error, errorMessage } = useGlobalContext();
    return (
        <main>
            <SearchForm />
            {error ? <h3 className="error">{errorMessage}</h3> : null}
            {loading ? <Loading /> : <Movies />}
        </main>
    )
}

export default Home
