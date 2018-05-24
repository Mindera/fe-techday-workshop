import gql from "graphql-tag";

export default gql`
  query ProjectsList {
    projects: allProjects {
      id
      title
      description
      images: projectImages {
        id
        url
      }
      technologies
    }
  }`;
