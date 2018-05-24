import gql from "graphql-tag";

export default gql`
  query ProjectsList {
    projects: allProjects(orderBy:createdAt_DESC) {
      id
      title
      description
      images: projectImages {
        id
        url
      }
    }
  }`;
