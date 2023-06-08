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
            <p>Kfar Galim high school</p>
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
          <p className="footer-text">Mazcir - 0584664304</p>
          <p className="footer-text">MB - 0584664304</p>
          <p className="footer-text">Mancal - 0584664304</p>
        </div>
        <div>
          <h1 className="headers">FIND US ON</h1>

          <div></div>
          <a
            className="footer-text"
            target="_blank"
            href="https://www.youtube.com/channel/UCZipgpiwZ-2c8uQHQrqnSog"
          >
            <img
              className="logos"
              src="https://www.liblogo.com/img-logo/yo482f28b-youtube-icon-logo-free-youtube-logo-icon-symbol-png-svg-download.png"
              alt="image"
            />
          </a>
          <br></br>
          <a
            className="footer-text"
            target="_blank"
            href="https://www.facebook.com/kfargalim.kfargalim/"
          >
            <img
              className="logos"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/640px-Facebook_icon_2013.svg.png"
              alt="image"
            />
          </a>
          <br></br>
          <a
            className="footer-text"
            target="_blank"
            href="https://www.instagram.com/kfar.galim/?hl=en"
          >
            <img
              className="logos"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/640px-Instagram_logo_2022.svg.png"
              alt="image"
            />
          </a>
          <br></br>
        </div>
        <div>
          <h1 className="headers">CONTACT US</h1>
          <p className="footer-text">contact us in the page</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
