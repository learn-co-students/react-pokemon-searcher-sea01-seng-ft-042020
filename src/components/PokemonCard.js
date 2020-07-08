import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  state = {
    frontFacing: true
  }
  
  handleClick = () => {
    let front = this.state.frontFacing
    if (front === true) {
      this.setState({
        frontFacing: false
      })
    } else {
      this.setState({
        frontFacing: true
      })

    }
  }

  render() {

    const { name, hp, sprites } = this.props.pokemon
    
    return (
      <Card>
        <div>
          <div className="image">
            <img src={this.state.frontFacing ? sprites.front : sprites.back} alt="oh no!" onClick={this.handleClick}/>
          </div>
          <div className="content">
            <div className="header">{ name }</div>
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
