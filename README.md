# common-components
Set of UI pieces for all three major Javascript frameworks, built using Stencil and Web components!

# getting started 
- for Stencil Webcomponents/Angular package execute: 
```sh
npm i -S @common-components/core
```
<a href="https://www.npmjs.com/package/@common-components/core">NPM Package</a>
- for React package execute: 
```sh
npm i -S @common-components/react
```
<a href="https://www.npmjs.com/package/@common-components/react">NPM Package</a>
- for Vue package execute: 
```sh
npm i -S @common-components/vue
```
<a href="https://www.npmjs.com/package/@common-components/vue">NPM Package</a>

# components
- <a href="https://github.com/sebdybowski/common-components/tree/main/packages/core/src/components/button">button</a>
- <a href="https://github.com/sebdybowski/common-components/tree/main/packages/core/src/components/link">link</a>
- <a href="https://github.com/sebdybowski/common-components/tree/main/packages/core/src/components/heading">heading</a>
- <a href="https://github.com/sebdybowski/common-components/tree/main/packages/core/src/components/paragraph">paragraph</a>
- <a href="https://github.com/sebdybowski/common-components/tree/main/packages/core/src/components/table">table</a>

# local setup
## prerequisites
- node `>= v16`

## steps
- in the root directory run:
```sh
npm i
npx lerna bootstrap
npx lerna run build
```
- to see the demo components navigate to `applications/react-app`, `applications/vue-app` or `applications/angular-app` and execute:
```sh
npm run start
```

# credits
Big thanks to Cracow University of Economics for motivating me to create this project as part of my Master's Thesis!