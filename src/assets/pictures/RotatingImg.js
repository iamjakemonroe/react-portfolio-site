import React from "react";
import "./RotatingImg.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faReact,
  faCss3,
  faGitAlt,
  faPhp,
  faNode,
} from "@fortawesome/free-brands-svg-icons";

function RotatingImg() {
  return (
    <div className="cube_container">
      <div className="cube__spinner">
        <div className="facel1">
          <FontAwesomeIcon icon={faAngular} color="#DD0031" />
        </div>
        <div className="facel2">
          <FontAwesomeIcon icon={faNode} color="#68A063" />
        </div>
        <div className="facel3">
          <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
        </div>
        <div className="facel4">
          <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
        </div>
        <div className="facel5">
          <FontAwesomeIcon icon={faGitAlt} color="#EC4B28" />
        </div>
        <div className="facel6">
          <FontAwesomeIcon icon={faPhp} color="#EFD81D" />
        </div>
      </div>
    </div>
  );
}

export default RotatingImg;
<FontAwesomeIcon icon={faAngular} color="red" />;
