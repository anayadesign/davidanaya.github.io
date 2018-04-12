import React, { Component } from 'react';
import Icon from './Icon';
import logo from '../assets/logo.svg';
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.props.content.heading}</h1>
        <p className="App-intro">
          {this.props.content.intro}
        </p>
        {Object.keys(this.props.content.social).map(key => (
          <Icon name={key} link={this.props.content.social[key]} key={key}/>
        ))}
      </header>
    );
  }
}

export default Header;


        