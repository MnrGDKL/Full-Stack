import React, { Component } from 'react'

const pStyle = {
      padding: "1rem",
      textAlign: "center",
      backgroundColor: "black",
      color: "white",
    };

export class Footer extends Component {
  render() {
    return (
      <div>
            <p style={pStyle}>Copyright {new Date().getFullYear()}</p>
      </div>
    )
  }
}

export default Footer;