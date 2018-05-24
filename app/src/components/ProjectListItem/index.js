import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class ProjectListItem extends Component {
  static defaultProps = {
    id: "",
    title: "",
    description: "",
    technologies: [],
    coverPhotoUrl: ""
  };

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        {this.props.coverPhotoUrl && <img src={this.props.coverPhotoUrl} alt={""} />}
        <Link to={`/project/${this.props.id}`}>See more!</Link>
      </div>
    );
  }
}

