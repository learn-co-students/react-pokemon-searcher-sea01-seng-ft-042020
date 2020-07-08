import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const API = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {
  
  state = {
    pokemon: [],
    searchPokemon: [],
    newPokemon: {
      name: "",
      hp: "",
      sprites: {
        front: "",
        back: ""
      }
    }
  }

  componentDidMount = () => {
    this.fetchPokemon()
  }

  fetchPokemon () {
    fetch(API)
    .then(response => response.json())
    .then(data => {
      this.setState({
        pokemon: data,
        searchPokemon: data
      })
    })
  }
  
  handleChange = (e) => {
   let newPokemonSearch = this.state.searchPokemon.filter(pokemon => 
          pokemon.name.includes(e.target.value))
      this.setState({ pokemon: newPokemonSearch})
  }

  handleNewPokemon = (e) => {
    let caughtPokemon = this.state.newPokemon
    this.setState({
      newPokemon: {
        ...caughtPokemon,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = () => {
    fetch(`${API}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.newPokemon)
    })
    .then(response => response.json())
    .then(data => this.fetchPokemon())
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm onHandleSubmit={this.handleSubmit} onHandleNewPokemon={this.handleNewPokemon} />
        <br />
        <Search onHandleChange={this.handleChange} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon} />
      </Container>
    )
  }
}

export default PokemonPage
