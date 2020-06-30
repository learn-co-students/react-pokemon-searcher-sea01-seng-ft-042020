import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  handleClick = () => {
    this.props.onHandleClick(this.props.pokemon)
  }

  selectSrc = () => {
    if(this.props.pokemon.toggle === true) {
      return this.props.pokemon.sprites.back
    } else {
      return this.props.pokemon.sprites.front
    }
  }
  
  render() {

    const {hp, name} = this.props.pokemon

    return (
      <Card>
        <div>
          <div className="image">
            <img onClick={this.handleClick} src={this.selectSrc()} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
