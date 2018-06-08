import React, { Component } from 'react';
import './Paragraph.css';

class Paragraph extends Component {
  render() {
    return (
      <section className="paragraph--section">
        <p className="paragraph">{this.props.content}</p>
      </section>
    );
  }
}

export default Paragraph;
