import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  render() {
    
    const {id, name, hp, sprites: {front, back}, frontImage} = this.props.pokemon

    return (
      <Card>
        <div onClick={() => this.props.toggelImage(id)}>
          <div className="image">
            <img src={frontImage ? front : back} alt="oh no!" />
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
