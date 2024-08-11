import "../Styles/About.css";
// import ProfileImage from "../assets/JustinM.png";
import { TypeAnimation } from "react-type-animation";


// Export the About component to the router in main.jsx.
export default function About() {
  return (
    <div className="about">
      <div className="about-img">
        {/* <img src={ProfileImage} alt="Justin Morris" /> */}
      </div>
      <div className="about-description">
        <h1>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially until reload.
              "Justin Morris",
              2000, // Wait for 2 seconds for text to be animated.
            ]}
            wrapper="span"
            speed={50}
            // Inline style to change font size and display.
            style={{ fontSize: "1em", display: "inline-block" }}
            repeat={Infinity}
          />
        </h1>
        <h2>Full Stack Web Developer</h2>
        <p>
        I am actively developing my expertise as a Full-Stack Web Developer 
        with a focus on JavaScript, React, and Node.js. I excel in environments 
        that promote growth and continuous learning, and I am committed to creating 
        responsive, dynamic websites that have a meaningful impact in the tech world. 
        As a team-oriented individual, I am eager to learn, adapt, and contribute in 
        collaborative settings.
        </p>
      </div>
    </div>
  );
}
