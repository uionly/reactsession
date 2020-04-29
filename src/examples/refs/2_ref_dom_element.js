import React from 'react';
import ReactDOM from 'react-dom';
class CustomTextInput extends React.Component {
    constructor(props) {
      super(props);
      // create a ref to store the textInput DOM element
      this.textInput = React.createRef();
      this.focusTextInput = this.focusTextInput.bind(this);
    }
  
    focusTextInput() {
      // Explicitly focus the text input using the raw DOM API
      // Note: we're accessing "current" to get the DOM node
      this.textInput.current.focus();

      // When the ref attribute is used on an HTML element, the ref created 
      // in the constructor with React.createRef() receives the underlying DOM 
      // element as its current property.
    }
  
    render() {
      // tell React that we want to associate the <input> ref
      // with the `textInput` that we created in the constructor
      return (
        <div>
          <input
            type="text"
            ref={this.textInput} />
          <input
            type="button"
            value="Focus the text input"
            onClick={this.focusTextInput}
          />
        </div>
      );
    }
  }

  // React will assign the current property with the DOM element when the component
  // mounts, and assign it back to null when it unmounts. ref updates happen before 
  // componentDidMount or componentDidUpdate lifecycle methods.

  ReactDOM.render(
    <CustomTextInput />,
    document.getElementById('root')
  );



