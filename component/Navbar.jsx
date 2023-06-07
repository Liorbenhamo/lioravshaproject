import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./navbar.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { InfoContext } from "../src/App";
import Login from "./Login";
function Navbar() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 500,
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const info = React.useContext(InfoContext);
  return (
    <div className="bodynavbar">
      <header className="headernavbar">
        <Link to="/">
          <h1 className="logo">
            <p>bat yam school</p>
          </h1>
        </Link>

        <ul className="main-nav">
          <li className="headersnavbar">
            <p onClick={handleOpen}>login</p>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Login />
              </Box>
            </Modal>
          </li>

          <Link to="/students">
            <li className="headersnavbar">
              <p>Studentspage</p>
            </li>
          </Link>
          <Link to="/teachers">
            <li className="headersnavbar">
              <p>Teachers</p>
            </li>
          </Link>

          <Link to="/report">
            <li className="headersnavbar">
              <p>report</p>
            </li>
          </Link>
        </ul>
      </header>
      <Outlet />
    </div>
  );
}

export default Navbar;
