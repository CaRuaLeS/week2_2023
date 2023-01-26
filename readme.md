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

## Day 4

- para sacar el coverage `npm test -- --coverage`

  - te crea una carpeta con los datos

- Configurar el sonarcloud (instrucciones en la página de sonarCloud) con las githubn secreto
- Sonar te dice de crear una github action (en tu repo(local))
  - dentro de la carpeta workflow de github, ejecuta cualquier archivo, da igual el nombre
- crear en el repo la carpeta .github/workflow y dentro el archivo que sea `---.yml`
  - rellenar con el archivo dado (en github, o en resources discord)
- linea 19 de `build.yml` tiene un `run:prod`, que hay que añadir en package.json para indicarle que haga el coverage. Llama al script y linea como te de la gana, pero que sean las 2 iguales

```json
"scripts": {
    "test": "jest --watchAll",
    "test:prod": "jest --watchAll --coverage --watchAll=false",
    "prepare": "husky install"
  }
```

- Lo anterior sería nuestro gitHub action

- Seguir las instrucciones de SonarCloud

  - Crear un fichero `sonar-project.properties` en la carpeta del package.json
  - y rellenalo con lo que da la instrucción del sonar
  - ACORDARSE DE CAMBIAR EL ARCHIVO, QUE ES ESPECÍFICO DE CADA PROYECTO (cambiar proyectkey y organiación)

  - Que las action de gitHub tengas las 2 que hemos creado `add.yml` y `sonar.yml` (dentro de la carpetas que hemos dicho)
