# Testing Process

# code evolution all process and also definitions and work of different things

## Jest - Jest is a delightful `JavaScript Testing Framework` with a focus on simplicity.[works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more]

## RTL - JS Testing utility, `provides virtual DOM` for test react components [Family of packages helps test UI components]

> NOTE - RTL is wrapper around DOM testing library

**types of tests -->**

- Unit test
- Integration test
- E2E tests

## npm test - which given bydefault [with watch type -> ]

- Press f to run only failed tests.
- Press o to only run tests related to changed files.
- Press q to quit watch mode.
- Press p to filter by a filename regex pattern.
- Press t to filter by a test name regex pattern.
- Press Enter to trigger a test run.

## create a component Greet and test for that [used regex also]

## Watch mode - option to watch files that have changes since last commit and executs tests [optimization to test run fast regardless of how many tests you have]

## filter - via watch mode filters and

also via test.only (fit) or test.skip (xit) //// fit or

## gerouping tests - describe('', () => {})

## filename convension -

.test.js // .test.jsx // .spec.js // .spec.tsx //[ .js / .tsx] under **test** folder //

## code coverage - metric for understand how much code tested

-- add coverage script in package.json
--> 'coverage': 'npm test -- --coverage'
--> 'coverage': 'npm test -- --coverage --watchAll' for cover all
--> 'coverage': "npm test -- --coverage --watchAll --collectCoverageFrom='src/componets/**/\*.{ts,tsx}'"
here we are using coverage for just components folder because all the things will go within components
--> 'coverage': "npm test -- --coverage --watchAll --collectCoverageFrom='src/componets/**/_.{ts,tsx}' --collectCoverageFrom='!src/components/\*\*/_.{types,stories,constants,test,spec}.{ts,tsx}'"
here we are using not(!) for excluding files

statement coverage
branches coverage
function coverage
line coverage

## coverage threshold - with jest possible to specify minimum threshold coverage reports - if threshold won't met jest fails

we can give add cmd on package.json -->

"jest":{
"coverageThreshold":{
"global":{
"branches": 80,
"functions": 80,
"lines": 80,
"statements": -10
}
}
}

if jest will fail if coverage not met given criteria

## Assertions - when writing tests, need to check values meet certain conditions

expect(value) - argument should be the value that code produces
or we can use matcher functions with expect --> expect(value).toBeInTheDocument()
matcher can optionally accept argument which is correct expected value

## Matcher functions -- https://jestjs.io/docs/using-matchers

you can scroll and see matchers for -->
truthiness, number, string, array and iterables, exceptions etc

## jest-dom -- with jest-dom we can use some extra matchers which are not come with jest,

-- jest, out of the box provide matcher functions for js testing, that does not involve UI or DOM
--> https://github.com/testing-library/jest-dom
from this link you can see all matchers

## RTL -

### what to test --> (means what we can test with any component)

- test component renders
- test components resnders with props
- test components renders in different states
- test components reacts to events

### what not to test -->

- implementation details
- third party code (lik meterial UI already well tested)
- code that is not important from a user point of view

## RTL queries - Queries are the methods that testing library provides to find elements on the page

every test we write generally involve the following basic steps -->

1. Render the Component -- (via render() method)
2. Find an element rendered by the document -- (core api provided by RTL to find elements)
3. Assert against the element found in step 2 which will pass or fail the test -- (expect() passing value and combine with matcher function from jest or jest-dom)

find single element --> getBy.. / queryBy.. / findBy..
find multiple elemts --> getAllBy.. / queryAllBy.. / findAllBy..

> we need to add 1 suffix to complete this queries --> Role / LabelText / PlaceHolderText / Text / DisplayValue / AltText / title / TestID

## getBy.. --> video - 18

## getByRole -->

query for elements with the given role - (like button element has button role, anchor element has a link role, h1 to h6 have a heading role and so on)
(we can add role to any element - if anchor is present as button in navbar, we can add role='button')
Eg -
const nameElement = `screen.getByRole('textbox');`
const nameElement = `screen.getByRole('combobox');`
const nameElement = `screen.getAllByRole('button');`
const nameElement = `screen.getAllByRole('checkbox');`

**Note** - can find all elements list for getting by role go to website -

