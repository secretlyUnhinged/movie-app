import React from 'react'

const Search = ({searchTerm,setSearchTerm}) => {
  return (
    <div className="search">
      <div>
        <img src="src/public/search.svg" alt="search"/>

        <input type="text" 
            className="placeholder-gray-500"
            placeholder="Search through thousands of movies" 
            value={searchTerm} 
            onChange={(e)=>setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Search;
