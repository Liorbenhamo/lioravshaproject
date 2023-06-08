import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./navbar.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { InfoContext } from "../src/App";
import Login from "./Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

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
            <p>Kfar Galim high school</p>
          </h1>
        </Link>

        <ul className="main-nav">
          {!info.correntuser && (
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
          )}
          {info?.correntuser?.title == "teacher" && (
            <Link to="/students">
              <li className="headersnavbar">
                <p>Studentspage</p>
              </li>
            </Link>
          )}
          {info?.correntuser?.title == "student" && (
            <Link to="/teachers">
              <li className="headersnavbar">
                <p>Teachers</p>
              </li>
            </Link>
          )}

          <Link to="/report">
            <li className="headersnavbar">
              <p>report</p>
            </li>
          </Link>
          {info.correntuser?.title == "student" && (
            <Link to="/personaleara">
              <li className="headersnavbar">
                <p>Personaleara</p>
              </li>
            </Link>
          )}
          {info.correntuser?.title == "teacher" && (
            <Link to="/personalearateacher">
              <li className="headersnavbar">
                <p>messages</p>
              </li>
            </Link>
          )}
        </ul>
      </header>
      <Outlet />
      <div className="footer">
        <div>
          <h1 className="headers">LOCATION</h1>
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="250"
                height="150"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=%D7%9B%D7%A4%D7%A8%20%D7%92%D7%9C%D7%99%D7%9D&t=&z=15&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
              <a href="https://embedgooglemap.net/124/"></a>
            </div>
          </div>
        </div>
        <div>
          <h1 className="headers">USEFUL PHONE NUMBERS</h1>
          <p className="footer-text">Principle - 0584664304</p>
          <p className="footer-text">Secretary - 0584664304</p>
          <p className="footer-text">MB - 0584664304</p>
          <p className="footer-text">CEO - 0584664304</p>
        </div>
        <div>
          <h1 className="headers">FIND US ON</h1>

          <div className="icons-container">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/"
            >
              <FontAwesomeIcon className="icon" icon={faFacebook} />
            </a>

            <br></br>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/"
            >
              <FontAwesomeIcon className="icon" icon={faInstagram} />
            </a>

            <br></br>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/"
            >
              <FontAwesomeIcon className="icon" icon={faTwitter} />
            </a>
          </div>
          <br></br>
        </div>
        <div>
          <h1 className="headers">CONTACT US</h1>
          <Link onClick={() => window.scroll(0,0)} to='/contact'>
          <button className="contact-us">Contact Us</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