> list for getByRole - https://testing-library.com/docs/queries/byrole

> find all - https://www.w3.org/TR/html-aria/#docconformance

<!-- video - 19 -->

## getByRole - with options (use for targetting actual element)

Options with getByRole - like if we have two 'textbox' then we can give extra parameter to target precise element -->
eg -
`const nameElement = screen.getByRole('textbox', {name: 'email'})`;

1. name --> accessible name is for simple cases equal to -

- the label of a form element - (we can use with input elements)
- the text content of a button or
- the value of the aria-label attribute

2. level --> use for headings

- h1 - level: 1 -
- h2 - level: 2 -
- h3 - level: 3 -
- h4 - level: 4 -
- h5 - level: 5 -
- h6 - level: 6 -

3. hidden
4. selected
5. checked
6. pressed
   go for this all with docs

## getByLabelText -

it search for the label that matches the given text, then find the element associated with that label

1. simple

- `const nameElement2 = screen.getByLabelText(/name/i)`

2. when element wrapped by label

- `const termsElement2 = screen.getByLabelText(/terms and conditions/i)`

3. when more than 1 label , with same text -

- `const nameElement3 = screen.getByLabelText(/name/i, {selector: 'input'})`

## getByPlaceholderText -

it search for all elements with a placeholder attribute and find one that matches the given text

- `const nameElement4 = screen.getByPlaceholderText(/fullname/i)`

## getByText -

it search for all element that have a text node with textContent matching the given text.
mostly use in paragraph, div or span

- `const paragraphElement = screen.getByText(/fields are mandatory/i)`

## getByDisplayValue -

it returns the input, textarea or select element that has the matching display value  
(for this we have added a value on name field, but if you render it will give error because we are using this without )

- `const nameElement5 = screen.getByDisplayValue(/ajay/i)`

## getByAltText -

it returns the element which has given alt text

- supports elements which accepts alt attribute -- img, input, area or custom element
  (for this exmple we have added image tag with alt attribute)
- `const imageElement = screen.getByAltText(/person with a laptop/i)`

## geByTitle -

it returns the element which has matching title attribute
(for this exmple we have added span just before img tag)

- `const closeElement = screen.getByTitle(/title/i)`

## getByTestId --> 'data-testid'

it returns the element that has the matching data-testid attribute
(we can add 'data-testid' as attribute and can use it for getting element)
(for this exmple we have added a div just before <form> tag and added - data-testid)

- const customElement = screen.getByTestId(/custom-element/i)

## Priority order for queries - video 27

_Your test should resemble how users interact with your code as much as possible_

1. getByRole
2. getByLabelText
3. getByPlaceholderText
4. getByText
5. getByDisplayValue
6. getByAltText
7. getByTitle
8. getByTestId

## getAllBy... - Query multiple elements - video 28

1. getAllByRole - const listItemELements = screen.getAllByRole('listitem')
2. getAllByLabelText -
3. getAllByPlaceholderText
4. getAllByText
5. getAllByDisplayValue
6. getAllByAltText
7. getAllByTitle
8. getAllByTestId

## textMatch -- video 29

we pass everytime argument is string but we can use different type - 'textMatch'
which repesents a type which can be a - string / regex / function

1. string - example -

<div>Hellow World</div>
screen.getByText('Hellow World')    <!-- Full string match  -->
screen.getByText('low World', {exact: false})    <!-- substring match  -->
screen.getByText('helloW worlD')    <!-- ignore case  -->

2. regex - example -

<div>Hellow World</div>
screen.getByText(/World/)    <!-- sub string match  -->
screen.getByText(/world/i)    <!-- substring match, ignore case  -->
screen.getByText(/^hellow world$/i)    <!-- full string match , ignore case  -->

3. custome function -
   syntax - `(content?: string, element?: Element : null) => boolean`
   (booolean will return true for match and false for mismatch)
   example -
   `screen.getByText((content) => content.startsWith('Hello'))`

## queryBy & queryAllBy - (use for not rendered elements)

## queryBy -

- Return the matching node for a query otherwise return null
- Useful for asserting an element which is not present
- Throws an error when more than one match found

1. queryAllByRole - `const startLearningButton = screen.queryByRole('button', {name: /start learning/i})`
2. queryByLabelText -
3. queryByPlaceholderText
4. queryByText
5. queryByDisplayValue
6. queryByAltText
7. queryByTitle
8. queryByTestId

## queryAllBy -

- Returns an array for all matching nodes for a query, otherwise empty array

1. queryAllByRole -
2. queryAllByLabelText -
3. queryAllByPlaceholderText
4. queryAllByText
5. queryAllByDisplayValue
6. queryAllByAltText
7. queryAllByTitle
8. queryAllByTestId

## findBy & findAllBy - Appearance / disappearance

If element not present in the DOM to begin but their way into the DOM after some time
for example - data fetched from server will be rendered only after a few milliseconds

## findBy -

- Returns a promise which resolves when an element is found which matches the given query
- promise is rejected if no element found or if more than one element found after a default timeout of 1000ms
- example -

```
const startLearningButton2 = await screen.findByRole('button', {
            name: /start learning/i
        },{
            timeout: 2000
        })
```

## findAllBy -

- Returns a promise which resolves to an array of elements when any elements are found which matches the given query
- promise is rejected if no element found after a default timeout of 1000ms

## Manual queries -

We can use the regular querySelector DOM api to find elements

## Debugging - video 33

- `screen.debug()` - formatted DOM tree
- `logRoles(view.container)` - print alll roles under rendered DOM tree
  (view = object returned by render method -> `const view = render(<Body >)`)

## Testing playground - video 34

Chrome extension for getting details when testing the app
name- testing playground

## User Interaction - video 35

A click using a mouse or keypress using a keyboard
software has to respond to such interaction
Tests should ensure the interactions are handled as expected

## User Event -

- A companion library for Testing Library that simulates user interactions by dispatching the events that would happen if the interaction took place in a browser
- It is recommneded way to test user intearctions with RTL
  (with create react app 'userEvent' automatically intalled - we can use it directly)
  (but older version installed, install new -> `npm upgrade @testing-library/user-event`)

## fireEvent & userEvent -

- fireEvent -> it is a method from RTL which is used to dispatch DOM events

- userEvent -> it simulates full interactions, which may fire multiple events and do additional checks along the way

## userEvent is better than fireEvent - why -->

- we can dispatch the change event in an input field using fireEvent
- when auser types into a textbox, the element has to be focused, and then keyboard and input events are fired and the selection and value on the on the element are manipulated as they type
- when user allows you to describe a user interaction intead of a concrete event. it adds visibility and interactibility checks along the way and manipulates the DOM just like a usr interaction in the browser would. it factors in that the browser
- example- wouldn't let a user click a hidden element or type in a disabled text box.

## Pointer interactions -

userEvent - all userEvents are async functions, use -- async await

- exmpl - `await user.click(incrementButton)`

- convenience API are runs pointer api in background (mostly used) - example-
  for mouse clicking - click() / dblClick() / tripleClick()
  for mouse movement - hover() / unhover()

- pointer API's - (less used) - exmpl -

1. pointer({keys:'[Mouseleft]'})
2. pointer({keys:'[Mouseleft][Mouseright]'})
3. pointer('[Mouseleft][Mouseright]')
4. pointer('[Mouseleft>]')
5. pointer('[/Mouseleft]')

### Note - remember all user events are async methods so use always - async await for any type of user event

## Keyboard interactions -

there are different interactions via keyboard api -->
keyboard api, utility api and convenience api

### utility API -

1. type() -

```
await user.type(amountInput, '10')
```

2. clear() -

```
await userEvent.clear(screen.getByRole(/textbox/i))` --> `.toHaveValue('')
```

3. selectOptions() -

```
test('selectOptions', async () => {
    render(
        <select multiple>
            <option value="1">A</option>
            <option value="2">B</option>
            <option value="3">C</option>
        </select>
    )
// we can specify label and and value both - ['1', 'C']
await userEvent.selectOptions(screen.getByRole('listbox'), ['1', 'C'])
expect(screen.getByRole('option', {name: 'A'}).selected).toBe(true)
expect(screen.getByRole('option', {name: 'B'}).selected).toBe(false)
expect(screen.getByRole('option', {name: 'C'}).selected).toBe(true)
})
```

4. deselectOptions() -

