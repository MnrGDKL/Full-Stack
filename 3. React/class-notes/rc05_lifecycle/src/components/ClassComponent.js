import React from 'react'

class ClassComponent extends React.Component {

  state = { count: 0 }

  increase = () => {this.setState({count: this.state.count + 1})}
  // increase = () => {this.setState({name : "Felix"})}

  componentDidMount() {
    console.log("ClassComponent mounted");
    this.increase();
  }

  compuoneneDidUpdate() {
    console.log("ClassComponent updated");
  }

  componenetWillUnmount() {
    console.log("ClassComponent unmounted");
  }

  render() {
    console.log("ClassComponent rendered");
    return (
      <div className="class">
        <h2>Class Component</h2>
        <h3>Count: {this.state.count}</h3>
        {/* <h3>Count: {this.state.name}</h3> */}

        <button onClick={this.increase}>Increase</button>
      </div>
    )
  }
}

export default ClassComponent
