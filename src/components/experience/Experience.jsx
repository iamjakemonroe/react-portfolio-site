import React, { useState } from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ExperienceContainer = styled.div`
  padding: 7rem 10rem 2rem 10rem;

  @media screen and (max-width: 768px) {
    padding: 5rem 3rem 5rem 2rem;
  }

  .head-items {
    display: flex;
    position: relative;
    justify-content: space-between;
  }
`;
const ExperienceContent = styled.div`
  position: relative;
  margin: 0rem 0rem 0rem 0rem;
  display: flex;
  flex-direction: column;
  text-align: start;

  a {
    text-decoration: none;
  }
  .hidden-list {
    display: ${({ seeMore }) => (seeMore ? "flex" : "none")};
  }
`;
const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0rem 0rem 0rem;

  .list-cont {
    display: flex;
    position: relative;
  }
  .img-cont {
    height: 60px;
    border-radius: 50%;
    box-shadow: 0 0 25px rgb(168 168 168 / 15%);
    padding: 0.3rem;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
  p {
    padding: 0.7rem 0.2rem 0.2rem 0.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    color: #000;

    span {
      font-size: small;
      font-family: inherit;
      color: gray;
    }
  }
  .line {
    height: 1px;
    width: 100%;
    background-color: #b8c4d7a2;
  }
  .link-img {
    height: 70px;
    width: 156px;
    object-fit: cover;
    margin-right: 1rem;
    border-radius: 10px;
    margin-bottom: 0.8rem;

    @media screen and (max-width: 768px) {
      height: 100px;
    }
  }

  .show-all-btn {
    width: 100%;
    position: relative;
    bottom: 49px;
    align-items: center;
    justify-content: center;
    display: ${({ seeMore }) => (seeMore ? "none" : "flex")};

    button {
      border: 1px solid #b8c4d7a2;
      border-radius: 20px;
      height: 3px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: 0.3s ease-in-out;

      &: hover {
        background-color: #cfd5dc;
      }
    }
  }
  .show-less-btn {
    width: 100%;
    position: relative;
    bottom: 49px;
    align-items: center;
    justify-content: center;
    display: flex;

    button {
      border: 1px solid #b8c4d7a2;
      border-radius: 20px;
      height: 3px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: 0.3s ease-in-out;

      &: hover {
        background-color: #cfd5dc;
      }
    }
  }
`;

const ExperienceListText = styled.div`
  padding-left: 4rem;
  padding-top: 1.5rem;
  padding-bottom: 2rem;
  width: 60%;
  font-size: 14px;
  display: flex;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ExperienceListTextColumn = styled.div`
  padding-left: 4rem;
  padding-top: 1.5rem;
  padding-bottom: 2rem;
  width: 60%;
  font-size: 14px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  .hidden-text {
    position: relative;
    padding-top: 1.9rem;
    transition: 0.1s ease-in-out;
    display: column;
    display: ${({ readMore }) => (readMore ? "column" : " none")};
    @media screen and (max-width: 768px) {
      display: column;
    }
  }

  .read-more {
    width: fit-content;
    cursor: pointer;
    margin-bottom: 1.8rem;
    font-size: small;
    color: rgb(59, 59, 130);
    top: 0;
    bottom: 0;
    left: 0;
    display: ${({ readMore }) => (readMore ? "none" : "flex")};
  }
`;

const Experience = () => {
  const [readMore, setReadMore] = useState(false);

  const [seeMore, setSeeMore] = useState(false);

  const show = () => {
    setReadMore(!readMore);
    console.log(readMore);
  };

  const showList = () => {
    setSeeMore(!seeMore);
    console.log(seeMore);
  };
  return (
    <ExperienceContainer id="experience">
      <div className="head-items">
        <h3>Experience</h3>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/alexsirguy/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#0072b1" fontSize="18px" />
        </a>
      </div>

      <ExperienceContent seeMore={seeMore}>
        <ExperienceList>
          <a href="https://only.one/" target="_blank" rel="noreferrer">
            <div className="list-cont">
              <div className="img-cont">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4E0BAQGvwLWhqsSA1w/company-logo_100_100/0/1654526032954?e=1662595200&v=beta&t=m5lMu-fycyEbPTSKJ4zrGAcf7_habXJAxTJACz2GiMc"
                  alt="onlyOne"
                />
              </div>
              <p>
                Senior Software Engineer<span>Only One · Full-time</span>
                <span>Jun 2021 - Present · 1 yr 1 mo</span>
              </p>
            </div>
          </a>

          <ExperienceListText>
            Co-managing the frontend application.
            <br /> Sprint planning, code reviews, releases, researching
            technology platforms, CI / CD & infrastructure.
          </ExperienceListText>

          <div className="line" />
        </ExperienceList>

        <ExperienceList>
          <a
            href="https://climbcredit.com/students"
            target="_blank"
            rel="noreferrer"
          >
            <div className="list-cont">
              <div className="img-cont">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4D0BAQE3CZBNttm9hQ/company-logo_200_200/0/1597682135826?e=1662595200&v=beta&t=ZUiGTHl9A7Ew4vHMJdJ7Oxm_lYXIu7MdSnD7RQr_CtU"
                  alt="ClimbCredit"
                />
              </div>
              <p>
                Software Engineer<span>Climb Credit · Contract</span>
                <span>Feb 2021 - Present · 1 yr 5 mos</span>
              </p>
            </div>
          </a>
          <ExperienceListText>
            Working with the student team as an individual contributor. Sprint
            planning, code reviews, researching, and integrating third-party API
            to improve the platform.
          </ExperienceListText>
          <div className="line" />
        </ExperienceList>

        <ExperienceList>
          <a href="https://clique.ng/" target="_blank" rel="noreferrer">
            <div className="list-cont">
              <div className="img-cont">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4D0BAQEp0OzFeSYXLQ/company-logo_200_200/0/1586801572400?e=1662595200&v=beta&t=hQWnreRpSsRim8cdtaohqmTTXpwcF5TQwDEYXFN5QsE"
                  alt="clique"
                />
              </div>
              <p>
                Co-Founder<span>Clique_ng · Full-time</span>
                <span>Sep 2019 - Jul 2021 · 1 yr 11 mos</span>
              </p>
            </div>
          </a>
          <ExperienceListText>
            <a href="https://clique.ng/" target="_blank" rel="noreferrer">
              <img
                className="link-img"
                alt="clique"
                src="https://media-exp1.licdn.com/dms/image/C4D1BAQEflbRArRENbA/company-background_10000/0/1586801613915?e=1655359200&v=beta&t=NWN8mbkQTXHCmAfjTdBiVcdwbJ3EiXiE4OtddCikTd8"
              />
            </a>
            <span
              style={{
                position: "relative",
                alignItems: "center",
                display: "flex",
              }}
            >
              Create and run an online school
            </span>
          </ExperienceListText>
          <div className="line" />
        </ExperienceList>

        <ExperienceList id="lead" seeMore={seeMore}>
          <a href="https://moonsat.org/" target="_blank" rel="noreferrer">
            <div className="list-cont">
              <div className="img-cont">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C560BAQGR4Lp7cgMbkw/company-logo_200_200/0/1519913368957?e=1662595200&v=beta&t=ndUPbv2GuIaS_TilDl6FQMy9jJAdoY5oj3KbWz6sS8w"
                  alt="moonsat"
                />
              </div>
              <p>
                Engineering Lead<span>Moonsat Technology · Full-time</span>
                <span>Aug 2017 - Jan 2021 · 3 yrs 6 mos</span>
              </p>
            </div>
          </a>
          <ExperienceListTextColumn readMore={readMore}>
            Interfacing with clients to gather project requirements, design
            architecture, and set up infrastructure to develop and deploy
            solutions. Lead sprint planning, Retro, manage releases, setup CI
            /CD & Infrastructure, and lead the team.
            <span className="read-more" onClick={show}>
              ...read more
            </span>
            <div className="hidden-text">
              <a href="https://moonsat.org/" target="_blank" rel="noreferrer">
                <img
                  className="link-img"
                  alt="moonsat"
                  src="https://media-exp1.licdn.com/dms/image/C4E22AQEJZW6TRtz-Pg/feedshare-shrink_800/0/1597096610388?e=1657756800&v=beta&t=6K4S3kY2mqaztOIqio68IgKD6Mo8opGTCn85s7M-f8E"
                />
              </a>
              <span
                style={{
                  position: "relative",
                  //   alignItems: "center",
                  display: "flex",
                }}
              >
                Moonsat Technology Ltd
                <br />
                Moonsat Technology is a tech startup that focus on development
                of freeware and enterprise software solutions for business and
                individuals.
              </span>
            </div>
          </ExperienceListTextColumn>
          <div className="line" />
          <div className="show-all-btn">
            <button onClick={showList}>
              Show all <KeyboardArrowDownIcon />
            </button>
          </div>
        </ExperienceList>

        {/* <div > */}
        <ExperienceList seeMore={seeMore} className="hidden-list">
          <div className="list-cont">
            <div className="img-cont">
              <img
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/cto-chief-technology-officer-4748695-3941445.png"
                alt="Vspotter"
              />
            </div>
            <p>
              Chief Technology Officer<span>Vspotter</span>
              <span>Oct 2018 - Nov 2019 · 1 yr 2 mos</span>
            </p>
          </div>

          <ExperienceListText>
            Lead the technology team.
            <br />
            Lead sprint planning, code reviews, releases, researching technology
            platforms, CI / CD & infrastructure, and coaching.
          </ExperienceListText>

          <div className="line" />
        </ExperienceList>
        {/* </div> */}

        <ExperienceList className="hidden-list">
          <div className="list-cont">
            <div className="img-cont">
              <img
                src="https://cdn.xxl.thumbs.canstockphoto.com/vector-illustration-of-blue-icon-in-flat-line-style-linear-cute-and-happy-man-with-laptop-vector-vector-clipart_csp45612708.jpg"
                alt="Vspotter"
              />
            </div>
            <p>
              Instant Deposit Limited<span>Vspotter</span>
              <span>1 yr 1 mo</span>
            </p>
          </div>

          <ExperienceListText style={{ flexDirection: "column" }}>
            <p>
              Senior Lead Software Engineer<span>Part-time</span>
              <span>Sep 2018 - Sep 2019 . 1 mo</span>
            </p>
            <p>
              Lead Software Engineer
              <span>Sep 2018 . 1 mo</span>
            </p>
            <br />
            Lead the technical team that developed an offline banking system to
            deposit cash into any Nigeria Bank using USSD. Research technology,
            sprint planning, setup CI / CD & Infrastructure, manage timeline,
            coaching and onboarding engineers.
          </ExperienceListText>

          <div className="line" />
        </ExperienceList>
        {/*  */}

        <ExperienceList className="hidden-list">
          <div className="list-cont">
            <div className="img-cont">
              <img
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/cto-chief-technology-officer-4748695-3941445.png"
                alt="Sourcsgig"
              />
            </div>
            <p>
              Chief Technology Officer<span>Sourcegig.com</span>
              <span>Nov 2017 - Oct 2018 · 1 yr</span>
            </p>
          </div>

          <ExperienceListText>
            Upgrade the current system to a new stack and enforcing the
            adherence to design pattern. Building Smart Analytic system using
            Google Analytics and Mixpanel. Integrate payment gateways, while
            dealing with security and infrastructure requirements.
            <br />
            <br />
            Tools: PHP (Slim) and MYSQL (Eloquent ORM), HTML 5, CSS3,
            Typescript, JavaScript, Bootstrap, jQuery, Twig, Handlesbar.js, MDL,
            Git.
          </ExperienceListText>

          <div className="line" />
        </ExperienceList>

        <ExperienceList className="hidden-list">
          <div className="list-cont">
            <div className="img-cont">
              <img
                src="https://c8.alamy.com/comp/PJ7522/specialist-icon-monochrome-style-design-from-management-collection-ui-pixel-perfect-simple-pictogram-specialist-icon-web-design-apps-software-p-PJ7522.jpg"
                alt="IT specialist"
              />
            </div>
            <p>
              Lead IT Specialist<span>Denjos Multi Service Ltd</span>
              <span>Mar 2014 - Nov 2017 · 3 yrs 9 mos</span>
            </p>
          </div>

          <ExperienceListText style={{ flexDirection: "column" }}>
            <li>Developed and maintain Inventory control system.</li>
            <li>
              Integrate, configure and maintain Point of Sale (POS) system.
            </li>
            <li>
              Train staffs on the use of Inventory control system and POS.
            </li>
            <li>Developed and maintain an E-commerce web application.</li>
            <li>Setup and maintain IT infrastructure for the organization. </li>
            <br />
            Tools: PHP and MYSQL, SQLite, HTML 5, CSS3, JavaScript, Bootstrap,
            jQuery, WordPress.
          </ExperienceListText>
          <div className="line" />
          <div className="show-less-btn">
            <a href="#lead">
              <button onClick={showList}>
                Show less <KeyboardArrowUpIcon />
              </button>
            </a>
          </div>
        </ExperienceList>
      </ExperienceContent>
    </ExperienceContainer>
  );
};

export default Experience;
