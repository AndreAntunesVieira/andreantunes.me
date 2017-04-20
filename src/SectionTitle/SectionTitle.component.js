import React, { Component } from 'react'
import './SectionTitle.style.css'

export class SectionTitle extends Component {
  render() {
    return (
      <h2 className="SectionTitle">
        <span>
          {this.props.text}
        </span>
      </h2>
    )
  }
}

export default SectionTitle;


