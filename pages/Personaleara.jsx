import React, { useState } from "react";

function Personaleara({ correntuser }) {
  console.log(correntuser);
  const [works, setWorks] = useState(
    JSON.parse(localStorage.getItem(`${correntuser.username}`)) || []
  );

  return (
    <div>
      <div className="infoandimgstudent">
        <div>
          <div>
            <img src={correntuser.image} alt={correntuser.name} />
          </div>
          <div>{correntuser.name}</div>
        </div>
        <div>residence:{correntuser.residence}</div>
        <div>studyAdjustments:{correntuser.studyAdjustments}</div>
        <div>
          hobbies:
          {correntuser?.hobbies.map((hobbie) => (
            <div>{hobbie}</div>
          ))}
        </div>
        <div>
          hobbies:
          {correntuser?.schoolActivities.map((Activitie) => (
            <div>{Activitie}</div>
          ))}
        </div>
      </div>

      <div>
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
