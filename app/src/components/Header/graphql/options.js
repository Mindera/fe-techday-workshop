export default {
  options: (props) => {
    return {
      fetchPolicy: "cache-and-network",
      variables: {
        id: "cjhkqyk3lcitu01602egbf041"
      }
    };
  },

  props: (result) => {
    return { ... result.data.myAccount };
  }
};
