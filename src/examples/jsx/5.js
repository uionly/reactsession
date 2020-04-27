// Specifying Attributes with JSX
import React from "react";
function App() {
// const avatarUrl = "https://scontent.fdel1-3.fna.fbcdn.net/v/t1.0-9/74467186_10218022839316040_1222082310707347456_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=VSYel90-8FUAX_9euER&_nc_ht=scontent.fdel1-3.fna&oh=e1ac8e2600b86f200055c0f7a89d7fdb&oe=5ECB6899";
// You may use quotes to specify string literals as attributes:
// You may also use curly braces to embed a JavaScript expression in an attribute:
return <div tabIndex="0"> Hi There Tab index 0</div>;
//   return <img alt="User image" src={avatarUrl}></img>;
}
// Don’t put quotes around curly braces when embedding a JavaScript expression in an attribute. You should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute.

// Warning:

// Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.
// For example, class becomes className in JSX, and tabindex becomes tabIndex.
export default App;
