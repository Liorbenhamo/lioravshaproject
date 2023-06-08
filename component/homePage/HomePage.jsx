import React from "react";
import Carousel from "../carousel/Carousel";
import NewsTicker from "../newsTicker/NewsTicker";
import CardEvent from "../cardEvent/CardEvent";
import cardData from "../../cardData.json";
import {
  faUser,
  faGraduationCap,
  faMagnifyingGlass,
  faVolleyballBall,
  faChess,
  faFutbol,
  faBasketballBall,
  faEarthAmericas,
  faBridge,
  faPerson
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./homePage.css";
import Team from "../teams/Team";
import teamData from "../../teamData.json";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function HomePage() {
  const colors = ["yellow", "black", "green", "brown"];
  const data = cardData.data;
  const teamNData = teamData.teamData;
  const teamIcons = [faVolleyballBall, faChess, faFutbol, faBasketballBall];

  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "../../pictures/1.jpg",
    "../../pictures/2.jpg",
    "../../pictures/3.jpg",
    "../../pictures/4.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div className="news-ticker">
        <NewsTicker></NewsTicker>
      </div>
      <div className="head-contaiter">
        <div className="background-image">
          {" "}
          <img src={images[currentImage]} alt="Slider Image" />
        </div>
        <div className="headline-school">
          <h1>Kfar Galim high school</h1>
          <h3>A place of love and excellence</h3>
          <FontAwesomeIcon
            icon={faGraduationCap}
            size="2xl"
            style={{ color: "#2d22c3" }}
          />
        </div>
      </div>
      <div className="container-card">
        <div style={{ backgroundColor: "orange" }} className="cards">
         <h1>Pleasure in paddling</h1> 
        <div> <FontAwesomeIcon icon={faEarthAmericas} size="2xl" color="white" /></div> 
        </div>
        <div style={{ backgroundColor: "blue" }} className="cards">
         <h1>A bond as a bridge</h1>
          <div><FontAwesomeIcon icon={faBridge} size="2xl" color="white" /></div>
        </div>
        <div style={{ backgroundColor: "green" }} className="cards">
         <h1> place in the world</h1>
         <div> <FontAwesomeIcon icon={faPerson} size="2xl" color="white" /></div>
        </div>
      </div>
      <br />
      <section className="homePage-section">
        <div className="homePage-container">
          <h1 className="headline-carousel">Main Event</h1>
          <hr />
          <div className="events-carousel">
            <Carousel show={2} infiniteLoop={true}>
              {data.map((item) => (
                <div key={item.id}>
                  <CardEvent
                    title={item.title}
                    image={item.image}
                    content={item.content}
                  ></CardEvent>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="feature-list">
            <div className="feature-item">
              <FontAwesomeIcon icon={faUser} />
              <span>Personal attention</span>
            </div>
            <div className="feature-item">
              <FontAwesomeIcon icon={faGraduationCap} />
              <span>Professional and dedicated educators</span>
            </div>
            <div className="feature-item">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <span>Education for values and imparting knowledge</span>
            </div>
          </div>

          <div className="teams-container">
            {teamNData &&
              teamNData.map((value, index) => {
                const color = colors[index % colors.length];

                return (
                  <div key={index} className="team-item">
                    <Link to={`/team/${value.id}`}>
                      <Team
                        icon={teamIcons[index % teamIcons.length]}
                        style={{ backgroundColor: color }}
                        title={value.title}
                        image={value.image}
                      />
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
