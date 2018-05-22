## WIP

[TODOs]
- [ ] Create README.md
- [ ] Create presentation (insert link here)
- [ ] Explain the role of `react-apollo`
- [ ] Create workshop project (create-react-app)
- [ ] GraphCMS API

# Up and running with React and GraphQl using GraphCMS

This workshop is about learning about how to build simple react components and connect them to a graphql layer.

### Workshop resources:

Chat room: https://tlk.io/mindera
GraphCMS: https://app.graphcms.com/login
Presentation: https://mindera.github.io/fe-techday-workshop

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

### Workshop timeline

Presentation (10/15min)

---
Setup (15min)
- Install node
- Clone project
- Verify everyone is running the project

---
GraphCMS (45min)

- Create model:
```Project
type Project @model {
  createdAt: DateTime!
  description: String @defaultValue(value: "Project description")
  id: ID! @isUnique
  isPublished: Boolean! @defaultValue(value: false)
  projectImages: [Asset!]! @relation(name: "AssetProjectProjectImages")
  technologies: [TechnologiesList!]
  title: String! @defaultValue(value: "Project title")
  updatedAt: DateTime!
}
```

- API authentication
  -- Bearer Auth

---
React

- Connect API and verify data
- Create `Title` component
- Create `Description` component
- Create `Image` component
- Create `Technologies` component

