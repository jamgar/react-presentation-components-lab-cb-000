import React from 'react'
import { Component } from 'react'

class SimpleComponentHere extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mood: 'happy'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const mood = this.state.mood === 'happy' ? 'sad' : 'happy'
    this.setState({
      mood: mood
    })
  }

  render() {
    return(
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }
}

export default SimpleComponentHere
