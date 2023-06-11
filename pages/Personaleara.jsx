import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faSchool,
  faGamepad,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

function Personaleara({ correntuser }) {
  console.log(correntuser);
  const [works, setWorks] = useState(
    JSON.parse(localStorage.getItem(`${correntuser?.username}`)) || []
  );

  return (
    <div>
      <div className="infoandimgstudent">
        <div className="file-container">
          <div>
            <img
              className="image-file"
              src={correntuser?.image}
              alt={correntuser?.name}
            />
          </div>
          <div className="head-file"> {correntuser?.name}</div>
        </div>
        <div className="conti">
        <div className="head-file">
          <FontAwesomeIcon icon={faHouse} /> Residence: <br /> {correntuser?.residence}
        </div>
        <div className="head-file">
          {" "}
          <FontAwesomeIcon icon={faSchool} />
          StudyAdjustments: <br /> {correntuser?.studyAdjustments}
        </div>
        <div className="head-file">
          <FontAwesomeIcon icon={faGamepad} /> Hobbies:
          {correntuser?.hobbies.map((hobbie) => (
            <div>{hobbie}</div>
          ))}
        </div>
        <div className="head-file">
        <FontAwesomeIcon icon={faChartLine} />  Activities:
          {correntuser?.schoolActivities.map((Activitie) => (
            <div>{Activitie}</div>
          ))}
        </div>
        </div>
      </div>

      <div className="files">
        {works.map((work) => (
          <a target="_blank" href={work}>
            <img
              src="https://www.y4pc.co.il/images/Guides/10-15/how-to-edit-pdf-file/how-to-edit-pdf-file8.jpg"
              alt="work"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Personaleara;
