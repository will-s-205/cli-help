
# Create new project instructions
Instructions below is a usual flow that I follow on the daily basis. Stack consist of:
- React
- Typescript
- SASS

## React TS
`npx create-react-app <my-app-name> --template typescript`

## SASS
`npm install --save-dev sass`

Replaces `index.css` by `index.scss` with code lines below:
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

  --backgrond: radial-gradient(circle, #d6d6d6 37%, #bbb 71%);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```
## Useful info:
- [GIT Basic writing syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)






