import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  state = {
    frontFacing: true
  }
  
  toggleImage = () => {
    this.setState({frontFacing: !this.state.frontFacing})
  }
  
  getImage = () => {
    return this.state.frontFacing ? 'front' : 'back'
  }
  
  render() {
    const images = {
      front: this.props.pokemon.sprites.front,
      back: this.props.pokemon.sprites.back
    }
    const imageName = this.getImage()
    return (
      <Card>
        <div>
          <div className="image" onClick={this.toggleImage}>
            <img src={images[imageName]} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
