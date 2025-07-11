import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <div id="popular" className="title-cards">
          <TitleCards />
          </div>
          
        </div>
      </div>
      <div className="more-cards">
        <div id="blockbusters">
          <TitleCards title="Blockbuster Movies" category="popular" />
        </div>
        <div id="only-on-netflix">
          <TitleCards title="Only on Netflix" category="top_rated" />
        </div>
        <div id="upcomings">
          <TitleCards title="Upcomings Movies" category="upcoming" />
        </div>
        <div id="top-picks">
          <TitleCards title="Top Pics for You" category="now_playing" />
        </div>
      </div>
      <div id="footer">
      <Footer/>
      </div>
    </div>
  );
};

export default Home;
