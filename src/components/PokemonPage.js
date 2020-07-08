import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const API = "http://localhost:3000/pokemon"

class PokemonPage extends React.Component {
  state = {
    allPokemon: [],
    searchTerm: ""
  }

  fetchAllPokemon = () => {
      fetch(API)
      .then(res => res.json())
      .then(json => {
         this.addToggle(json)
         this.setState({
          allPokemon: json
        })
      })
  }

  addToggle = (json) =>{
  json.map(pokemon => 
      pokemon.isClicked = true
    )
  }

  componentDidMount(){
    this.fetchAllPokemon()
  }

  toggleImage = (pokemon)=> {
    const updatedPoke = [...this.state.allPokemon].map(poke => poke.id === pokemon.id? {...poke, isClicked: !poke.isClicked}: poke) 
    this.setState({
      allPokemon: updatedPoke
    })
  }
  addPokemon =(pokemon) =>{
    console.log(pokemon)
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pokemon)
    }
    fetch(API, configObj)
    .then(res => res.json())
    .then(newPoke => 
      this.setState({
        allPokemon: [...this.state.allPokemon.concat(newPoke)]
      }))
  }

  handleSearch = (e) =>{
    console.log(e.target.value)
    this.setState({searchTerm: e.target.value})
  }
  
  render() {

    const foundPokemon = this.state.allPokemon.filter(p =>
      p.name.includes(this.state.searchTerm)
    )
    // console.log((this.state))
    // console.log(this.state.allPokemon)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search handleSearch={this.handleSearch}/>
        <br />
        <PokemonCollection allPokemon={foundPokemon} toggleImage={this.toggleImage}/>
      </Container>
    )
  }
}

export default PokemonPage
