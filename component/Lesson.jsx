import React from "react";

function Lesson({ lesson, setFiltered, teachersusers }) {
  console.log(lesson);
  return (
    <div>
      <input
        onClick={(e) =>
          setFiltered(
            teachersusers?.filter((user) => user.subject == e.target.value)
          )
        }
        type="radio"
        name="subject"
        value={lesson}
      />
      <label for="html">{lesson}</label>
    </div>
  );
}

export default Lesson;
