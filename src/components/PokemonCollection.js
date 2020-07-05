import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  
  renderPokemon = () => {
  // console.log(this.props.allPokemon)
  return this.props.allPokemon.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} toggleImage={this.props.toggleImage}/>)
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
         {this.renderPokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
