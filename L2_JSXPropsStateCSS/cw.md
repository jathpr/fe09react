### JSX

![JSX](./jsx.png)
https://ru.reactjs.org/docs/introducing-jsx.html
https://ru.reactjs.org/docs/jsx-in-depth.html

### CSS

##### Simple

![CSS](./css.png)

##### Module

[CRA realization](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)

![CSS module](./css_module.png)

### Элементы

`const element = <h1>Hello, world</h1>;`

https://ru.reactjs.org/docs/rendering-elements.html

### Props

https://ru.reactjs.org/docs/components-and-props.html

Get props
![Get props](./prop_get.png)

Set props
![Set props](./prop_set.png)

### State

https://ru.reactjs.org/docs/hooks-state.html

### Events

like onClick  
https://ru.reactjs.org/docs/handling-events.html

### Notes

- for fix all errors
  yarn eslint ./src --ext .jsx --fix

- <> </> react fragment

- valid values for jsx - true/false, null/undefined, string, number, JSX.Element, React.Component, arrays of all this guys

- for vscode eslint autofix (add it to json view of settings)
  "editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
  },

- advice - install this shell - `zsh` and this for it customization `oh-my-zsh`
