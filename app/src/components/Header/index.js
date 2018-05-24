import React, {Component, Fragment} from 'react';
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
    }
  };

  render() {
    return (
      <Fragment>
        <img src={this.props.photo.url} alt={""} className="header-photo" />
        <h1>{this.props.name}</h1>
        <p>{this.props.description}</p>
      </Fragment>
    );
  }
}

export default graphql(HeaderQuery, HeaderQueryOptions)(Header);
