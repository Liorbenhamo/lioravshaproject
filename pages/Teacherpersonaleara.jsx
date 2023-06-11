import React, { useState } from "react";
import './message.css'

function Teacherpersonaleara({ correntuser }) {
  const [messages, setMessage] = useState(
    JSON.parse(localStorage.getItem(`${correntuser.username}`)) || []
  );
  console.log(messages);
  return (
    <div className="message-container">
      {messages.length ? (
        <div>
          {messages?.map((message,index) => (
            <div className="messages" key={index}><h1>Message Numbr {index+1}:</h1>  <h2>{message}</h2></div>
          ))}
        </div>
      ) : (
        <h1>no students messages</h1>
      )}
    </div>
  );
}

export default Teacherpersonaleara;
