import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "../component/Navbar";
import Homepage from "../pages/Homepage";
import Report from "../pages/Report";
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
              <Route path="/" element={<Homepage />}></Route>
              <Route path="/report" element={<Report />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </InfoContext.Provider>
    </div>
  );
}

export default App;
