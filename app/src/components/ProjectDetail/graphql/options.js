export default {
  options: (props) => {
    return {
      fetchPolicy: "cache-and-network",
      variables: {
        id: props.match.params.id
      }
    };
  },

  props: (result) => {
    return { ...result.data.project, isLoading: result.data.loading };
  }
};
