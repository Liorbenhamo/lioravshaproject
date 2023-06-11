import React from "react";
import './lesson.css'

function Lesson({ lesson, setFiltered, teachersusers }) {
  console.log(lesson);
  return (
    <div className="lesson-container">
      <input
       className="lesson-input"
        onClick={(e) =>
          setFiltered(
            teachersusers?.filter((user) => user.subject == e.target.value)
          )
        }
        type="radio"
        name="subject"
        value={lesson}
      />
      <label className="lesson-label" htmlFor="html">{lesson}</label>
    </div>
  );
}

export default Lesson;
