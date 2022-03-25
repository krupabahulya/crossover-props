# Components 2
## React Function Components
Did you know, thagt it's possible to write your entire application with just functions as React components?

**React Function Components** are basically just **JavaScript Functions** being React Components which return JSX (React's Syntax).

:green_book:
```sh
Instead of putting JavaScript into HTML,
<span style="color:red">**JSX**</span> allows us to put HTML into JavaScript.
<span style="color:red">**JSX**</span> stands for <span style="color:blue">**JavaScript XML**</span>. 
It is simply a syntax extension of React. 
It allows us to directly write HTML in React.
```

:bulb: You can use this [HTML to JSX Compiler](https://magic.reactjs.net/htmltojsx.htm) for your code.

## React Function Component Example

Let's start with a simple example of a Functional Component in React defined as App which returns JSX:

```sh
import <span style="color:green">React</span> from <span style="color:green">'react'</span>;

function <span style="color:blue">App</span>() {
  const greeting = 'Hello Function Component!';

  return <h1>{greeting}</h1>;
}

export default App;
```

That's already the essential React Function Component Syntax. With **function App() { }** you define a JavaScript function with the name App. The definition of the component happens with just a JavaScript Function. Everything defined in the function's body, between **{}**, is the render function which returns JSX in the end:

> Hello Function Component!

The JavaScript is used with curly braces **within the HTML**. In our case, we render a variable called <em>greeting</em>, which is defined in the component's function body, and is returned as HTML headline in JSX.

:heavy_exclamation_mark: Note: If you are familiar with React Class Components, you may have noticed that a Functional Component is a React Component **without render function**. Everything defined in the function's body is the render function which returns JSX in the end.

:heavy_exclamation_mark: Note: React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!

The **export default** prefix is a standard JavaScript syntax (not specific to React). It lets you mark the main function in a file so that you can later import it from other files. ([More on importing in Importing and Exporting Components!](https://beta.reactjs.org/learn/importing-and-exporting-components))

Now, if you want to render a React Component inside a Function Component, you define another component and render it as HTML element with JSX within the other component's body:

```sh
<span style="color:green">React</span> from <span style="color:green">'react'</span>;

function <span style="color:blue">App</span>() {
  return <Headline />;
}

function Headline() {
  const greeting = 'Hello Function Component!';

  return <h1>{greeting}</h1>;
}

export default App;
```

Basically you have a function as Child Component now. Defining React Components and rendering them within each other makes Composition in React possible. You can decide where to render a component and how to render it.

## React Arrow Function Component Example

With the introduction of JavaScript **ES6**, new coding concepts were introduced to JavaScript and therefore to React. For instance, a JavaScript function can be expressed as lambda (arrow function). That's why a Function Component is sometimes called Arrow Function Components (or maybe also Lambda Function Component). Let's see our refactored React Component with an Arrow Function:

```sh
import React from 'react';

const <span style="color:blue">App</span> = () => {
  const greeting = 'Hello Function Component!';

  return <Headline value={greeting} />;
};

const Headline = ({ value }) => {
  return <h1>{value}</h1>;
};

export default App;
```

:heavy_exclamation_mark: Note: If you run into a "React Component Arrow Function Unexpected Token" error, make sure that JavaScript ES6 is available for your React application. Normally when using create-react-app this should be given, otherwise, if you set up the project yourself, [Babel](https://www.robinwieruch.de/minimal-react-webpack-babel-setup/) is enabling ES6 and beyond features for your React application.

Some helpful resources for you to read more about react function components:
1. (https://reactjs.org/docs/components-and-props.html)
2. (https://beta.reactjs.org/learn/your-first-component)
3. (https://www.robinwieruch.de/react-function-component/#react-function-component-example)

