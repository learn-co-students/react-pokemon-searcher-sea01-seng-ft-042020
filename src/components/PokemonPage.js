import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    allPokemon: []
  }

  fetchPokemon = () =>{
    const URL = "http://localhost:3000/pokemon"

    fetch(URL)
    .then(resp=>resp.json())
    .then(data=>{
      this.setState({
          allPokemon: data
      })
    }
   )
  }

  searchPokemon = (filter) => {
    !filter ? this.fetchPokemon() : this.updatePokemon(filter)
  }

  updatePokemon = (filter) => {
    const pokemonSearch = this.state.allPokemon.filter(pokemon => pokemon.name.includes(`${filter}`))
    this.setState({
      allPokemon: pokemonSearch
    })
  }

  submitForm = (formData) => {
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      }, 
      body: JSON.stringify(formData)
    })
    .then(resp=>resp.json())
    .then(data=>this.fetchPokemon())
  }

  togglePokemon = clickedPokemon => {
    if (clickedPokemon.toggle){
      let updatedPokemon = this.state.allPokemon.map(pokemon => pokemon.id === clickedPokemon.id ? {...pokemon, toggle:false}:pokemon)
      this.setState({
        allPokemon: updatedPokemon
     })
    } else {
    let updatedPokemon = this.state.allPokemon.map(pokemon => pokemon.id === clickedPokemon.id ? {...pokemon, toggle:true}:pokemon)
    this.setState({
        allPokemon: updatedPokemon
     })
    }
  }

  componentDidMount(){
    this.fetchPokemon()
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm onHandleSubmit={this.submitForm}/>
        <br />
        <Search onHandleSearchPokemon={this.searchPokemon}/>
        <br />
        <PokemonCollection pokemon={this.state.allPokemon} onHandleClick={this.togglePokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
