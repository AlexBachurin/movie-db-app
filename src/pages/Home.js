import React from 'react'
import SearchForm from '../components/SearchForm'
import Movies from '../components/Movies'
import { useGlobalContext } from '../context'
import Loading from '../components/Loading'
const Home = () => {
    //display loading while fetching
    const { loading } = useGlobalContext();
    return (
        <main>
            <SearchForm />
            {loading ? <Loading /> : <Movies />}
        </main>
    )
}

export default Home
