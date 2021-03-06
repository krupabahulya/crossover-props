# Class components

## How to create a class component

Let's walk through how to create a class component, check out the code example below:

:green_book:

```javascript
import React from "react";

class MyFirstClassComponent extends React.Component {
  render() {
    return (
    <section>
        <h1>Hello world!</h1>
        <h2>Nice to see you again.</h2>
    <section>
    )
  }
}

export default App;
```

:point_right: First, we define our component and it's type by using the **class** keyword. If we don't define the type of component, we won't be able to access the powerful state or lifecycle methods - it will simply be

:point_right: Then we declare the name of our component. By convention, component names should always be capitalised, and match the file name. This can be anything you like, but make it descriptive of what the component is - ie Button or newUser etc.

:point_right: Next, we have the keyword **extends** followed by React.Component. Here we are extending the React Component, which gives us access to (inherits) it's properties and powerful methods such as componentDidMount and componentWillUnmount.

:point_right: The final part of our class component is the render method. The render method needs to return JSX, and a single top-level tag should wrap the entire content (section).

So there you have it, your very first React class component! :star_struck:

## How to pass props between class components

So there you have it, your very first React class component!

## Props

Another way of handling component properties is by using props.
Props are like function arguments, and you send them into the component as attributes.

Use an attribute to pass a color to the Car component, and use it in the render() function:

```sh
import React from "react";

class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.color} Car!</h2>;
    <Car color="red" />;
  }
}
export default Car;
```

## Props in the Constructor

If your component has a constructor function, the props should always be passed to the constructor and also to the React.Component via the super() method.

```sh

import React from "react";
class Car extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>I am a {this.props.model}!</h2>;
    <Car model="Mustang" />;
  }
}

export default Car;


```

## Go further

Some helpful resources for you to read more about react function components:

1. (https://www.digitalocean.com/community/tutorials/react-class-components)
2. (https://buddy.works/tutorials/react-cheat-sheet-for-beginners#class-components)
3. (https://www.robinwieruch.de/react-pass-props-to-component/)
4. (https://reactjs.org/docs/components-and-props.html)
5. (https://www.geeksforgeeks.org/reactjs-class-based-components/)
