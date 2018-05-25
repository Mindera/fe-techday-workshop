// Import React
import React, {Component} from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Notes,
  Text as SpectacleText,
  CodePane as SpectacleCodePane,
  Code,
  Fit,
  Fill,
  Layout,
  S,
  Image,
  Appear,
  Markdown
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import apolloClientLogo from "../assets/apollo-logo.png";
import reactLogo from "../assets/react-logo.svg";
import back from "../assets/background.png";
import minderaLogo from "../assets/minderaLogo.png";
import minder from "../assets/minder.png";

import GraphSlides from './graphSlides';

import {
  ApolloClientAuthed,
  ApolloClientBasic,
  ApolloPropsPoluted,
  ApolloWrapComponent,
  FinalReactComponent,
  NormalReactWrapComponent,
  ReactComponentBasicFetchData,
  ReactComponentWithQueryBasic,
  ReactComponentWithQueryComplex,
  ReactBasicComponent,
  ReactBasicComponentWithProps,
  ReactBasicComponentWithState,
  ReactBasicComponentWithLifeCycle
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

const Text = ({...props}) => {
  return <SpectacleText textColor="secondary" {...props}/>
};

const CodePane = ({ ...props }) => {
  return <SpectacleCodePane {...props}/>
};


export default class Presentation extends Component {
  render() {
    return (
        <Deck transition={["fade"]} transitionDuration={250} theme={theme} contentWidth={1250} contentHeight={1000} progress={"none"}>
          <Slide bgImage={back} bgImage={back} bgColor="#283966">
            <Layout style={{flexDirection: "column"}}>
              <Fit>
                <Heading fit bold caps textColor="primary">
                    Up and running with React and GraphQL
                </Heading>
              </Fit>
              <Fit style={{marginTop: '100px'}}>
                <Image height={80} src={minder} />
              </Fit>
            </Layout>
          </Slide>

          <Slide bgImage={back} bgImage={back}>
            <Text margin={30} textSize={60} bold>What is the goal of this workshop?</Text>
            <Text textSize={28}>To build your own portfolio from ground-up and publish it on the web, using a CMS powered GraphQL server and a javascript React app</Text>
            <Notes>
              <p>This workshop is about running an app quickly as possible using **React** and the power of **GraphCMS**
                The objective is to build a portfolio for each one of you with a CMS built in</p>
              <ul>
                <li>- https://folioworkshop.firebaseapp.com/</li>
                <li>- Enabling us to build complete simple products fast</li>
                <li>- Get to know what React is and how relates to a GraphQL service</li>
                <li>- Get familiar with graphql query language</li>
                <li>- Crash course on Firebase</li>
                <li>All the resources can be found here:</li>
                <li>github.com/Mindera/fe-techday-workshop</li>
              </ul>
            </Notes>
          </Slide>

          {GraphSlides.map((body) => {
            return <Slide bgImage={back}>{body}</Slide>
          })}

          <Slide bgImage={back}>
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

          <Slide bgImage={back}>
            <Text textSize={50}>Super basic React 101</Text>
          </Slide>

          <Slide bgImage={back}>
            <Text margin={50} textSize={50}>This is a super basic React basic component</Text>
            <CodePane lang={"jsx"} textSize={22} source={ReactBasicComponent} />
          </Slide>

          <Slide bgImage={back}>
            <Text margin={50} textSize={50}>Every component has it's <Code>props</Code></Text>
            <CodePane lang={"jsx"} textSize={22} source={ReactBasicComponentWithProps} />
          </Slide>

          <Slide bgImage={back}>
            <Text margin={50} textSize={50}>It can also have a <Code>state</Code></Text>
            <CodePane lang={"jsx"} textSize={22} source={ReactBasicComponentWithState} />
          </Slide>

          <Slide bgImage={back}>
            <Text margin={50} textSize={50}>Also, a <Code>lifecycle</Code></Text>
            <CodePane lang={"jsx"} textSize={22} source={ReactBasicComponentWithLifeCycle} />
          </Slide>

          <Slide bgImage={back}>
            <Text margin={50} textSize={50}>What makes Apollo so cool?</Text>
            <List type={"A"} ordered style={{textAlign: "center"}}>
              <Appear>
                <ListItem textColor={"secondary"}>Smooth integration with React</ListItem>
              </Appear>
              <Appear>
                <ListItem textColor={"secondary"}>It has an internal cache system</ListItem>
              </Appear>
              <Appear>
                <ListItem textColor={"secondary"}>Community-driven / Open source</ListItem>
              </Appear>
              <Appear>
                <ListItem textColor={"secondary"}>Easy to get started with</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide bgImage={back} bgImage={back}>
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

          <Slide bgImage={back} bgImage={back}>
            <Text margin={30}>The <S type={"italic"}>basic</S> client</Text>

            <Layout style={{alignItems: "center"}}>
              <Fill>
                <CodePane textSize={22} source={ApolloClientBasic} lang={"javascript"}/>
              </Fill>
            </Layout>
          </Slide>

          <Slide bgImage={back} bgImage={back}>
            <Text margin={30} textSize={35}>React: the common use-case</Text>
            <CodePane textSize={22} source={ReactComponentBasicFetchData} lang={"javascript"}/>
          </Slide>

          <Slide bgImage={back} bgImage={back}>
            <Text>So, what does Apollo + GraphQL have to offer to make it simpler?</Text>
          </Slide>

          <Slide bgImage={back} bgImage={back}>
              <Text margin={30} textSize={35}>This is what it looks like</Text>
              <CodePane textSize={22} source={ReactComponentWithQueryBasic} lang={"javascript"}/>
          </Slide>

          <Slide bgImage={back} bgImage={back}>
            <Text margin={30} textSize={35}>But wait, there's a lot of <S type={"italic"}>noise</S> in that code 🤔</Text>
              <CodePane textSize={22} source={ApolloPropsPoluted} lang={"javascript"}/>
          </Slide>

          <Slide bgImage={back} bgImage={back}>
            <Layout>
              <Fill>
            <Text margin={30} textSize={35}>The <Code lang={"javascript"}>graphql</Code> function second parameter</Text>
            <CodePane textSize={22} source={ReactComponentWithQueryComplex} lang={"javascript"}/>
              </Fill>
            </Layout>
          </Slide>

          <Slide bgImage={back} bgImage={back}>
            <Layout>
              <Fill>
                <Text margin={30} textSize={35}>This way, our component will look like this 👇</Text>
                <CodePane textSize={22} source={FinalReactComponent} lang={"javascript"}/>
              </Fill>
            </Layout>
          </Slide>

          <Slide bgImage={back} bgImage={back}>
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

          <Slide bgImage={back} bgImage={back}>
            <Text textSize={80} margin={30} bold>Your turn now! 💪</Text>
          </Slide>
        </Deck>
    );
  }
}

