import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from "react-router-dom";

import ProjectDetailQuery from './graphql/query';
import ProjectDetailQueryOptions from './graphql/options';


class ProjectDetail extends Component {
  static defaultProps = {
    match: {
      params: {
        id: ""
      }
    },
    id: "",
    title: "",
    description: "",
    technologies: [],
    projectImages: []
  };

  render() {
    return (
      <div>
        <Link to={"/"}>Go back</Link>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <ul>
          {this.props.projectImages.map(image =>
            <img key={image.url} src={image.url} alt={image.fileName} />
          )}
        </ul>
        <ul>
          {this.props.technologies.map((technology, index) =>
            <li key={index.toString()}>{technology}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default graphql(ProjectDetailQuery, ProjectDetailQueryOptions)(ProjectDetail);
