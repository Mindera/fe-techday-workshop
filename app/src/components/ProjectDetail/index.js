import React, { Component } from 'react';


class ProjectDetail extends Component {
  render() {
    // this gives you the project ID you will need to pass it to the query variables
    console.log(this.props.match.params.id);

    return (
      <div>build here your project detail component :)</div>
    );
  }
}


export default ProjectDetail;
