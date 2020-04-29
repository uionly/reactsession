// Refs are created using React.createRef() and attached to React elements via 
// the ref attribute. Refs are commonly assigned to an instance property when a 
// component is constructed so they can be referenced throughout the component.
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}