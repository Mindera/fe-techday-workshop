import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from "graphql-tag";

import './App.css';

class App extends Component {
  render() {
    const { data } = this.props;
    const { projects = [] } = data;

    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">My Folio</h1>
          </header>
          {projects.map(({title, description, images, technologies}) => (
              <div>
                <h1>{title}</h1>
                <p>{description}</p>
                {images.map(img => (<img src={img.url} alt={img.filename}/>))}

                <ul>
                  {technologies.map(tech => (<li>{tech}</li>))}
                </ul>
              </div>
          ))}

          {/*{JSON.stringify(data)}*/}
        </div>
    );
  }
}

export default graphql(gql`
    query FolioQuery {
        projects:allProjects {
            id,
            title
            description
            images:projectImages {
                id,
                url
            }
            technologies
        }
    }
`)(App);
