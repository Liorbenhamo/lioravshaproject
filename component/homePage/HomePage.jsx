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
  faPerson,
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
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (cardId) => {
    setHoveredCard(cardId);
  };

  const renderCardContent = (cardId) => {
    switch (cardId) {
      case 1:
        return (
          <div>
            <p>
              Exposing students to their immediate and distant environment.
              Raising awareness of social and environmental challenges and
              encouraging them to initiate and get involved. Giving the right to
              feel belonging to a social or environmental cause.
            </p>
          </div>
        );
      case 2:
        return (
          <div>
            <p>
              Developing skills for creating connections and optimal
              intra-personal and interpersonal communication, working in a team
              and developing listening to oneself and others, which forms
              bridges to a better society.
            </p>
          </div>
        );
      case 3:
        return (
          <div>
            <p>
              Providing opportunities for the development of autonomy and choice
              in a way that will give room for the exploitation of the skills
              and abilities of each of the students while giving free rein to
              the expression of personal ideas.
            </p>
          </div>
        );
      default:
        return null;
    }
  };
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const shouldShowButton = scrollTop > 100;
    setIsVisible(shouldShowButton);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
        <div
          style={{ backgroundColor: "orange" }}
          className={`cards ${hoveredCard === 1 ? "hovered" : ""}`}
          onMouseEnter={() => handleCardHover(1)}
          onMouseLeave={() => handleCardHover(null)}
        >
          <h1>Pleasure in paddling</h1>
          <div>
            <FontAwesomeIcon icon={faEarthAmericas} size="2xl" color="white" />
          </div>
          {hoveredCard === 1 && renderCardContent(1)}
        </div>
        <div
          style={{ backgroundColor: "blue" }}
          className={`cards ${hoveredCard === 2 ? "hovered" : ""}`}
          onMouseEnter={() => handleCardHover(2)}
          onMouseLeave={() => handleCardHover(null)}
        >
          <h1>A bond as a bridge</h1>
          <div>
            <FontAwesomeIcon icon={faBridge} size="2xl" color="white" />
          </div>
          {hoveredCard === 2 && renderCardContent(2)}
        </div>
        <div
          style={{ backgroundColor: "green" }}
          className={`cards ${hoveredCard === 3 ? "hovered" : ""}`}
          onMouseEnter={() => handleCardHover(3)}
          onMouseLeave={() => handleCardHover(null)}
        >
          <h1> place in the world</h1>
          <div>
            {" "}
            <FontAwesomeIcon icon={faPerson} size="2xl" color="white" />
          </div>
          {hoveredCard === 3 && renderCardContent(3)}
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
                    <Link onClick={() => window.scroll(0,0)}  to={`/team/${value.id}`}>
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
      <div>
        <button
          className={`scroll-to-top ${isVisible ? "visible" : ""}`}
          onClick={scrollToTop}
        >
          <i className="arrow up"></i>
        </button>
      </div>
    </div>
  );
}

export default HomePage;
