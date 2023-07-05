# [Create new project](https://github.com/will-s-205/cli-helper)
Instructions below are the usual CLI flow that I follow on a daily basis. Stack consist of:
- React
- Typescript
- dotenv
- SASS

## [React TS](https://create-react-app.dev/docs/adding-typescript/)
```
npx create-react-app <MY-APP-NAME> --template typescript
```
Don't forget to push it to the GitHub

## [SASS](https://github.com/sass/dart-sass#from-npm)
```
npm install --save-dev sass
```
Replaces `index.css` by `index.scss` with code lines below and don't forget change path in `index.tsx` to `import './index.scss';`:
```
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500;700&family=Inter:wght@400;500;700&display=swap');

:root {
  --typeface-inconsolata: 'Inconsolata', sans-serif;
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
## [GitHub Pages](https://docs.github.com/en/pages/quickstart)
Deploy React App to Github pages

Add in the beggining of the package.json: 
```
"homepage": "https://<git_username>.github.io/<project_name>",
```
Add under the "scripts" for the same package.json:
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
In project directory - install `gh-pages`: 
```
npm install gh-pages --save-dev
```
### Push everything to the git: 
But right before that remove or update starting lines of code in new react project like: `favicon icon`, `reportWebVitals()`, `project name in browser tab`, etc
```
git commit -am "gh-pages support"
```
```
git push
```
```
npm run deploy
```
### Results:
After running deploy command you should see "Published"

From now on your project will be live all the time on github pages as a static webpage ([no node js](https://stackoverflow.com/questions/15718649/how-to-publish-a-website-made-by-node-js-to-github-pages))
### IMPORTANT:
got to your project on Github => Settings => Pages

hit a checkbox for "Enforce HTTPS"

requiered to avoid security check that could prevent visitors from landing on a webpage
## Last step:
Make sure to create a branch on git to contrain all initial changes `Project ready`
## Useful info:
- [GIT Basic writing syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [Vulnerabilities after running NPM Install](https://www.voitanos.io/blog/don-t-be-alarmed-by-vulnerabilities-after-running-npm-install/)






