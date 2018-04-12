import React, { Component } from 'react';

class Icon extends Component {
  render() {
    return (
      <a href={this.props.link}>{this.props.name}</a>
    );
  }
}

export default Icon;