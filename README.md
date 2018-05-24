## WIP

[TODOs]
- [x] Create README.md
- [x] Create presentation
- [ ] Explain the role of `react-apollo`
- [x] Create workshop project (create-react-app)
- [x] GraphCMS API
- [ ] Create GraphCMS challenge tutorial
- [ ] Create React challenge tutorial
- [ ] Presentation layout (colors, fonts, etc)

# Up and running with React and GraphQl using GraphCMS

This workshop is about learning about how to build simple react components and connect them to a graphql layer.

### Workshop resources:

- Chat room: https://tlk.io/mindera
- GraphCMS: https://app.graphcms.com/login
- Presentation: https://mindera.github.io/fe-techday-workshop

### Requirements
- Node  8.11.2 LTS
- Text editor (sublime, vscode, atom etc)
- Bash terminal (git bash for windows)

### Running the project

Go to the app folder
```
cd ./app
```

Install all dependencies
```
npm i
```

To run the app
```
npm start
```

### Workshop timeline summary

Presentation (10/15min)

---

Setup (15min)

---

GraphCMS challenge(45min)

---

React (45min)

---
Questions

### Workshop Challenge

Setup
- Install node
- Clone project
- Verify everyone is running the project
- Create GraphCMS account in https://app.graphcms.com/signup

GraphCMS challenge

- Login into GraphCMS

- Create a `New Project` from `Scratch`

- After that we can start building our models


Create `Technologies` from `enum` type:
```
enum TechnologiesList {
    Node
    React
    Angular
    Jquery
    Html
    Css
    Sass
    Graph
  }
```

Create `Project` from `model` type:
```Project
type Project @model {
    description: String @defaultValue(value: "Project description")
    projectImages: [Asset!]! @relation(name: "AssetProjectProjectImages")
    technologies: [TechnologiesList!]
    title: String! @defaultValue(value: "Project title")
}
```

- Test you model on the `API Explorer`

Your service is done! Congratulations!

Lets start coding!

---

React challenge

- Step 1
First of all we need to add a environment variable when running our app
To that duplicate `.env` file and rename to `.env.local`
After that add your token
```
REACT_APP_GRAPH_CMS_FOLIO_TOKEN=<your token>
REACT_APP_GRAPH_CMS_FOLIO_ID=<your graphcms id>
```

- Step 2
Connect API and verify data structure
...WIP

- Step 3
Build layout (WIP)
Create `Title` component
Create `Description` component
Create `Image` component
Create `Technologies` component
...WIP

- Extra
You can try their BETA https://beta.graphcms.com
