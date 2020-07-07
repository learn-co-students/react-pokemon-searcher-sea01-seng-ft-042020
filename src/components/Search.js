import React from "react";
import PokemonPage from "./PokemonPage";

class Search extends React.Component {

state = {
  letters: ''
}

handleChange = (e) => {
  this.setState({
    letters: e.target.value
  })
  this.props.handleSearch(e.target.value)
  console.log(e.target.value)
}

  render() {
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input value={this.state.letters} onChange={this.handleChange} className="prompt" />
          <i className="search icon" />
        </div>
      </div>
    );
  }
}

export default Search;
