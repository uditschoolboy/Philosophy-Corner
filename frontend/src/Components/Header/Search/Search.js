import React from 'react'
import './Search.css';
const Search = () => {
    return (
        <div className="search">
            <input type="text" placeholder="Search for articles"/>
            <button><i class="fi fi-rr-search"></i></button>
        </div>
    )
}

export default Search
