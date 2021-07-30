создать реакт проект
yarn create react-app nameOfTheApp
(для этого понадобится установленный yarn. Для этого понадобится установленный node.js)
запустить проект, запустить тесты, собрать проект.
опционально - сделать eject
настроить eslint
скрипт для линта
"eslintConfig": {
"extends": [
"react-app",
"react-app/jest",
"plugin:prettier/recommended"
],
"plugins": [
"eslint-plugin-import",
"prettier"
]
},
добавляется в package.json
и установить зависимости yarn add prettier eslint-plugin-prettier eslint-config-prettier -D
так же понадобится добавить расширение eslint в vscode (в шторме есть аналоги), это добавит подсветку синтаксиса при разработке

слайды по гиту https://slides.com/danielsuleiman/git
