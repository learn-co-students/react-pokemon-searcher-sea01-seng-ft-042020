import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const API = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    filteredPokemon: []
  }

  handleFetch = () => {
  fetch(API)
  .then(resp => resp.json())
  .then(data => {
    this.setState({
      pokemon: data,
      filteredPokemon: data
    })
  })
}

  componentDidMount() {
    this.handleFetch()
  }

  handleSearch = (letters) => {
    this.setState({
      filteredPokemon: this.state.pokemon.filter(pokemon => (
        pokemon.name.includes(letters)
      ))
    })
  }

  handlePost = (newPokemon) => {
    let obj = {
      name: newPokemon.name,
      hp: newPokemon.hp,
      sprites: {
        front: newPokemon.sprites.front,
        back: newPokemon.sprites.back
      }
    }
    fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
    .then(resp => resp.json())
    .then(data => this.handleFetch())
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handlePost={this.handlePost}/>
        <br />
        <Search handleSearch={this.handleSearch}/>
        <h1>Hello From Pokemon Collection</h1>
        <br />
        <PokemonCollection allPokemon={this.state.filteredPokemon} />
      </Container>
    )
  }
}

export default PokemonPage
