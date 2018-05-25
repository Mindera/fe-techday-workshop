import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import ProjectDetailQuery from './graphql/query';
import ProjectDetailQueryOptions from './graphql/options';

class ProjectDetail extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <ul>
          {this.props.technologies.map(technology => <li>{technology}</li>)}
        </ul>
      </div>
    );
  }
}

export default graphql(ProjectDetailQuery, ProjectDetailQueryOptions)(ProjectDetail);