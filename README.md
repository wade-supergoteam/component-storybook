# Component-storybook
> Based off of [styled-bootstrap](https://github.com/xDae/styled-bootstrap) component-storybook is the Super GO Team component libaray with linting, theming, react-storybook documentation and general company guide lines for component development.

<img src="https://gitlab.com/supergoteam/component-storybook/raw/master/docs/images/super-go-team.logo.png" alt="Super GO Team" width="250"/>

## Table of Contents

* [Table of Contents](#table-of-contents)
    * [💪 Motivation](#-motivation)
    * [🚀 Quick Start](#-quick-start)
      * [🔎 Standards](#-standards)
        * [Working on it](#working-on-it)
        * [Using it](#using-it)
    * [⚒️ Tools](#-tools)
    * [⚙️ Technologies](#️-technologies)
    * [📜 Scripts](#-scripts)
    * [🗄️ File Structure](#-file-structure)
    * [✒️ Contributing](#-contributing)
    * [🌟 Team](#-team)
    * [License](#license)

## 💪 Motivation
Provide 🔥 Super GO Team with reusable, themeable, code-covered and consistently documented visual components. Whilst primarily intended for display component any common abstractions can also be stored within this library. What should not be stored in this library is site or project specific functionality that can not be re-used without modification.


## 🚀 Quick Start

### 🔎 Standards
For the pleasure of everyone and the sainity of the maintainers we use the following code standards/linting tools. `flow`, `eslint`, `prettier` details of which can be found in the [📜 Scripts](#📜-scripts) section for post work cleanups. However we strongly recomend you find and configure the corrosponding addons within your coding editor. (WIP)Currently these aren't enfored by git hooks but this is something we will be implementing soonᵀᴹ 

#### Working on it

Git it, install it, run it. Simply run the following command and you are off ready to roll with the complete storybook.

```
git clone https://gitlab.com/supergoteam/component-storybook.git;
cd component-storybook;
npm install;
npm start;
```


#### Using it

Out of the box you get grid-based layout and bootstrap-styled components. Each component can have its theme properties overwritten at component level or via `ThemeProvider` which can be used to overwrite the entire set. Finally, each component can be easily extented using styled-components (or not but thats what we use!).

To use in your project include it in your package.json then simple import and use. Consider setting it up stand alone using the step in [Working on it](#working-on-it) or lets pretend you know what you are up to and just do the following.

*Install package*
```
npm i component-storybook;
```

*Include a component*
```
import { Button } from "component-storybook"
...

<Button>I'm a button</Button>
<Button outline>Butti'm better.</Button>

...
```

## ⚒️ Tools
The following tools have been used in the core functionality of this library

* [Create React App](https://facebook.github.io/create-react-app/) - *Basic application tooling for react based applications. Most suited for dynamic applications*
* [Jest](https://jestjs.io/docs/en/tutorial-react) - *Testing for Javascript*
* [Storybook](https://storybook.js.org/) - *Beautful documentation with powerful addons such as withKnobs(component interaction), withInfo(view react code), withStoryshot(take jest snapshots)*
* [Styled Components](https://www.styled-components.com/) - *Use the best bits of ES6 and CSS to style your apps without stress 💅*

## ⚙️ Technologies
* [Node](https://nodejs.org/en/) - *NodeJS runtime for Javascript*
* [npm](https://www.npmjs.com/get-npm) - *Javascript package manager and environment*
* [React](https://reactjs.org/) - *Declarative component based JSX. Write JavaScript then add HTML not the other way round.*

## 📜 Scripts
The following scripts be ran from the project root using `npm run` e.g, `npm run start` will start react and open the application.

 * `build` - *Clean up and create a new static bundle*
 * `build-bundle` - "rollup -c",(WIP)
 * `build-packages` - "babel src/ --out-dir lib/ --copy-files",(WIP)
 * `flow` - *Check types and display any potential issues.*,
 * `clean` - *Tidy up old builds*,
 * `lint:css` - "stylelint './src/components/**/*.js'",(WIP)
 * `prepublish` - "npm run build",(WIP)
 * `start` - *Start the application*,
 * `test` - "react-scripts test --env=jsdom",(WIP)
 * `test:coverage` "react-scripts test --env=jsdom --coverage" *Run test with cover coverage reporting, directly to console and /coverage/index.html*
 * `prettier` - "prettier --write 'src/**/*.js'"(WIP)

## 🗄️ File Structure
 There is a reasonable amount of noise in the root file structure due to linting, formatting, integrity and packaging tools, some of which are documented above in the scripts section. (WIP) It is likely that a breif synopsis of all of these tools and how Super GO Team will in the near future find their way into [process-and-tools](https://gitlab.com/supergoteam/process-and-tools).

 src contains the majority of the fun stuff and in fact 90% of the working code base that will get exported to the distributed version of the repo. 

### Component files
`src/${ComponentName}/index.js` each component is in its own folder with a set of coupled files for testing, stories, styles and utils. Whilst we are generally against tight coupling, layers of abstraction here would be counter productive towards the accesibility of this package. <span title="Keep">K</span>.<span title="It">I</span>.<span title="Simple">S</span>.<span title="Stupid">S</span>!

`src/Button/__tests__/Button.test.js` jest test file that is ran using `npm test`. Test file will .test.js files will be ran automatically when in jest is watching.  /running `npm test:cover` in console will give you a text summary of current tests and coverage. It will also generate an interactive coverage report in `coverage/index.html`

`src/Button/__test__/__snapshots__/*` jest will generate snapshots of components it has seen here on first run and can be compared later to notify you of any changes that might have occured.

`src/Button/utils/*` some components will have utils which provide a subset of behaviours which are reused multiple times through out the main component or sibling components.

`src/Button/Button.js` styled component that can be configured with theme overides and configuration props. Some components such as `Card` will have sibling styled components such as `CardHeader`, `CardBody` ect.

`src/Button/defaultTheme.js` This really is the default theme, don't change this unless you are [Working on it](#working-on-it). For people [Using it](#using-it) this provides a complete set of all theme-properties that are available for overriding.

`src/Button/index.js` Normalised folder structure, how do I know what each component provides? Just look in the index baby!.



### Global files 
 `src/index.js` to be made available for people using this repo externally (God damn it index - you had one job!!!), 
 
 `src/utils/*` is an example of granular global styles which allow you to define, for example, padding or border-radius once and for it to be made available to all styled-components for glorious consitency. 
 
 `src/utils/defaultTheme.js` is an example of a global theme that you could provide from your own project via <ThemeProvider> when importing this package. 

### Storybook files
Storybook files are split between two places. The global settings in .storybook which control which addons are available, which addons are enabled globally and within the config an example of how to implement a global `<ThemeProvider>`
```
  ./.storybook/
  ./.storybook/addons.js - *Global addons registration for Storybook*
  ./.storybook/config.js - *Global config for Storybook (checkout the ThemeProvider example!)*
```

The second place is at component level within each of the component directories. e.g. `src/Button/stories/Button.story.js`. These files are all loaded into the global story config and are what make up the Storybook documentation. 





## ✒️ Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 🌟 Team 
- [Maintainer] Wade Montague <wade@superGOteam.com>
- [Maintainer] Andy Hall <andy@superGOteam.com>
- [Developer] Lusine Martirosyan <Lusine@superGOteam.com>

## License
[MIT](https://choosealicense.com/licenses/mit/)


<!-- 





[![npm](https://img.shields.io/npm/dt/component-storybook.svg)](https://www.npmjs.com/package/component-storybook)
[![npm](https://img.shields.io/npm/v/component-storybook.svg)](https://www.npmjs.com/package/component-storybook)
[![David](https://img.shields.io/david/xDae/component-storybook.svg)](https://david-dm.org/xDae/component-storybook)
[![Travis](https://img.shields.io/travis/xDae/component-storybook.svg)](https://travis-ci.org/xDae/component-storybook)
[![gitter](https://badges.gitter.im/rollup/rollup.svg)](https://gitter.im/component-storybook)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/xDae/component-storybook/blob/master/LICENSE)

## 📦 Components
  💻 = Demo

- [x] [[💻](https://xdae.github.io/component-storybook/storybook?selectedKind=Alert)] Alert
- [x] [[💻](https://xdae.github.io/component-storybook/storybook?selectedKind=Badge)] Barge
- [x] [[💻](https://xdae.github.io/component-storybook/storybook?selectedKind=Breadcrumb)] Breadcrumbs
- [x] [[💻](https://xdae.github.io/component-storybook/storybook?selectedKind=Buttons)] Button
- [x] [[💻](https://xdae.github.io/component-storybook/storybook?selectedKind=Card)] Card
- [x] [[💻](https://xdae.github.io/component-storybook/storybook?selectedKind=Collapse)] Collapse
- [x] [[💻](https://xdae.github.io/component-storybook/storybook?selectedKind=Dropdown)] Dropdown
- [x] [[💻](https://xdae.github.io/component-storybook/storybook?selectedKind=Forms)] Forms
- [x] [[💻](https://xdae.github.io/component-storybook/storybook?selectedKind=Forms)] Forms
- [x] [[💻](https://xdae.github.io/component-storybook/storybook?selectedKind=Headings)] Heading
- [ ] Input group
- [x] Jumbotron
- [x] [[💻](https://xdae.github.io/component-storybook/storybook?selectedKind=ListGroup)] List group
- [ ] Modal
- [ ] Navs
- [ ] Navbar
- [x] [[💻](https://xdae.github.io/component-storybook/storybook?selectedKind=Pagination)] Pagination 
- [ ] Popovers
- [x] [[💻](https://xdae.github.io/component-storybook/storybook?selectedKind=Progress)] Progress 
- [ ] Scrollspy
- [ ] Tooltips 
- Utilities
  - [x] [[💻](https://xdae.github.io/component-storybook/storybook?selectedKind=CLoseIcon)] Close icon

## 📖 Support

Please [open an issue](https://github.com/xDae/component-storybook/issues/new) for support.

## 🛎 Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/xDae/component-storybook/compare).

 -->