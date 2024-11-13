/* eslint-disable react/prop-types */
import "./Hero.css";
import { AnimatePresence, motion } from "framer-motion";

function Hero() {
  return (
    <main>
      <div className="heroText">
        <h1>Hi!</h1>
        <p>
          I’m <span>Neer</span>, a 15-year-old tech fanatic and aspiring
          developer/designer from Sydney, Australia.
        </p>
      </div>
      <div className="heroImg">
        <img></img>
        <div className="glow"></div>
      </div>
    </main>
  );
}

export default Hero;
