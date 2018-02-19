# react-super-accordion ![npm](https://img.shields.io/npm/dm/react-super-accordion.svg)

[![https://nodei.co/npm/react-super-accordion.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/react-super-accordion.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/react-super-accordion)


A hackable super simple accordion that you can customise completely to the core. It can't get more customisable than this.


### Installation:

`yarn add react-super-accordion`

or

`npm i react-super-accordion --save`


### Usage

Basic usage: 
```jsx
import React, { Component } from 'react';
import Accordion from 'react-super-accordion';

class App extends Component {
  render() {
    return (
      <div style={{width: 300, textAlign:'center'}}>
        <Accordion headText="This is the accordion head">
         Lorem ipsum dolor sit amet,
         consectetur adipiscing elit, 
         sed do eiusmod tempor incididunt ut 
         labore et dolore magna aliqua. Ut enim ad minim veniam, 
         quis nostrud exercitation ullamco laboris nisi 
         ut aliquip ex ea commodo consequat.
         Duis aute irure dolor in reprehenderit in voluptate 
         velit esse cillum dolore eu fugiat nulla pariatur       
         </Accordion>
      </div>
    );
  }
}

export default App;

```
![Basic Usage screen](https://github.com/master-atul/react-super-accordion/raw/master/screens/basic_usage.png)


### Event Handler

Accordion also has a prop `onToggle` which can be used to pass in a callback function to execute when the accordion is toggled.

```jsx
<Accordion headText="Hello World" onToggle={(state)=>console.log(state)}>
...some body...
</Accordion>
```

The above example would print on the console the state of the accordion on toggle
```
{expanded: true} // when the accordion expands
```

### CUSTOMIZATION

**Customizing the body of the accordion**: Since the body is a text/component that you provide, this one is pretty straight forward. Just add any component as the child for Accordion and that becomes the body. so Body is under your complete control.
```jsx
<Accordion headText="The head text of the accordion">
  <CustomBodyComponent />  //Your custom body
</Accordion>
```

**Customizing the head of the accordion**: To customize the head of the accordion simply pass a Custom React component to the Accordion via the prop `headComponent` to render a custom Head component.

For example: 
```jsx
<Accordion headComponent={CustomHeadComponent}>
.... some body ...
</Accordion>
```

Note that Accordion would pass two props to the `CustomHeadComponent`

1. expanded : This is a `Boolean` which specifies whether the accordion is in expanded state or collapsed state (true for expanded and false for collapsed).
2. toggle : This is a function to toggle the expanded state of the accordion. 
Either you can directly call toggle like `toggle()` - In which case it will just toggle the state of accordion
or 
You can optionally pass a boolean to the `toggle(true)` to make the Accordion expand or `toggle(false)` to make the accordion collapse.


**Complete example for a custom Accordion Head**

```jsx
import React, { Component } from 'react';
import Accordion from 'react-super-accordion';

const styles = {
    container : {
    flex: 1,
    backgroundColor:'lightseagreen',
    color:'white',
    borderRadius:'15px',
    display: 'flex',
    border: '1px solid lightgrey',
    padding: '10px',
    cursor: 'pointer',
    fontFamily: 'helvetica',
    fontWeight: 'bold',
    userSelect: 'none',
    flexDirection: 'row',
  },
  sideArrowExpanded : {
    textAlign: 'right',
    transition: 'transform 0.25s',
  },
  sideArrow : {
    textAlign: 'right',
    transform: 'rotateZ(-180deg)',
    transition: 'transform 0.25s',
  },
  title : {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
}
//CREATING A CUSTOM HEAD COMPONENT 
class CustomHeadComponent extends React.Component {
  render(){
    const {text, ...accorionProps} = this.props;
    const {expanded, toggle} = accorionProps; //Basically Accordion would pass two props to the custom header 1. expanded 2. toggle 
    return (
      <div onClick={() => toggle()} style={styles.container} >
      <div style={styles.title}>
        {text || 'Hello World'}
      </div>
      <div style={expanded ? styles.sideArrowExpanded : styles.sideArrow}>
        ⌃
      </div>
    </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div style={{width: 300, textAlign:'center'}}>
        <Accordion onToggle={console.log} headComponent={(props)=><CustomHeadComponent toggle={()=>props.toggle()} expanded={props.expanded} text="My Custom Head" />}>
        {/* OR */}
        {/* <Accordion onToggle={console.log} headComponent={(accordionProps)=><CustomHeadComponent {...accordionProps} text={'My custom header'} />}> */}
        {/* OR even*/}
        {/* <Accordion onToggle={console.log} headComponent={CustomHeadComponent}> */}
         Lorem ipsum dolor sit amet,
         consectetur adipiscing elit, 
         sed do eiusmod tempor incididunt ut 
         labore et dolore magna aliqua. Ut enim ad minim veniam, 
         quis nostrud exercitation ullamco laboris nisi 
         ut aliquip ex ea commodo consequat.
         Duis aute irure dolor in reprehenderit in voluptate 
         velit esse cillum dolore eu fugiat nulla pariatur       
         </Accordion>
      </div>
    );
  }
}

export default App;
```

The above custom Accordion looks like this:

![Basic Usage screen](https://github.com/master-atul/react-super-accordion/raw/master/screens/custom_usage.png)


## CONTRIBUTORS

- [Atul R](https://github.com/master-atul)


Peace ! ✌🏻🍻
