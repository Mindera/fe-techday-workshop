import gql from "graphql-tag";


export default gql`
  query MyAccount($id: ID!) {
    myAccount: Account(id: $id) {
      id
      name
      description
      facebookUrl
      twitterUrl
      linkedInUrl
      photo {
        url
      }
    }
  }`;
