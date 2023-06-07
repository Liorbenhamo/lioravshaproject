import React, { useState } from "react";
import { useLocation } from "react-router";
import "./studentprofile.css";
import axios from "axios";
function Studentprofile() {
  const location = useLocation();
  const { from } = location.state;
  console.log(from);
  const [works, setWorks] = useState(
    JSON.parse(localStorage.getItem(`${from.username}`)) || []
  );
  const [newimg, setNewimg] = useState();
  async function handlechange(e) {
    const imageUrl = e.target.files[0];
    if (imageUrl) {
      const formData = new FormData();
      formData.append("file", imageUrl);
      formData.append("upload_preset", "b5w6nssf");
      await axios
        .post(
          "https://api.cloudinary.com/v1_1/dbhkoyzin/image/upload",
          formData
        )
        .then((res) => setNewimg(res.data.secure_url));
    }
  }
  function handleclick() {
    if (newimg) {
      let newwork = JSON.parse(localStorage.getItem(`${from.username}`));
      if (newwork) {
        localStorage.setItem(
          `${from.username}`,
          JSON.stringify([...newwork, newimg])
        );
      } else {
        localStorage.setItem(`${from.username}`, JSON.stringify([newimg]));
      }

      setWorks((prev) => [...prev, newimg]);
    }
  }
  console.log(newimg);
  return (
    <div>
      <div className="infoandimgstudent">
        <div>
          <div>
            <img src={from.image} alt={from.name} />
          </div>
          <div>{from.name}</div>
        </div>
        <div>residence:{from.residence}</div>
        <div>studyAdjustments:{from.studyAdjustments}</div>
        <div>
          hobbies:
          {from?.hobbies.map((hobbie) => (
            <div>{hobbie}</div>
          ))}
        </div>
        <div>
          hobbies:
          {from?.schoolActivities.map((Activitie) => (
            <div>{Activitie}</div>
          ))}
        </div>
      </div>
      <div>
        <input onChange={(e) => handlechange(e)} type="file" />
        <button onClick={() => handleclick()}>click to upload file</button>
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

export default Studentprofile;
