import React, { useState } from "react";
import "./studentpage.css";
import Studentuserflex from "../component/Studentuserflex";
function Studentapage({ studentsusers }) {
  const [filtered, setFiltered] = useState(studentsusers);
  console.log(filtered);
  return (
    <div>
      <div className="input-container">
        
        <input
          className="input-student"
          placeholder="Serch a student..."
          onChange={(e) =>
            setFiltered(
              studentsusers?.filter((student) =>
                student.name.includes(e.target.value)
              )
            )
          }
          type="text"
        />
      </div>
      <div className="studentflex">
        {filtered?.map((user) => (
          <Studentuserflex user={user} />
        ))}
      </div>
    </div>
  );
}

export default Studentapage;
