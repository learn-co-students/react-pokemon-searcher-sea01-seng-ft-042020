import React from 'react'
import PokemonCollection from './PokemonCollection'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    id: this.props.id,
    front: true,
    back: false
  }

  handleClick = () => {
    if (this.state.front === true) {
      this.setState({
        front: false,
        back: true
      })
    }
    else {
      this.setState({
        front: true,
        back: false
      })
    }
  }

  render() {
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
          {this.state.front === true ? <img src={this.props.front}alt="oh no!" /> : <img src={this.props.back}alt="oh no!" /> }
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
