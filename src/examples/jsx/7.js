// JSX Represents Objects

import React from "react";
function App() {

// Babel compiles JSX down to React.createElement() calls.

// These two examples are identical:
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

// const element1 = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world using createElement!'
// );

// React.createElement() performs a few checks to help you write bug-free code but essentially it creates an object like this:

// console.log(element1);

// Note: this structure is simplified
// const element2  = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// };

// These objects are called “React elements”. You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date.

return element;
}

export default App;
