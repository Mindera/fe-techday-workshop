export default {
  options: (props) => {
    // this function gets the component initial Props (here you may get the project id)
    // and must return an object with the query variables (such as the project id)
  },

  props: (result) => {
    // here you get the raw result that the graph gave us, so you can deconstruct it
    // and build the props structure you want to return back to the component
  }
};
