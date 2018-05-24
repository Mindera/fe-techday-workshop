import React, { Component } from 'react';
import { graphql } from 'react-apollo/index';

import HeaderQuery from './graphql/query';
import HeaderQueryOptions from './graphql/options';


import './styles.css';


class Header extends Component {
  static defaultProps = {
    name: "",
    description: "",
    photo: {
      url: ""
    },
    linkedInUrl: "",
    facebookUrl: "",
    twitterUrl: ""
  };

  render() {
    return (
      <header>
        <div className={"header-container"}>
          <img src={this.props.photo.url} alt={""} className="header-photo" />
          <h1>{this.props.name}</h1>
          <p>{this.props.description}</p>
          <div className={"header-social-container"}>
            <a href={this.props.twitterUrl} target="_blank"><i className="fab fa-twitter" /> Twitter</a>
            <a href={this.props.facebookUrl} target="_blank"><i className="fab fa-facebook-f" /> Facebook</a>
            <a href={this.props.linkedInUrl} target="_blank"><i className="fab fa-linkedin-in" /> LinkedIn</a>
          </div>
        </div>
      </header>
    );
  }
}

export default graphql(HeaderQuery, HeaderQueryOptions)(Header);
