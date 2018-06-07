import React, { Component } from 'react';
import './Avatar.css';

class Avatar extends Component {
  render() {
    return (
      <div className="avatar">
        <img
          className="avatar--image"
          src="./images/avatar.jpg"
          alt="David Anaya"
        />
      </div>
    );
  }
}

export default Avatar;
