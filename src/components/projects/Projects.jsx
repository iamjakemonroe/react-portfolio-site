import React, { useState } from "react";
import "./Projects.scss";
import { motion } from "framer-motion";
import clique from "../../assets/pictures/clique.png";
import cardium from "../../assets/pictures/cardium.png";
import vigovote from "../../assets/pictures/vigovote.png";
import vigotag from "../../assets/pictures/vigotag.png";
import feastbank from "../../assets/pictures/feastbank.png";
import moonsat from "../../assets/pictures/moonsat2.PNG";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "20rem",
  bgcolor: "background.paper",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

const Allprojects = [
  {
    title: "Clique",
    description: "Design/Development",
    imgUrl: clique,
    url: "https://clique.ng/",
    urlName: "clique.ng",
  },
  {
    title: "Cardium",
    description: "Development/Technology",
    imgUrl: cardium,
    url: "",
    urlName: "cardium.com",
  },
  {
    title: "Vigo Vote",
    description: "Design/Development",
    imgUrl: vigovote,
    url: "",
    urlName: "vigovote.com",
  },
  {
    title: "Vigotag",
    description: "Design/Development",
    imgUrl: vigotag,
    url: "",
    urlName: "vigotag.com",
  },
  {
    title: "Feast Bank",
    description: "Development/Technology",
    imgUrl: feastbank,
    url: "https://feastbank.com/",
    urlName: "feastbank.com",
  },
  {
    title: "Moonsat",
    description: "Development/Technology",
    imgUrl: moonsat,
    url: "https://moonsat.org/",
    urlName: "moonsat.org",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(false);
  const selectProject = (project) => setSelectedProject(project);
  const removeProject = () => setSelectedProject(null);

  return (
    <div style={{ paddingBottom: "3rem" }}>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <h2 id="projects" className=" h2-text">
          Some Of My Projects
        </h2>
      </motion.div>

      <div className="app__projects">
        {Allprojects.map((project, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.7, type: "tween" }}
            key={project.title}
            className="app__projects-item"
            onClick={() => {
              selectProject(project);
            }}
          >
            <img src={project.imgUrl} alt={project.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {project.title}
              <p className="p-text" style={{ marginTop: 10 }}>
                {project.description}
              </p>
            </h2>

            {/* {modalIsOpen ? <Modal /> : null}
            {modalIsOpen ? <Backdrop /> : null} */}
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <div>
        <Modal
          open={selectedProject}
          onClose={() => {
            removeProject();
          }}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={selectedProject}>
            <Box sx={style}>
              <Typography id="transition-modal-description">
                Continue to {selectedProject?.urlName} ?
              </Typography>

              <div
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "space-berween",
                  paddingTop: "1rem",
                }}
              >
                <button
                  onClick={removeProject}
                  className="closeBtn"
                  style={{
                    font: "inherit",
                    padding: "0.5rem  1rem",
                    borderRadius: "3px",
                    border: "1px solid #b00040",
                    margin: "3rem 1rem 0rem 0rem",
                    position: "relative",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
                <a href={selectedProject?.url}>
                  <button
                    style={{
                      font: "inherit",
                      padding: "0.5rem 1rem",
                      backgroundColor: "#b00040",
                      borderRadius: "3px",
                      margin: "3rem 1rem 0rem 0rem",
                      border: "1px solid #b00040",
                      color: "#fff",
                      cursor: "pointer",
                      position: "relative",

                      "&:hover": {
                        backgroundColor: "#920036",
                        color: "#fff",
                      },
                    }}
                  >
                    Proceed
                  </button>
                </a>
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}

export default Projects;
