import React from 'react'

const Search = props => {

const onChange = (e) => {
  e.preventDefault()
  props.onHandleChange(e)
}

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={(e) => onChange(e)} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
