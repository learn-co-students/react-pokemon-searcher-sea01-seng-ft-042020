import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  spriteChange = (e) => {
    this.setState({
      sprites: {
        ...this.state.sprites, 
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    this.props.onHandleSubmit(this.state)
    e.target.name.value = ""
    e.target.hp.value = ""
    e.target.front.value = ""
    e.target.back.value = ""
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="front" onChange={this.spriteChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="back" onChange={this.spriteChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
