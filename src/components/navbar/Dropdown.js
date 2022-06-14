import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const DropdownContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: 9999;
  align-items: center;
  justify-content: center;
  background: #fff;
  position: fixed;
  display: flex;
  top: ${({ open }) => (open ? "0" : "-100%")};
  flex-direction: column;
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: 0.3s ease-in-out;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled.div`
  margin-bottom: 2rem;
  display: flex;

  a {
    text-transform: capitalize;
    text-decoration: none;
    color: #6b7688;
    cursor: pointer;
  }
`;

const IconsContainer = styled.div`
  // width: 100%;
  position: absolute;
  display: flex;
  bottom: 1.6rem;
`;

const Icons = styled.div`
  margin: 1.3rem;
  font-size: 20px;
  cursor: pointer;

  a {
    &:hover {
      animation: rubberBand 0.8s;
    }
  }
  .instagram {
    color: #f09433;
    color: -moz-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    color: -webkit-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    color: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
  }
`;

function DropdownMenu({ open, toggleMenu }) {
  return (
    <>
      <DropdownContainer open={open}>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
        >
          <h1
            onClick={toggleMenu}
            style={{
              position: "absolute",
              right: "2rem",
              padding: "0.2rem",
              top: " 2rem",
              color: "#6b7688",
              cursor: "pointer",
            }}
          >
            x
            {/* #e95950
            #bc2a8d
            #fccc63 */}
          </h1>
        </motion.div>
        {["home", "about", "skills", "experience", "contact"].map((item) => (
          <NavMenuLinks key={`${item}`} onClick={toggleMenu}>
            <motion.div
              whileInView={{ y: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
            >
              <a href={`#${item}`}>{item}</a>
            </motion.div>
          </NavMenuLinks>
        ))}

        <IconsContainer>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.8 }}
          >
            <Icons>
              <a
                className="instagram"
                href="https://www.instagram.com/emilysons_intergrated/"
                // style={{ color: "#bc2a8d" }}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </Icons>
          </motion.div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.7 }}
          >
            <Icons>
              <a href="/" style={{ color: "#171515" }}>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Icons>
          </motion.div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.6 }}
          >
            <Icons>
              <a href="/" style={{ color: "#1da1f2" }}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </Icons>
          </motion.div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <Icons>
              <a href="/" style={{ color: "#0072b1" }}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </Icons>
          </motion.div>
        </IconsContainer>
      </DropdownContainer>
    </>
  );
}

export default DropdownMenu;
