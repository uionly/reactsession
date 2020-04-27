// Specifying Children with JSX
import React from "react";
function App() {

// const avatarUrl = "https://scontent.fdel1-3.fna.fbcdn.net/v/t1.0-9/74467186_10218022839316040_1222082310707347456_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=VSYel90-8FUAX_9euER&_nc_ht=scontent.fdel1-3.fna&oh=e1ac8e2600b86f200055c0f7a89d7fdb&oe=5ECB6899";

// If a tag is empty, you may close it immediately with />, like XML:

//  const element1 = <img src={avatarUrl} width="400" height="400"/>;

// JSX tags may contain children:
const element2 = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);

return element2;
// return element2;

}

export default App;
