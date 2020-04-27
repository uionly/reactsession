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

const element = <Welcome name="Sara" />;

// const element = <Welcome2 name="Sara" />;

ReactDOM.render(
  element,
  document.getElementById('root')
);
