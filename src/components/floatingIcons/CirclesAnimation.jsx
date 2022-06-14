import React, { useRef } from "react";
import "./CirclesAnimation.scss";
import { motion } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faAngular,
//   faReact,
//   faHtml5,
//   faCss3,
//   faGitAlt,
//   faPhp,
//   faReacteurope,
// } from "@fortawesome/free-brands-svg-icons";

function CirclesAnimation() {
  const constraintsRef = useRef(null);
  return (
    <motion.div className="container" ref={constraintsRef}>
      <motion.div
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 0.4, ease: "easeIn" }}
      >
        <motion.div className="item" drag dragConstraints={constraintsRef} />
      </motion.div>

      <motion.div
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 0.4, ease: "easeIn" }}
      >
        <motion.div className="item2" drag dragConstraints={constraintsRef} />
      </motion.div>

      <motion.div
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 0.4, ease: "easeIn" }}
      >
        <motion.div className="item3" drag dragConstraints={constraintsRef} />
      </motion.div>
      <motion.div
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 0.4, ease: "easeIn" }}
      >
        <motion.div className="item4" drag dragConstraints={constraintsRef} />
      </motion.div>
    </motion.div>
  );
}

export default CirclesAnimation;