```
test('deselectOptions', async () => {
render(
    <select multiple>
        <option value="1">A</option>
        <option value="2" selected>B</option>
        <option value="3">C</option>
    </select>,
)
await userEvent.deselectOptions(screen.getByRole('listbox'), '2')
expect(screen.getByText('B').selected).toBe(false)
})
```

5. upload( ) -

```
test('upload file', async () => {
    render(
        <div>
            <label htmlFor="file-uploader">Upload file:</label>
            <input id="file-uploader" type="file" />
        </div>,

    )
const file = new File(['hello'], 'hello.png', {type: 'image/png'}) screen.getByLabelText(/upload file/i)
const input = await userEvent.upload (input, file)
expect(input.files[0]).toBe(file)
expect(input.files.item(0)).toBe(file)
expect(input.files).toHave Length(1)
})
```

### Convenience APi - there is only one user this

- tab() -

```
    await user.tab()
    expect(incrementButton).toHaveFocus()
```

### clipboard APi -

- copy()
- cut()
- paste()

### keyboard APi -

- example -

1. for typing ->
   `keyboard('foo')` -> translates to : f, o, o

2. for typing with holding ->
   `keyboard('{Shift>}A{/Shift}')` -> translate to: Shift(down), A, Shift(up)

### We have learnt under user interaction section ->

> - user-event library
> - CRA(create-react-app installs user-event but needs upgrading)
> - Mouse and keyboard interactions with counter component
> - Mouse click events
> - Keyboard type and tab events
> - Convenience API, utility API, clipboard API
> - Pointer and keyboard APIs

## Providers - video 38

### material ui - component library for react apps -

we need to check with providers also
(like we are going ith MUI here- mui-mode.tsx and AppProviders.tsx),
there is a way to provide wrappers when we test -> `we are rendring <MuiMode /> and given second parameter as object with wrapper and working component as wrapper`

```
render(<MuiMode />, {
    wrapper: AppProviders
})
```

## Custom render function - video 39

go to - *https://testing-library.com/docs/react-testing-library/setup#custom-render*.
read -> need to create a under src - `test-utils.tsx`.
copy paste the given code and make changes according to your file structure

- code we have under - `test-utils.tsx` -->

```
import React, {ReactElement} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import { AppProviders } from './providers/AppProviders'

const customRender = (
  ui: ReactElement,      // ui is component we want to render
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AppProviders, ...options})  // AppProvider we want to provide

export * from '@testing-library/react'  // export everything from react testing library
export {customRender as render}   // we are exporting custom render function as render
```

**note** - remove second option which given under render (means: render component only)-->
`render(<MuiMode />)`.

- run test it will work

## Custom react hooks - testing video 40

created custom hook - `useCounter` , (and a type for props)

**custom hook props**

```
export type UseCounterProps = {
  initialCount?: number;
};
```

**Custom hooks**

```
import { useState } from "react";
import { useCounterProps } from "./useCounter.types";

export const useCounter = ({initialCount=0}: useCounterProps = {}) => {
    const [count, setCount] = useState(initialCount)
    const increment = () => {setCount(count + 1)}
    const decrement = () => {setCount(count - 1)}

    return {count, increment, decrement}
}
```

> - we can't render useCounter directly by render it will give error,
> - we have a renderHook() provided by testing library, which can render hooks,
> - **note** - _unlike regular component which can be asserted using screen, hooks do not have DOM elements, instead renderHook will wrap the hook in a function component invoke the hook and returns an object from which we can destructure a property called result, see below -->_

```
const { result } = renderHook(useCounter)
```

on this result there is exist a property - 'current' which contain all the return values from customHook, so we can assert -->

```
expect(result.current.count).toBe(0)
```

> we can pass arguments to useCounter hook -->

```
const { result } = renderHook(useCounter, {
    // here we are specifying object because we written type of props as object
    initialProps: {
        initialCount: 10
    }
})
```

> Note - so for testing react Hooks we don't rely on render or screen, it rely on renderHoook

### act utility - (custom react hooks function test) - video 41

cover codes under act(...) which updating states

exmple

```
act(() => {result.current.increment()})
```

- Section learnt things -
  > - Wrapper option for providers
  > - custom render function
  > - test custom react hooks
  > - act utility

