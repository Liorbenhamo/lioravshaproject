import React from "react";
import { Link } from "react-router-dom";

function Studentuserflex({ user }) {
  return (
    <div>
      <Link state={{ from: user }} to="/studentprofile">
        <div className="cardstudent">
          <div>
            <img src={user.image} alt={user.name} />
          </div>
          <hr />
          <div>{user.name}</div>
        </div>
      </Link>
    </div>
  );
}

export default Studentuserflex;
