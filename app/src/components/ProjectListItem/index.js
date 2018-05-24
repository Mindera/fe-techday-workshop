import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default class ProjectListItem extends Component {
  static defaultProps = {
    id: "",
    title: "",
    description: "",
    coverPhotoUrl: ""
  };

  render() {
    return (
      <div className={"project-list-item-ctn"}>
        <Link to={`/project/${this.props.id}`}>
          {<img src={this.props.coverPhotoUrl || "http://placehold.it/250x250/"} alt={""} />}
          <div className={"project-list-item-details"}>
            <strong>{this.props.title}</strong>
            <p>{this.props.description}</p>
          </div>
        </Link>
      </div>
    );
  }
}

