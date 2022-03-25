# Class components

## How to create a class component

Let's walk through how to create a class component, check out the code example below:

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

First, we define our component and it's by using the **class** keyword. If we don't define the type of component, we won't be able to access the powerful state or lifecycle methods - it will simply be

Then we declare the name of our component. By convention, component names should always be capitalised, and match the file name. This can be anything you like, but make it descriptive of what the component is - ie Button or newUser etc.

Next, we have the keyword **extends** followed by React.Component. Here we are extending the React Component, which gives us access to (inherits) it's properties and powerful methods such as componentDidMount and componentWillUnmount.

The final part of our class component is the render method. The render method needs to return JSX, and a single top-level tag should wrap the entire content (section).

So there you have it, your very first React class component!
