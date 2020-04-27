// Embedding Expressions in JSX

import React from "react";

function App() {
  function formatName(user) {
    return user.firstName + " " + user.lastName;
  }

  const user = {
    firstName: "Deepak",
    lastName: "Kumar",
  };

  return <h1>Hello, {formatName(user)}!</h1>;
}

export default App;
