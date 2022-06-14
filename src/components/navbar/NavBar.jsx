import React from "react";
import "./NavBar.scss";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import MenuIcon from "@mui/icons-material/Menu";
import "animate.css";

function NavBar({ toggleMenu }) {
  return (
    <nav className="app__navbar">
      <div style={{ opacity: 0.1 }} className="app__navbar-logo">
        <DeveloperModeIcon fontSize="large" className="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "skills", "experience", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
            <div />
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <MenuIcon className="menu__icon" onClick={toggleMenu} />
        {/* {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <CancelSharpIcon
              className="menu__closeIcon"
              fontSize="large"
              onClick={() => setToggle(false)}
            />
            <ul>
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <li onClick={() => setToggle(false)} key={`link-${item}`}>
                    <a href={`#${item}`}>{item}</a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}*/}
      </div>
    </nav>
  );
}

export default NavBar;
