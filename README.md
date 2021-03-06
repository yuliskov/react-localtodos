# Another Todo sample app based on React

## Description

This is a quick show off what technologies used in front-end development. Todo app was chosen because of everyone familiar with it. It doesn't take much time to read through sources. Visual style taken from [local-todos](http://backbonejs.org/docs/todos.html) Backbone sample. Beyond React+Reduce+Webpack usage you can find here: testing, localization, persistence layer support, validation, per-component styling, undo implementation.

Running sample can be found here: [https://yuliskov.github.io/react-localtodos](https://yuliskov.github.io/react-localtodos)

## Features

- Add/Update/Delete todo item
- Group todo operations
- Undoing actions
- Select translation
- Saving state in local storage
- Authorization (will be added soon)

## Used technologies

- Using React, Redux, Webpack
- Testing via [Jest + Enzyme](http://redux.js.org/docs/recipes/WritingTests.html)
- Localization via [React Intl](https://www.smashingmagazine.com/2017/01/internationalizing-react-apps)
- Styling via Stylus
- Conforms Redux Ducks specs
- Uncontrolled components example

## Running Example

**In the project directory, run:**
```console
$ npm install
$ npm start
```
**Open [http://localhost:3000](http://localhost:3000) to view it in the browser.**

## Testing Example

**In the project directory, run:**
```console
$ npm install
$ npm test
```

## Notes

- Redux Ducks and example app
    - https://github.com/erikras/ducks-modular-redux
    - https://github.com/erikras/react-redux-universal-hot-example
- Using Jest with Webpack
    - https://facebook.github.io/jest/docs/webpack.html
