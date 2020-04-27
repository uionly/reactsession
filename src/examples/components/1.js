// Function and Class Components
import React from 'react';
import ReactDOM from 'react-dom';
// JavaScript function to define a component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
// You can also use an ES6 class to define a component:
class Welcome2 extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
// The above two components are equivalent from React’s point of view.
// Function and Class components both have some additional features 
// Rendering a Component
// Previously, we only encountered React elements that represent DOM tags:
// const element = <div />;
// However, elements can also represent user-defined components:
// When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.
// For example, this code renders “Hello, Sara” on the page:

const element2 = <Welcome name="Sara" />;

// const element3 = <Welcome2 name="Sara" />;

ReactDOM.render(
  element2,
  document.getElementById('root')
);


// ReactDOM.render(
//     element3,
//     document.getElementById('root')
//   );