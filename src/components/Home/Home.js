import React, { useState } from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import me from "../../assets/me.jpg";

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className="home-wrapper">
      <div className="home">
        <div className={`greeting${!imageLoaded ? " hide" : ""}`}>
          <img
            className="me"
            alt="me"
            src={me}
            onLoad={() => setImageLoaded(true)}
          />
          <h1 className="greeting-text">
            Hi, I'm <span className="name">Catherine</span>.
          </h1>
          <h1 className="greeting-text">
            <Typewriter
              options={{
                strings: [
                  "I'm a Full Stack Web Developer.",
                  "I love learning new technologies.",
                  "I love creating new digital experiences.",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
                cursor: "<",
                delay: 100,
              }}
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
