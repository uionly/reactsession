// JSX is an Expression Too
// After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.
// This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:


import React from "react";

function App() {
  function formatName(user) {
    return user.firstName + " " + user.lastName;
  }
  const user = null;
  // const user = {
  //   firstName: "Deepak",
  //   lastName: "Kumar",
  // };

  function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

  return getGreeting(user);
}

export default App;


