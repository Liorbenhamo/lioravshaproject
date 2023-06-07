import React from "react";

function Teacheruserflex({ user }) {
  return (
    <div>
      <div className="cardstudent">
        <div>
          <img src={user.image} alt={user.name} />
        </div>
        <hr />
        <div>{user.name}</div>
      </div>
    </div>
  );
}

export default Teacheruserflex;
