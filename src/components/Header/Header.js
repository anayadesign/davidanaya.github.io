import React, { Component } from 'react';
import Icon from '../Icon/Icon';
import Avatar from '../Avatar/Avatar';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header--group">
          <h1 className="header--title">
            {this.props.content.greeting}
            <br />
            {this.props.content.name}
          </h1>
          <Avatar />
        </div>
        <p className="header--intro">{this.props.content.intro}</p>
        <div className="header--apps">
          {Object.keys(this.props.content.social).map(key => (
            <Icon
              name={key}
              link={this.props.content.social[key]}
              key={key}
              className="icon-social"
            />
          ))}
        </div>
      </header>
    );
  }
}

export default Header;
