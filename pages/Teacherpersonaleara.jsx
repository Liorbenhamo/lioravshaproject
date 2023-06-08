import React, { useState } from "react";

function Teacherpersonaleara({ correntuser }) {
  const [messages, setMessage] = useState(
    JSON.parse(localStorage.getItem(`${correntuser.username}`)) || []
  );
  console.log(messages);
  return (
    <div>
      {messages.length ? (
        <div>
          {messages?.map((message) => (
            <div>{message}</div>
          ))}
        </div>
      ) : (
        <h1>no students messages</h1>
      )}
    </div>
  );
}

export default Teacherpersonaleara;
