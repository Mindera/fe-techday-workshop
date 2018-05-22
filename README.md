# fe-techday-workshop


Chat room: https://tlk.io/mindera

Requirements
- Node  8.11.2 LTS
- Text editor (sublime, vscode, atom etc)
- Bash terminal (git bash for windows)

Install all dependencies
```
npm install
```

To run the app
```
npm start
```
[TODO]

- [ ] Create README.md
- [ ] Create presentation (insert link here)

- [ ] Explain the role of `react-apollo`
- [ ] Create workshop project (create-react-app)
- [ ] GraphCMS API


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

