// Refs and Function Components

// By default, you may not use the ref attribute on function components 
// because they don’t have instances

// If you want to allow people to take a ref to your function component, 
// you can use forwardRef (possibly in conjunction with useImperativeHandle), or 
// you can convert the component to a class.

// You can, however, use the ref attribute inside a function component as long 
// as you refer to a DOM element or a class component