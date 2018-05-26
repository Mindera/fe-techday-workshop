import React, { Fragment } from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Link,
  Slide,
  Text,
  Notes,
  CodePane,
  Code,
  Fit,
  Fill,
  Layout,
  S,
  Image,
  Appear,
} from "spectacle";

import GraphLogo from '../../assets/graphqlLogo.svg';
import GraphCMSLogo from '../../assets/graphcms.png';

const TopLegend = ({ children, ...other }) => {
  return <Text textSize={30} {...other} bold textAlign="left">{children}</Text>
}

const TitleText = ({ children, ...other }) => (
    <Text margin={30} textSize={60} {...other}>{children}</Text>
);

const BodyText = ({ children, ...other }) => (
    <Text textSize={28} {...other}>{children}</Text>
);

const structureWords = [
  'Setup',
  'Build GraphQL service',
  'Build Folio app using React',
  'Deploy using Firebase',
];

const glossaryWords = [
  'Git',
  'Node',
  'GraphQL',
  'GraphCMS',
  'React',
  'React Apollo',
  'Firebase'
];

const Slides = [
  <Fragment>
    <TitleText bold>4 stages</TitleText>
    <div style={{ textAlign: "center" }}>
      {structureWords.map((word) => (
          <Appear>
            <ListItem textColor={"black"}>{word}</ListItem>
          </Appear>
      ))}
    </div>
  </Fragment>,
    <Fragment>
      <TitleText bold>glossary</TitleText>
      <div style={{ textAlign: "center" }}>
        {glossaryWords.map((word) => (
          <Appear>
            <ListItem textColor={"black"}>{word}</ListItem>
          </Appear>
        ))}
      </div>
    </Fragment>,
  <Fragment>
    <Image src={GraphLogo}/>
    <TitleText bold>GraphQL</TitleText>
    <BodyText>Is a data query language</BodyText>
  </Fragment>,
  <Fragment>
    <BodyText textAlign="left">GraphiQL client</BodyText>
    <Link href="https://app.graphcms.com/1fe02e4a-c3cc-4295-86ca-e06f25d8dca0/graphiql">
      <Image src="https://raw.githubusercontent.com/milroc/play-with-node-graphql/master/graphql.gif"/>
    </Link>
    <Notes>
      <p>Explicar rest</p>
    </Notes>
  </Fragment>,
  <Fragment>
    <Image src={GraphLogo} height={120}/>
    <List ordered style={{ textAlign: "center" }}>
      <Appear>
        <ListItem textColor={"black"}>Documentation</ListItem>
      </Appear>
      <Appear>
        <ListItem textColor={"black"}>Simple</ListItem>
      </Appear>
      <Appear>
        <ListItem textColor={"black"}>Fast</ListItem>
      </Appear>
    </List>
  </Fragment>,
  <Fragment>
    <Image src={GraphLogo}/>
    <TitleText bold>Let's divide into two major parts</TitleText>
    <List ordered style={{ textAlign: "center" }}>
      <Appear>
        <ListItem textColor={"black"}>Server</ListItem>
      </Appear>
      <Appear>
        <ListItem textColor={"black"}>Client</ListItem>
      </Appear>
    </List>
  </Fragment>,
    <Fragment>
      <Image height={120} src={GraphCMSLogo}/>
      <TitleText bold>What is GraphCMS</TitleText>
    </Fragment>,
  <Fragment>
    <TitleText bold>Let's create the service</TitleText>
  </Fragment>
];

export default Slides;
