import React, { Component, Fragment } from 'react';

import Header from './components/Header';
import ProjectsList from './components/ProjectsList'

import './App.css';


export default class App extends Component {
  render() {
    return (
      <Fragment>
        <header className={"header"}>
          <Header />
        </header>
        <section className={"main"}>
          <ProjectsList />
        </section>
      </Fragment>
    )
  }
}
