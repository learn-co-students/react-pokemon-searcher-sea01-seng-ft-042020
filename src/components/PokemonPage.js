import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const API = 'http://localhost:3000/pokemon'
class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    searchTerm: ''
  }

  fetchPokemon = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(allPokemon => this.setState({
      pokemon: allPokemon
    }))
  }

  newPokemonObject = (pokemon) => {
    return {
      name: pokemon.name,
      hp: pokemon.hp,
      sprites: {
        front: pokemon.front,
        back: pokemon.back
      }
    }
  }

  addPokemon = (pokemon) => {
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.newPokemonObject(pokemon))
    })
    .then(resp => resp.json())
    .then(json => {
      this.setState({pokemon: [...this.state.pokemon, json]
      })
    })
    }
    

  returnSearchedPokemon = () => {
    return this.state.pokemon.filter(pokemon => {
      return pokemon.name.includes(this.state.searchTerm)
    })
  }

  updateSearchTerm = (term) => {
    this.setState({searchTerm: term})
  }
  
  componentDidMount() {
    this.fetchPokemon()
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm}/>
        <br />
        <PokemonCollection pokemon={this.returnSearchedPokemon()}/>
      </Container>
    )
  }
}

export default PokemonPage
