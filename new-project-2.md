### npm initial packages
```
npx create-react-app <MY-APP-NAME> --template typescript && npm i dotenv cors && npm i -D sass gh-pages
```
### Replaces index.css by index.scss with code lines below and don't forget change path in index.tsx to import './index.scss';:
```
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500;700&family=Inter:wght@400;500&family=Karla:wght@400;500;700&display=swap');

:root {
  --typeface-karla: 'Karla', sans-serif;
  --typeface-inconsolata: 'Inconsolata', monospace;
  --typeface-inter: 'Inter', monospace;

  --main: #000;
  --white: #fff;
  --white-light: #eee;
  --gray-light: #d3d3d3;
  --silver: #c0c0c0;
  --gray: #808080;

  --background: radial-gradient(circle, #d6d6d6 37%, #bbb 71%);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: var(--typeface-inter);
}

```
### Add to package.json:
```
"homepage": "https://<git_username>.github.io/<project_name>",
```
```
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
```
### Push everything to GitHub
```
git commit -am "gh-pages support"
```
```
git push
```
```
npm run deploy
```
### Last step
Make sure to create a branch on git to contrain all initial changes `Project ready`
