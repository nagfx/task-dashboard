import React from 'react';

function Search( { searchTerm, handleSearch}) {
  return (
    <div className='container searchbar center'>
        <h2 className='center'>Search</h2>
        <input type="text" value={searchTerm} onChange={handleSearch}/>
    </div>
  )
}

export default Search