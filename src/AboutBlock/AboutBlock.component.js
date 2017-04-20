import React, { Component } from 'react'
import './AboutBlock.style.css'

export class AboutBlock extends Component {
  render() {
    return (
      <div className="AboutBlock">
        <img src={this.props.image} alt="alt" />
        <h3>{this.props.title}</h3>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

export default AboutBlock;
