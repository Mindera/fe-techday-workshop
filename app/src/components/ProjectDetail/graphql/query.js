import gql from "graphql-tag";

export default gql`
  query Project($id: ID!) {
    project:Project(id:$id) {
      id
      title
      description
      technologies
      projectImages {
        id
        size
        fileName
        url
      }
    }
  }`;
