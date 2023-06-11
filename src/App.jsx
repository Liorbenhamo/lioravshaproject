import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "../component/Navbar";
import HomePage from "../component/homePage/HomePage";
import Report from "../pages/Report";
import TeamInfo from "../component/teamInfo/TeamInfo";
import students from "../userData.json";
import Studentapage from "../pages/Studentapage";
import Teacherspage from "../pages/Teacherspage";
import Studentprofile from "../pages/Studentprofile";
import Personaleara from "../pages/Personaleara";
import Teacherprofile from "../pages/Teacherprofile";
import Teacherpersonaleara from "../pages/Teacherpersonaleara";
import Contact from "../component/contact/Contact";
import Managercalendar from "../pages/Managercalendar";
import Terms from "../component/Terms";
import Aboutus from "../component/Aboutus";

export const InfoContext = createContext();
function App() {
  const [users, setUsers] = useState();
  const [correntuser, setCorrentuser] = useState();
  const [studentsusers, setStudentsusers] = useState();
  const [teachersusers, setTeachersusers] = useState();
  console.log(users);
  console.log(studentsusers);
  console.log(teachersusers);
  const obj = {
    correntuser,
    setCorrentuser,
    users,
    setUsers,
  };
  console.log(users);
  useEffect(() => {
    setUsers([...students.students, ...students.teachers, students.headmaster]);
  }, []);

  useEffect(() => {
    setStudentsusers(users?.filter((user) => user.title == "student"));
    setTeachersusers(users?.filter((user) => user.title == "teacher"));
  }, [users]);
  return (
    <div>
      <InfoContext.Provider value={obj}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<HomePage />}></Route>
              <Route path="/report" element={<Report />}></Route>
              <Route path="/about" element={<Aboutus />}></Route>
              <Route
                path="/teacherprofile"
                element={<Teacherprofile />}
              ></Route>
              <Route
                path="/personaleara"
                element={<Personaleara correntuser={correntuser} />}
              ></Route>
              <Route path="/terms" element={<Terms />}></Route>
              <Route
                path="/managercalendar"
                element={<Managercalendar />}
              ></Route>
              <Route
                path="/personalearateacher"
                element={<Teacherpersonaleara correntuser={correntuser} />}
              ></Route>
              <Route path="team/:id" element={<TeamInfo />}></Route>
              <Route path="contact" element={<Contact />}></Route>

              <Route
                path="/teachers"
                element={<Teacherspage teachersusers={teachersusers} />}
              ></Route>
              <Route
                path="/students"
                element={<Studentapage studentsusers={studentsusers} />}
              ></Route>
              <Route
                path="/studentprofile"
                element={<Studentprofile />}
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </InfoContext.Provider>
    </div>
  );
}

export default App;
