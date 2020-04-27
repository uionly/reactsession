// Inline If with Logical && Operator


// You may embed any expressions in JSX by wrapping them in curly braces. 
//This includes the JavaScript logical && operator. It can be handy for 
// conditionally including an element:

import React from "react";
import ReactDOM from "react-dom";

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 &&
          <h2>
            You have {unreadMessages.length} unread messages.
          </h2>
        }
      </div>
    );
// It works because in JavaScript, true && expression always evaluates to expression, 
// and false && expression always evaluates to false.
// Therefore, if the condition is true, the element right after && will appear 
// in the output. If it is false, React will ignore and skip it
  }
  
  const messages = ['React', 'Re: React', 'Re:Re: React'];
  ReactDOM.render(
    <Mailbox unreadMessages={messages} />,
    document.getElementById('root')
  );