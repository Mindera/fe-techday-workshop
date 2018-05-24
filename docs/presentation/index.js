// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane,
  Code,
  Fit,
  Fill,
  Layout,
  S,
  Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import apolloClientLogo from "../assets/apollo-logo.png";
import reactLogo from "../assets/react-logo.svg";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE",
  theme: 'light'
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const NormalReactWrapComponent = `ReactDOM.render(
    <App/>,
    document.getElementById('root')
);`;

const ApolloWrapComponent = `ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>,
    document.getElementById('root')
);`;


const ApolloClientBasic = `import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://api.graphcms.com/simple/v1/[GRAPHCMS PROJECT ID]"
});`;


const ApolloClientAuthed = `import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
  uri: "https://api.graphcms.com/simple/v1/[GRAPHCMS PROJECT ID]",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: Bearer [GRAPHCMS API TOKEN],
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});`;

export default class Presentation extends React.Component {
  render() {
    return (
        <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Up and running with React and GraphQL
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
            <Text margin={30}>Wrapping our app with Apollo</Text>
            <Layout style={{alignItems: "center", justifyContent: "space-between"}}>
              <Fill>
                <Image src={apolloClientLogo} />
              </Fill>
              <Fit style={{marginRight: "30px", marginLeft: "30px"}}>
                <Text textSize={50}>➕</Text>
              </Fit>
              <Fill>
                <Image src={reactLogo} height={200}/>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
            <Text margin={30}>Wrapping our app with Apollo</Text>
            <Layout style={{alignItems: "center"}}>
              <Fill>
                <CodePane source={NormalReactWrapComponent} lang={"javascript"}/>
              </Fill>
              <Fit style={{marginRight: "30px", marginLeft: "30px"}}>
                <Text textSize={50}>➡️</Text>
              </Fit>
              <Fill>
                <CodePane source={ApolloWrapComponent} lang={"javascript"}/>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
            <Text margin={30}>The <S type={"italic"}>basic</S> client</Text>

            <Layout style={{alignItems: "center"}}>
              <Fill>
                <CodePane source={ApolloClientBasic} lang={"javascript"}/>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
            <Text>What about <S type={"bold"}>Authentication?</S></Text>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
            <Text margin={30} lineHeight={32}>A more <S type={"italic"}>complex</S> version</Text>

            <Layout style={{alignItems: "center"}}>
              <Fill>
                <CodePane source={ApolloClientAuthed} lang={"javascript"}/>
              </Fill>
            </Layout>
          </Slide>

        </Deck>
    );
  }
}

