import React, { useRef } from "react";
import "./About.scss";
import { motion } from "framer-motion";

function About() {
  const constraintsRef = useRef(null);
  return (
    <div id="about" className="container-all">
      <div className="about__container">
        <span className="about__text">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="head-text styled-text">About me</h2>
          </motion.div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            I am a full stack software developer with 7+ years of experience. As
            a full stack developer I do both frontend and backend development. I
            have an adept skills and experience in varieties of application
            development technologies.
          </motion.div>
        </span>

        <span className="about__text2">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="styled-text">Career Objective:</h3>
          </motion.div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            To strive for excellence and precision at all times in all positions
            and circumstances and to be part of a team that is enthusiastic,
            dedicated, and responsible for turning knowledge into value for an
            organization.
          </motion.div>

          <div className="button-div">
            <button className="resume-button">View Resume</button>
          </div>
        </span>
      </div>
      <motion.div className="containerBig" ref={constraintsRef}>
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.4, ease: "easeIn", staggerChildren: 0.5 }}
        >
          <motion.div
            className="itemBig"
            drag
            dragConstraints={constraintsRef}
          />
        </motion.div>

        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.4, ease: "easeIn" }}
        >
          <motion.div
            className="item2Big"
            drag
            dragConstraints={constraintsRef}
          />
        </motion.div>

        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.4, ease: "easeIn" }}
        >
          <motion.div
            className="item3Big"
            drag
            dragConstraints={constraintsRef}
          />
        </motion.div>
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.4, ease: "easeIn" }}
        >
          <motion.div
            className="item4Big"
            drag
            dragConstraints={constraintsRef}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
