import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "../component/Navbar";
import HomePage from '../component/homePage/HomePage'
import Report from "../pages/Report";
import TeamInfo from '../component/teamInfo/TeamInfo';
export const InfoContext = createContext();
function App() {
  const [correntuser, setCorrentuser] = useState();
  const obj = {
    correntuser,
    setCorrentuser,
  };
  return (
    <div>
      <InfoContext.Provider value={obj}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<HomePage />}></Route>
              <Route path="/report" element={<Report />}></Route>
              <Route path="team/:id" element={<TeamInfo/>}></Route>

            </Route>
          </Routes>
        </BrowserRouter>
      </InfoContext.Provider>
    </div>
  );
}

export default App;
