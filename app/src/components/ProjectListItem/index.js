import React, { Component } from 'react';


export default class ProjectListItem extends Component {
  static defaultProps = {
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
      </div>
    )
  }
}