import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const URL = "http://localhost:3000/pokemon"

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
  }

  componentDidMount() {
    fetch(URL).then(resp => resp.json()).then(data => {
      data.map
      this.setState({pokemons: data.map(pokemon => {
        pokemon.frontImage = true
        return pokemon
      })})
    })
  }

  toggelImage = (id) => {
    const pokemons = this.state.pokemons.map(pokemon => {
      if (pokemon.id === id) {
        pokemon.frontImage ? pokemon.frontImage = false : pokemon.frontImage =true
        return pokemon
      } else {
        return pokemon
      }
    })
    this.setState({pokemons: pokemons})
  }

  filterPokemon = (value) => {
    const pokemons = this.state.pokemons.filter(pokemon => pokemon.name.includes(value))
    this.setState({pokemons: pokemons})
  }

  addPokemon = pokemon => {
    this.setState({ pokemonCollection: [...this.state.pokemonCollection, pokemon] })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search filterPokemon={this.filterPokemon}/>
        <br />
        <PokemonCollection pokemons={this.state.pokemons} toggelImage={this.toggelImage}/>
      </Container>
    )
  }
}

export default PokemonPage
