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
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./homePage.css";
import Team from "../teams/Team";
import teamData from "../../teamData.json";
import { Link } from "react-router-dom";

function HomePage() {
  const colors=['yellow','black','green','brown']
  const data = cardData.data;
  const teamNData = teamData.teamData;
  const teamIcons = [
    faVolleyballBall,
    faChess,
    faFutbol ,
    faBasketballBall,
  ];
  
  return (
    <div>
      <div className="news-ticker">
        <NewsTicker></NewsTicker>
      </div>
      <br />
      <section className="homePage-section">
        <div className="homePage-container">
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
          <div>
            <ul>
              <li>
                {" "}
                <FontAwesomeIcon icon={faUser} />
                Personal attention{" "}
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faGraduationCap} />
                Professional and dedicated educators{" "}
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                Education for values and imparting knowledge
              </li>
            </ul>
          </div>
          <div className="teams-container">
            {teamNData &&
              teamNData.map((value, index) => {
                const color = colors[index % colors.length];
                
                return (
                  <div key={index} className="team-item">
                    <Link  to={`/team/${value.id}`}>
                    <Team   icon={teamIcons[index % teamIcons.length]} style={{ backgroundColor: color }} title={value.title} image={value.image} />
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
