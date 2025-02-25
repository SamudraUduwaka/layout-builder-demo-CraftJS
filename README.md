# Simple Layout Builder with CraftJS

<img src="/resources/UI.png"/>

## How to run

### Create a vite project

```bash
npm create vite@latest layout-builder-v7-demo --template react-ts    

cd layout-builder-v7-demo   
```

### Install Dependencies
```bash
npm install react@18 react-dom@18 @types/react@18 @types/react-dom@18

npm install 

npm install @craftjs/core @material-ui/core @mui/material react-contenteditable material-ui-color-picker 
```

If the above didn't work, use with `--legacy-peer-deps` tag
```bash
npm install @material-ui/core --legacy-peer-deps 
```

### Run the project
```bash
npm run dev
```


### Demo

![](https://github.com/SamudraUduwaka/layout-builder-v7-demo/blob/6810e88622af11b1123e05954224534eedd7445c/resources/Demo.mov)
<video width="320" height="240" controls>
  <source src="/resources/Demo.mov" type="video/mov">
</video>

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
