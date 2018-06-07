import React, { Component } from 'react';
import Github from './Icons/Github';
import Linkedin from './Icons/Linkedin';
import Twitter from './Icons/Twitter';

import './Icon.css';
class Icon extends Component {
  components = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter
  };
  render() {
    const { name, link, className } = this.props;
    const IconName = this.components[name];
    return (
      <a href={link} className={className}>
        <IconName />
      </a>
    );
  }
}
export default Icon;
