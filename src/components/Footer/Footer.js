import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>{this.props.content}</p>
      </footer>
    );
  }
}

export default Footer;