## mocking function - video 42

we need to create mock functions, like this - `const incrementHandler = jest.fn()`

```
const incrementHandler = jest.fn()
const decrementHandler = jest.fn()
render(<CounterTwo
    count={0}
    handleIncrement={incrementHandler}
    handleDecrement={decrementHandler}
    />);
const incrementButton = screen.getByRole('button', {name: /increment/i})
const decrementButton = screen.getByRole('button', {name: /decrement/i})

// user Events are async functions
await user.click(incrementButton)
await user.click(decrementButton)

expect(incrementHandler).toHaveBeenCalledTimes(1)
expect(decrementHandler).toHaveBeenCalledTimes(1)
```

## mocking http request - video 43 -

> Real Api's primarily used for `end to end test` not for unit or functional test

### note - we need to make MOCK_http request - reasons -->

- test runs multiple times so we can't use paid api for that
- we not need to check server is running or not

> Solution -> mock http req is test - we mock the res to the req, with the list of user or an error

### mock service worker -

> go to --> **mswjs.io** (api mocking library that uses service worker api to intercept actual request - it is closes thing to mocking server without having to create one)

### setup - mock service worker -

created a mocks folder under src first

- install - (https://mswjs.io/docs/getting-started/install) - npm install msw --save-dev
- configure - (https://mswjs.io/docs/getting-started/integrate/node#configure-server) - Copy code and paste under server.ts
- handlers give error - create `handlers.ts` under mocks folder - within that folder we handle all http request
- we need to handle rest api so - import rest from msw (alternative - graphQL)
- to handle rest api req - we need to specify its _method_, _path_ and _function_ that would return mock responce

### testing - mock service worker -

now we have servers and handlers - now we can test

> const users = screen.findAllByRole('listitem')  
> _used find because data fetcing is async_

```
it('renders list of users', () => {
    render(<Users />)
    const usersArray  = screen.findAllByRole('listitem')   // used find because data fetcing is async
    expect(usersArray).toHaveLength(3)            // data coming from mock res, length is 3
})
```

**NOTE** - if we run test it will give error because it is running original component and fetcing original rest api, so coming data length is 10

**Solution** - go to - (https://mswjs.io/docs/getting-started/integrate/node#using-create-react-app) - it is telling to modify _setup.tests.ts_ file -
_given code is_

```
// src/setupTests.js
import { server } from './mocks/server.js'
// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())
```

### Error handling - mock service worker - video 47

we written test for success res part not we need to write test for error part

> process - we need to reset the handler we have defined in the main handlers fun -> for that we need to hold server.ts

- code for set -

```
server.use(
    rest.get('https://jsonplaceholder.typicode.com/users',
    (req, res, context) => {
        return res(context.status(500))
    })
)
```

_\*\*WE learnt_

> Mock function with jest
> Mock HTTP requests with MSW
> Handle error responses with MSW

## Static analysis testing - video 48

> it is a precess of verifying that our code meets certain expectations without actualy running it
> Testing checks if code works or not, whereas static analysis checks if it is written well or not
> Static testing analyses aspects such as readability, consistency, error handling, type checking, and alignment with best practice

_Benefits_

- Ensure consistent style and formatting
- Check for common mistake and possible bugs
- limit the complexity of code and
- Verify type consistency

### Tools - Static analysis testing - video 48

- Typescript
- ESList
- Prettier
- Husky
- lint-staged

#### ESLint - (linters) - video 49

> ESLint - a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.(important in team work)

- create react app by default install _ESLint_
- install vscode extension and use -> ESLint by microsoft

> create react app also installs - testing library plugin for ESLint by default
> **it means you also get error under testing file**

- exmple -> if you type await in front of any sync code under test file, testing library will show error - _no need to put await_
- For our help in tsting time -
  > add also jest-dom plugin for ESLint - `npm i -D eslint-plugin-jest-dom`
  > then on package.json specify plugin under - eslintConfig -> `"plugin:jest-dom/recommended"`

```
"eslintConfig": {
"extends": [
    "react-app",
    "react-app/jest",
    "plugin:jest-dom/recommended"
]
},
```

##### Run ESLint with npm - so every team person can identify errors by just 1 command

**Process**

1. add another script under `package.json` - "lint": "eslint --ignore-path .gitignore ."

- list -> command (we can run as -> `npm run lint`)
- eslint -> library
- . -> path (current)
- --ignore-path .gitignore -> tells to ingonre all paths mentioned under .gitignore file

2. now if you run cmd -> `npm run lint` -> if there is any error under test files or any used wrong method it will give error for that and also give right method to use

#### Prettier - video 50

> Prettier is an opinionated code formatter that ensures that all outputted code conforms to a consistent style
> **install**
> cmd -> `npm install -D --exact prettier` > _note_ - make sure that everyone in team using exact same version of prettier
> add npm script -> `"format": "prettier --ignore-path .gitignore --write \"**/*.{ts,tsx,css,scss}\""`
> (cmd telling ignore things mentioned under .gitignore, and for all other files which have extension ts,tsx,css,scss format the code)
> cmd -> _npm run format_

- we can give own configuration and format options same as ESLint by modifying package.json, _but we will use external file for same_
  _process_ -> (rad docs for more configuration)

1. on src folder - create -> `.prettierrc.json` and give configuration like this -

```
{
    "semi": false,
    "singleQuote": true
}
```

2. Although we are running script is great but prefer to auto format file when save changes
   _we can install prettier extension _

3. now we need to update user settings --> file > preference (ctrl + ,) > type _formatonsave_ > click and make check (right),
   also we can go via json setting button -> on top right corner,(here is whole code of that file after modification - )
   > Note - make sure your deafault formatter is - _"esbenp.prettier-vscode"_

```
{
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "liveServer.settings.donotShowInfoMsg": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "tabnine.experimentalAutoImports": true,
  "terminal.integrated.defaultProfile.windows": "PowerShell",
  "git.autofetch": true,
  "diffEditor.ignoreTrimWhitespace": false,
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "workbench.iconTheme": "vscode-icons",
  "workbench.startupEditor": "none",
  "window.zoomLevel": 1,
  "editor.formatOnSave": true,
}
```

4. **If using both ESLint and prettier** - need to turn of some ESLint rules that conflict or are unnecessary when using prettier
   (for that we need to add other ESLint plugin)

- run cmd and install -> `npm i -D eslint-config-prettier`
- now add the plugin to the extents array in package.json -> `eslint-config-prettier` (here is the code ->)

```
"eslintConfig": {
"extends": [
    "react-app",
    "react-app/jest",
    "eslint-config-prettier"
]
},
```

#### Husky - video 51

> now team members can run commands of ESLint or use prettier to make sure code quality is maintained, Also there is an odd scenario where a developer might not run the scripts
> it will be nice if there is a way to make sure the code is automatically linted and formatted before somebody commits there code, it would be possible with **Husky**

**_Husky is a Tool that helps improve your commits and more_**

**Steps to use**

- install husky - run cmd -> `npx husky-init && npm install` or
- if above cmd is not working --

1. run -> `npm install husky --save-dev`
2. create a .husky folder under root
3. run -> `npx husky-init`
4. it will create -> `pre-commit` file under `.husky` folder

- change `npm test` to -> `npm run lint && npm run format`, or if it not work -> `npm run lint` below that `npm run format`
  here is the code for pre-commit file ->

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# i have commented  default code
# npm test

# Run ESLint (assuming you have it installed as a dev dependency)
npm run lint

# Run your code formatter (e.g., Prettier)
npm run format

```

- now if you try to commit without linting and formatting it won't work and every file will be committed after formatting
- now you can unckeck formatOnSave --> press -> `ctrl + ,` -> search FormatOnSave
- now we can commit -> it will automatically check linting and then format

#### lint-staged - video 52

> We need to overcome work of husky, Husky lints and formats entire codebase, but we want to do that with just staged file which are about to be commited (means the files which are edited and ready to commit ), we can do that with the tool -> `lint-stage`

**Process**

1. install - cmd -> `npm i -D lint-staged`
2. add code under `package.json` ->

```
"lint-staged": {
"*.{ts,tsx}": ["eslint"],
"*.{ts,tsx,css,scss}": ["prettier --write"]
}
```

3. update file - `pre-commit` (under .husky folder) -> add this and remove other ->
   `npx lint-staged`
