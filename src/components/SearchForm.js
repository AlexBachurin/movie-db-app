import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
    const { term, handleSearch } = useGlobalContext();
    return (
        <form onSubmit={(e) => e.preventDefault()} className="search-form">
            <h2>Search movies</h2>
            <input onChange={handleSearch} value={term} className="search-input" type="text" />
        </form>
    )
}

export default SearchForm
