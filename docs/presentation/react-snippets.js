export const NormalReactWrapComponent = `ReactDOM.render(
    <App/>,
    document.getElementById('root')
);`;

export const ApolloWrapComponent = `ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>,
    document.getElementById('root')
);`;


export const ApolloClientBasic = `import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://api.graphcms.com/simple/v1/[GRAPHCMS PROJECT ID]"
});`;


export const ApolloClientAuthed = `const httpLink = createHttpLink({
  uri: "https://api.graphcms.com/simple/v1/[GRAPHCMS PROJECT ID]",
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: Bearer [GRAPHCMS API TOKEN],
  }
}));

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});`;

export const ReactComponentBasicFetchData = `class ProjectDetail extends Component {
  componentDidMount() {
    axios.get("https://api.portfolio.com/v1/project/131234").then(response => {
      this.setState({
        project: response.data
      });
    });
  }
  
  render() {
    return (
      <div>
        <h2>{this.state.project.title}</h2>
        <p>{this.state.project.description}</p>
        <ul>
          {this.state.project.technologies.map(technology => <li>{technology}</li>)}
        </ul>
      </div>
    );
  }
}

export default ProjectDetail;`;

export const ReactComponentWithQueryBasic = `class ProjectDetail extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.data.Project.title}</h2>
        <p>{this.props.data.Project.description}</p>
        <ul>
          {this.props.data.Project.technologies.map(technology => 
            <li>{technology}</li>
          )}
        </ul>
      </div>
    );
  }
}

const ProjectDetailQuery = gql\`
  query Project {
    Project {
      id
      title
      description
      technologies
    }
  }\`;
export default graphql(ProjectDetailQuery)(ProjectDetail);`;

export const ApolloPropsPoluted = `/* In order to access the project title, I have access it from an object Project, 
* that is inside a data, that is inside the component props */

<h1>{this.props.data.Project.title}</h1>`;

export const ReactComponentWithQueryComplex = `const ProjectDetailQuery = gql\`
  query Project($id: ID!) {
    project:Project {
      id
      title
      description
      technologies
    }
  }\`;
  
const ProjectDetailQueryOptions = {
  options: (props) => ({
    variables: {
      id: props.projectId
    }
  }),
  props: (result) => ({ ...result.data.project })
};

export default graphql(ProjectDetailQuery, ProjectDetailQueryOptions)(ProjectDetail);`;

export const FinalReactComponent = `import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import ProjectDetailQuery from './graphql/query';
import ProjectDetailQueryOptions from './graphql/options';

class ProjectDetail extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <ul>{this.props.technologies.map(technology => 
            <li>{technology}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default graphql(ProjectDetailQuery, ProjectDetailQueryOptions)(ProjectDetail);`;

export const ReactBasicComponent = `class App extends Component {
  render() {
    return (<div>Hello World 👋</div>);
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);`;


export const ReactBasicComponentWithProps = `class App extends Component {
  render() {
    return (<div>Hello {this.props.name} 👋</div>);
  }
}

ReactDOM.render(
    <App name={"mindera"} />,
    document.getElementById('root')
);`;


export const ReactBasicComponentWithState = `class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  increment() {
    this.setState((prevState, props) => ({
      counter: prevState.counter + 1
    }));
  }

  render() {
    return (
      <button onClick={() => this.increment()}>
        Called {this.state.counter} times
      </button>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);`;


export const ReactBasicComponentWithLifeCycle = `class App extends Component {
  componentWillMount() {
    // this executes before the component starts "mounting"
  }
  
  componentDidMount() {
    // this will execute when the component finished "mounting"
  }
  
  componentWillUpdate(nextProps) {
    // this will execute when a prop changes and before re-rendering
    // you have access to the nextProps in this function
  }
  
  render() {
    // this will execute everytime(*) the props change
    return <div>Hello {this.props.name} 👋</div>;
  }
}

ReactDOM.render(
    <App name={"mindera"} />,
    document.getElementById('root')
);`;