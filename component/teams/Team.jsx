import React from "react";
import "./team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Team({title,icon, image}) {
  return (
    <div>
      <div
        className="scrollmenu-body"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="h-i">
          <div className="icon-container">
            <FontAwesomeIcon icon={icon} size="2x" className="team-icon" />
          </div>
          <h2 className="scrollmenu-title">{title}</h2>
        </div>
      </div>
    </div>
  );
}

export default Team;
