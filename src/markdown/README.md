<img src ="https://brandlogos.net/wp-content/uploads/2020/09/react-logo.png" width="200" height="200"/>

[React Components and Props](https://reactjs.org/docs/components-and-props.html)

# React - Components and Props

<br/>
### How do they work 🤔
<br/>
Are you new to React and want to understand how Components and Props work? So this is the right tutorial for you!
We'll be going over all the topics from the beginning with a more profound overview of the subject.

It's been a lot to take in when we started learning React. And all the documentation we find is very confusing most of the time, right?
The most we research, the lost we get, since we have so much information nowadays.
We might assume that you already know about properties in React, but if not, no worries. Let's dive in together! 😎
<br/>

## What are Components?

Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components.

## What's Props?

<br/>
**React is a component-based library** that divides the UI into little reusable pieces. In some cases, those components need to communicate (send data to each other) and the way to pass data between components is by using props.
**“Props”** is a special keyword in React, which stands for properties and is being used for passing data from one component to another.
But the important part here is that data with props are being passed in a **uni-directional flow**. (one way from parent to child)
Furthermore, **props data is read-only**, which means that data coming from the parent **should not be** changed by child components.
OK now let’s see how to use Props with an example…
<br/>
## Using Props in React
<br/>
##### How to use props without destructuring
<br/>
To use props, you have to pass in **props** as an argument in your function. This is similar to passing arguments into your regular JavaScript functions. Here's an example:

<span style="color:grey">
```
 function Tool(props) {
  const name = props.name;
  const tool = props.tool;
    return (
      <div>
        <h1>My name is {name}.</h1>
        <p>My favorite design tool is {tool}.</p>
      </div>
    );
}
export default Tool
```
</span>

<br/>
Now I will explain everything that happened above step by step.

####Step 1 - Pass in props as an argument
<br/>
We did that in the first line of the code above: function Tool(props){}. This automatically allows you to use props in your React app's component.
<br/>
####Step 2 - Declare props variable(s)
<br/>
<span style="color:grey">

```
const name = props.name;
const tool = props.tool;
```

</span>
<br/>
As you can see above, these variables are different from regular variables because the data in them has to do with props.

If you do not want to create variables for your props, you can go ahead and pass them directly into your template like this:

 <span style="color:grey">
 ```
 <h1> My name is {props.name} </h1>
 ```
 </span>
<br/>
####Step 3 - Use variable(s) in JSX template
<br/>
Now that you have declared your variables, you can go on and place them where you want them to be in your code.

<span style="color:grey">
```
return (
      <div>
        <h1>My name is {name}.</h1>
        <p>My favorite design tool is {tool}.</p>
      </div>
    );
```
</span>
<br/>
####Step 4 - Pass data to props in the App component
<br/>
We are done creating our props, so the next step is to pass data to them. We have already imported the Tool component and this is displayed in the browser at the moment:
<br/>

<span style="color:blue">
```
My name is .
My favorite design tool is .
```
</span>
<br/>
You can create default data for your props so they don't appear empty on declaration. You will see how to do that in the last section.

Recall that this is the current state of the App component:
<br/>

<span style="color:grey">
```
import Tool from "./Tool"

function App() {
return (
<div className="App">
<Tool/>
</div>
)
}

export default App

```
</span>

<br/>
You must be wondering where the data will be passed to exactly. To do this, you pass in the data like attributes. It looks like this:

<br/>
<span style="color:grey">
```

import Tool from "./Tool"

function App() {
return (
<div className="App">
<Tool name="Ihechikara" tool="Figma"/>
</div>
)
}

export default App

````
</span>
<br/>
Notice the change? Here: from ```<Tool/>``` to ```<Tool name="Ihechikara" tool="Figma"/>```. This will not throw an error your way because those attributes are attached to the props created in the ```Tool``` component.

You should have this displayed in your browser:

<br/>
<span style="color:blue">
````
My name is Ihechikara.
My favorite design tool is Figma.
```
</span>
<br/>






<!--- End of the file --->
<br/>
Want to know more?
[React Documentation](https://reactjs.org/docs/components-and-props.html)
```
