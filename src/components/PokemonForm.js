import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  handleChange = (e) => {
    this.props.onHandleNewPokemon(e)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onHandleSubmit(e)
  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e) => {this.handleSubmit(e)}}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="front" onChange={this.handleChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="back" onChange={this.handleChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
