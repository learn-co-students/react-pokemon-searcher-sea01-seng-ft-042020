import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state ={
    hp: "",
    name:"",
    frontUrl:"",
    backUrl:""
  }

  handleChange =(e)=> {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  handleSubmit = (e) => {
    e.persist()
    e.preventDefault()

    const {name, hp, frontUrl, backUrl} = this.state
    let pokeObj = {
      hp: hp,
      name: name,
      isClicked: true,
      sprites: {
        back: backUrl,
        front: frontUrl
      }
    }
    this.props.addPokemon(pokeObj)
    e.target.reset()
  }
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e) => {this.handleSubmit(e)}}>
          <Form.Group widths="equal">
            <Form.Input onChange={(e)=> this.handleChange(e)}fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange={(e)=> this.handleChange(e)}fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input onChange={(e)=> this.handleChange(e)}fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input onChange={(e)=> this.handleChange(e)}fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
