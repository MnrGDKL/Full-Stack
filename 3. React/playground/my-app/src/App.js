import React, { Component } from 'react'

export default class App extends Component {
  setState(state) {
    state = this.state + 1;
  }
  
  render() {

    return (
      <div>App</div>
    )
  }
}

