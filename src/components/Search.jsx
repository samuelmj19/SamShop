import React from 'react'

const Search = () => {
    const handleSearch = (event) =>{
        console.log(event.target.value)
    }
  return (
    <div>
        
        <input type="text" placeholder='Search' onChange={handleSearch}/>
        
    </div>
  )
}

export default Search