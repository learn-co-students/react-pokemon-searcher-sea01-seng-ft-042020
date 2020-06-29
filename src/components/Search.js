import React from 'react'

const Search = props => {
  const {updateSearchTerm, searchTerm} = props

  const handleSearch = (e) => {
    updateSearchTerm(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchTerm} onChange={handleSearch}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
