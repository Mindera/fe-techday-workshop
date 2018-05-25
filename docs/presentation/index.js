// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  CodePane,
  Code,
  Fit,
  Fill,
  Layout,
  S,
  Image,
  Appear,
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import apolloClientLogo from "../assets/apollo-logo.png";
import reactLogo from "../assets/react-logo.svg";
import {
  ApolloClientAuthed,
  ApolloClientBasic,
  ApolloPropsPoluted,
  ApolloWrapComponent,
  FinalReactComponent,
  NormalReactWrapComponent,
  ReactComponentBasicFetchData,
  ReactComponentWithQueryBasic,
  ReactComponentWithQueryComplex
} from "./react-snippets";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE",
  theme: "external"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});


export default class Presentation extends React.Component {
  render() {
    return (
        <Deck transition={["fade"]} transitionDuration={250} theme={theme} contentWidth={1250} contentHeight={1000} progress={"none"}>
          <Slide>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                Up and running with React and GraphQL
            </Heading>
          </Slide>

          <Slide>
            <Text margin={30} textSize={60} bold>What is the goal of this workshop?</Text>
            <Text textSize={28}>To build your own portfolio from ground-up and publish it on the web, using a CMS powered GraphQL server and a javascript React app</Text>
          </Slide>

          <Slide>
            <Layout style={{alignItems: "center", justifyContent: "space-between"}}>
              <Fill>
                <Image src={reactLogo} width={400} />
              </Fill>
              <Fit style={{marginRight: "30px", marginLeft: "30px"}}>
                <Text textSize={50}>➕</Text>
              </Fit>
              <Fill>
                <Image src={apolloClientLogo} width={400} />
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Text margin={50} textSize={50}>What makes Apolllo so cool?</Text>
            <List type={"A"} ordered style={{textAlign: "center"}}>
              <Appear>
                <ListItem textColor={"black"}>Smooth integration with React</ListItem>
              </Appear>
              <Appear>
                <ListItem textColor={"black"}>It has an internal cache system</ListItem>
              </Appear>
              <Appear>
                <ListItem textColor={"black"}>Community-driven / Open source</ListItem>
              </Appear>
              <Appear>
                <ListItem textColor={"black"}>Easy to get started with</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide>
            <Text margin={30}>Wrapping our app with Apollo</Text>
            <Layout style={{alignItems: "center"}}>
              <Fill>
                <CodePane textSize={22} source={NormalReactWrapComponent} lang={"javascript"}/>
              </Fill>
              <Fit style={{marginRight: "30px", marginLeft: "30px"}}>
                <Text textSize={50}>➡️</Text>
              </Fit>
              <Fill>
                <CodePane textSize={22} source={ApolloWrapComponent} lang={"javascript"}/>
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Text margin={30}>The <S type={"italic"}>basic</S> client</Text>

            <Layout style={{alignItems: "center"}}>
              <Fill>
                <CodePane textSize={22} source={ApolloClientBasic} lang={"javascript"}/>
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Text textSize={60}>What about <S type={"bold"}>Authentication?</S></Text>
          </Slide>

          <Slide>
            <Text margin={30} lineHeight={32}>A more <S type={"italic"}>complex</S> version</Text>

            <Layout style={{alignItems: "center"}}>
              <Fill>
                <CodePane textSize={22} source={ApolloClientAuthed} lang={"javascript"}/>
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Text margin={30} textSize={35}>React: the common use-case</Text>
            <CodePane textSize={22} source={ReactComponentBasicFetchData} lang={"javascript"}/>
          </Slide>

          <Slide>
            <Text>So, what does Apollo + GraphQL have to offer to make it simpler?</Text>
          </Slide>

          <Slide>
              <Text margin={30} textSize={35}>This is what it looks like</Text>
              <CodePane textSize={22} source={ReactComponentWithQueryBasic} lang={"javascript"}/>
          </Slide>

          <Slide>
            <Text margin={30} textSize={35}>But wait, there's a lot of <S type={"italic"}>noise</S> in that code 🤔</Text>
              <CodePane textSize={22} source={ApolloPropsPoluted} lang={"javascript"}/>
          </Slide>

          <Slide>
            <Layout>
              <Fill>
            <Text margin={30} textSize={35}>The <Code lang={"javascript"}>graphql</Code> function second parameter</Text>
            <CodePane textSize={22} source={ReactComponentWithQueryComplex} lang={"javascript"}/>
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Layout>
              <Fill>
                <Text margin={30} textSize={35}>This way, our component will look like this 👇</Text>
                <CodePane textSize={22} source={FinalReactComponent} lang={"javascript"}/>
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Layout style={{alignItems: "center"}}>
              <Fill>
                <CodePane textSize={18} source={ReactComponentWithQueryBasic} lang={"javascript"}/>
              </Fill>
              <Fit style={{marginRight: "15px", marginLeft: "15px"}}>
                <Text textSize={50}>➡️</Text>
              </Fit>
              <Fill>
                <CodePane textSize={18} source={FinalReactComponent} lang={"javascript"}/>
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Text textSize={80} margin={30} bold>Your turn now! 💪</Text>
          </Slide>
        </Deck>
    );
  }
}

