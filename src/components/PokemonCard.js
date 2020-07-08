import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  handleClick= (e) => {
    this.props.toggleImage(this.props.pokemon)
  }

  render() {
    const {hp, name, isClicked} = this.props.pokemon
    return (
      <Card>
        <div>
          <div onClick={(e) =>this.handleClick(e)}className="image">
             { isClicked? <img src={this.props.pokemon.sprites.front} alt="oh no!" /> : <img src={this.props.pokemon.sprites.back} alt="oh no back!" /> }
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
