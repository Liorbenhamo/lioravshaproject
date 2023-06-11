import React, { useState } from "react";
import Teacheruserflex from "../component/Teacheruserflex";
import Lesson from "../component/Lesson";

function Teacherspage({ teachersusers }) {
  const [filtered, setFiltered] = useState(teachersusers);
  const lessons = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "History",
    "Geography",
  ];
  return (
    <div>
      <h1>Please select your subject:</h1>
      <div className="teacherpageflex">
        {lessons.map((lesson, index) => (
          <Lesson
            teachersusers={teachersusers}
            lesson={lesson}
            setFiltered={setFiltered}
          />
        ))}
      </div>
      <div className="studentflex">
        {filtered?.map((user) => (
          <Teacheruserflex user={user} />
        ))}
      </div>
    </div>
  );
}

export default Teacherspage;
