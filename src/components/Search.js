import React from 'react'

const Search = props => {

  const handleSearchPokemon = (e) => {
    e.preventDefault()
    props.onHandleSearchPokemon(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleSearchPokemon} className="prompt"/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
