import React from 'react';
import ReactDOM from 'react-dom';

// Composing Components

// Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.

// For example, we can create an App component that renders Welcome many times:

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  function App() {
    return (
      <div>
        <Welcome name="Deepak" />
        <Welcome name="DJ" />
        <Welcome name="Kumar" />
      </div>
    );
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );