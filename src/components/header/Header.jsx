import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import RotatingImg from "../../assets/pictures/RotatingImg";
import CirclesAnimation from "../floatingIcons/CirclesAnimation";

const Header = () => {
  return (
    <div id="home" className="app__header">
      <div className="header__one app__flex">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <div className="app__header-badge">
            <div className="badge-cmp app__flex">
              <span className="wave" style={{ fontSize: 32, marginLeft: -14 }}>
                👋🏽
              </span>

              <div style={{ marginLeft: 12 }}>
                <p className="p-text">Hi, I'm </p>
                <h1 className="name">Alexander</h1>
              </div>
            </div>

            <div className="tag-cmp app__flex">
              <p className="p-text">Full Stack Developer</p>
              <p className="p-text">DevOps Developer</p>
              <p className="p-text">Mobile Developer</p>
              <p className="p-text">Game Developer</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.7, delayChildren: 0.5 }}
          className="app__header-img"
        >
          <RotatingImg className="rotating__img" />
        </motion.div>
      </div>
      <CirclesAnimation />
    </div>
  );
};

export default Header;
