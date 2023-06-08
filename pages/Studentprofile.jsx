import React, { useState } from "react";
import { useLocation } from "react-router";
import "./studentprofile.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faSchool,
  faGamepad,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import ApexChart from "../component/Chart";
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
        <div className="file-container">
          <div>
            <img className="image-file" src={from.image} alt={from.name} />
          </div>
          <div className="head-file">{from.name} </div>
        </div>
        <div className="head-file">
          {" "}
          <FontAwesomeIcon icon={faHouse} />
          Residence: <br /> {from.residence}
        </div>
        <div className="head-file">
          <FontAwesomeIcon icon={faSchool} /> StudyAdjustments: <br />{" "}
          {from.studyAdjustments}
        </div>
        <div className="head-file">
          <FontAwesomeIcon icon={faGamepad} /> Hobbies:
          {from?.hobbies.map((hobbie) => (
            <div> {hobbie}</div>
          ))}
        </div>
        <div className="head-file">
          <FontAwesomeIcon icon={faChartLine} /> Activities:
          {from?.schoolActivities.map((Activitie) => (
            <div>{Activitie}</div>
          ))}
        </div>
      </div>
      <div>
        <input onChange={(e) => handlechange(e)} type="file" />
        <button className="button-student" onClick={() => handleclick()}>
          Click to upload file
        </button>
      </div>
      <div>
        <ApexChart user={from} />
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

export default Studentprofile;
