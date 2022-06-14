import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faSkype,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  // const [class, setClass] = useState('')

  return (
    <div>
      <div className="icons-container ">
        <div className="footer-icons">
          <FontAwesomeIcon className="icons" icon={faGithub} />
        </div>
        <div className="footer-icons">
          <FontAwesomeIcon className="icons" icon={faLinkedin} />
        </div>
        <div className="footer-icons">
          <FontAwesomeIcon className="icons" icon={faSkype} />
        </div>
        <div className="footer-icons">
          <FontAwesomeIcon className="icons" icon={faTwitter} />
        </div>
      </div>
    </div>
  );
}

export default Footer;

/* Copyright © 2020 Clique. All rights reserved */
