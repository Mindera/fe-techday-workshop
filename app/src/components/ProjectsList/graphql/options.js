export default {
  options: (props) => {
    return {
      fetchPolicy: "cache-and-network",
      variables: {}
    };
  },

  props: (result) => {
    return {
      projects: result.data.projects,
      isLoading: result.data.loading,
    };
  }
};
