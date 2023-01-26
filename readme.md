# Week 2. Bootacamp

Ejercicios semana 2 . Bootcamp Madrid

## Configuración

- .editorconfig
- .gitignore
- package.json (Add Prettier)
- Instalar dependencias desde package.json `npm i`
- crear repo: `git init`
- añadir al package.json `"type": "module"` debajo de "main"
- Install de eslint `npm i -D eslint`
- Configuración del eslint `npx eslint --init`
- Añadir `npm i -D eslint-config-prettier`
- Incluir en eslint.json "prettier" como última extensión
- Añadir carpeta con huskies
- Iniciar husky: `npx husky install`

## Jest install / setup (Babel added)

- Install jest como desarrollador e instalarlo con sus tipos y también instalar babel`npm i -D jest @types/jest @babel/plugin-transform-modules-commonjs`

- .eslintrc.json - Para dar acceso a jest en el eslintrc

```json
  "env": {
    "jest": true
  },
```

- jsconfig.json

```json
{
  "typeAcquisition": {
    "include": ["jest"]
  }
}
```

- package.json - añadir la configuración de babel para poder hacer test

```json
"babel": {
    "env": {
      "test": {
        "plugins": [
          "@babel/plugin-transform-modules-commonjs"
        ]
      }
    }
  }
```

- sustituir en package.json "scripts" test y ponerle `jest --watchAll`
