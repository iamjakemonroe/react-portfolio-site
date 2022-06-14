import React, { useState } from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import "animate.css";

const all = [
  {
    name: "React",
    imgUrl: "https://iconape.com/wp-content/files/zk/93042/svg/react.svg",
  },
  {
    name: "JavaScript",
    imgUrl:
      "https://storage.googleapis.com/turing_developers/icon/1632727640552_javascript-2752148-2284965.png",
  },
  {
    name: "Typescript",
    imgUrl: "https://blog.yggdrasilts.com/content/images/2019/11/ts_2.png",
  },
  {
    name: "Angular",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png",
  },
  {
    name: "React-Native",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  },
  {
    name: "Vue",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/555px-Vue.js_Logo_2.svg.png",
  },
  {
    name: "Bootstrap",
    imgUrl:
      "https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png",
  },

  {
    name: "MDL",
    imgUrl:
      "https://t4.ftcdn.net/jpg/04/45/37/13/360_F_445371329_mJAnwt8FMHDgkdeOvYZ8p5dbaAb9fvSP.jpg",
  },

  {
    name: "Angular Material",
    imgUrl: "https://srinivasmp.com/assets/images/angular-material-518x351.png",
  },
  {
    name: " PHP",
    imgUrl:
      "https://storage.googleapis.com/turing_developers/icon/1580232167280_php-vector-svg-2.png",
  },
  {
    name: "Node",
    imgUrl:
      "https://storage.googleapis.com/turing_developers/icon/1596673151443_nodejs.png",
  },
  {
    name: "Python",
    imgUrl:
      "https://storage.googleapis.com/turing_developers/icon/1614660100623_python.png",
  },
  {
    name: "Web Services",
    imgUrl:
      "https://tmarketing.vn/wp-content/uploads/2021/09/Web-Services-3.png",
  },

  {
    name: "AWS",
    imgUrl:
      "https://storage.googleapis.com/turing_developers/icon/1632214058806_aws-lambda-1.svg",
  },
  {
    name: "Micro Services",
    imgUrl:
      "https://storage.googleapis.com/turing_developers/icon/1644859392972_microservices.png",
  },
  {
    name: "GCP",
    imgUrl:
      "https://storage.googleapis.com/turing_developers/icon/1646930539777_gcp.png",
  },

  {
    name: "MYSQL",
    imgUrl: "https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png",
  },
  {
    name: "MariaDB",
    imgUrl:
      "https://www.nicepng.com/png/detail/336-3363223_mariadb-logo-png.png",
  },
  {
    name: "MongDB",
    imgUrl:
      "https://storage.googleapis.com/turing_developers/icon/1594156491355_mongodb.jpg",
  },
  {
    name: "ORACLE SQL",
    imgUrl: "https://www.techasoft.com/debug/img/oracle.png",
  },
  {
    name: "ORM",
    imgUrl: "https://softuni.org/wp-content/uploads/2021/12/orm-300x153.png",
  },
  {
    name: "Mongoose",
    imgUrl:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--P2LgNuEs--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dwcj63fdldqgmvtptoga.png",
  },

  {
    name: "Agile",
    imgUrl:
      "https://devcom.com/wp-content/uploads/2019/08/methodology-agile.png",
  },
  {
    name: "RAD",
    imgUrl:
      "https://getbreakout.com/assets/images/rapid-application-development.jpg",
  },
  {
    name: "DSDM",
    imgUrl:
      "https://d112uwirao0vo9.cloudfront.net/wp-content/uploads/2019/09/Dynamic-Software-Development-Methodology-DSDM.jpg",
  },
  {
    name: "FDD",
    imgUrl:
      "https://d3ixtcdq6iye11.cloudfront.net/storage/public/article/93/1609241398453844561.jpg",
  },
  {
    name: "SCRUM",
    imgUrl:
      "https://scrumorg-website-prod.s3.amazonaws.com/drupal/inline-images/2021-01/scrumorg-scrum-framework-3000.png",
  },
  {
    name: "UML",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/UML_logo.svg/800px-UML_logo.svg.png",
  },
];
const frontend = [
  {
    name: "React",
    imgUrl: "https://iconape.com/wp-content/files/zk/93042/svg/react.svg",
  },
  {
    name: "JavaScript",
    imgUrl:
      "https://storage.googleapis.com/turing_developers/icon/1632727640552_javascript-2752148-2284965.png",
  },
  {
    name: "Typescript",
    imgUrl: "https://blog.yggdrasilts.com/content/images/2019/11/ts_2.png",
  },
  {
    name: "Angular",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png",
  },
  {
    name: "React-Native",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  },
  {
    name: "Vue",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/555px-Vue.js_Logo_2.svg.png",
  },
  {
    name: "Bootstrap",
    imgUrl:
      "https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png",
  },

  {
    name: "MDL",
    imgUrl:
      "https://t4.ftcdn.net/jpg/04/45/37/13/360_F_445371329_mJAnwt8FMHDgkdeOvYZ8p5dbaAb9fvSP.jpg",
  },

  {
    name: "Angular Material",
    imgUrl: "https://srinivasmp.com/assets/images/angular-material-518x351.png",
  },
];
const backend = [
  {
    name: " PHP",
    imgUrl:
      "https://storage.googleapis.com/turing_developers/icon/1580232167280_php-vector-svg-2.png",
  },
  {
    name: "Node",
    imgUrl:
      "https://storage.googleapis.com/turing_developers/icon/1596673151443_nodejs.png",
  },
  {
    name: "Python",
    imgUrl:
      "https://storage.googleapis.com/turing_developers/icon/1614660100623_python.png",
  },
  {
    name: "Web Services",
    imgUrl:
      "https://tmarketing.vn/wp-content/uploads/2021/09/Web-Services-3.png",
  },

  {
    name: "AWS",
    imgUrl:
      "https://storage.googleapis.com/turing_developers/icon/1632214058806_aws-lambda-1.svg",
  },
  {
    name: "Micro Services",
    imgUrl:
      "https://storage.googleapis.com/turing_developers/icon/1644859392972_microservices.png",
  },
  {
    name: "GCP",
    imgUrl:
      "https://storage.googleapis.com/turing_developers/icon/1646930539777_gcp.png",
  },
];
const database = [
  {
    name: "MYSQL",
    imgUrl: "https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png",
  },
  {
    name: "MariaDB",
    imgUrl:
      "https://www.nicepng.com/png/detail/336-3363223_mariadb-logo-png.png",
  },
  {
    name: "MongDB",
    imgUrl:
      "https://storage.googleapis.com/turing_developers/icon/1594156491355_mongodb.jpg",
  },
  {
    name: "ORACLE SQL",
    imgUrl: "https://www.techasoft.com/debug/img/oracle.png",
  },
  {
    name: "ORM",
    imgUrl: "https://softuni.org/wp-content/uploads/2021/12/orm-300x153.png",
  },
  {
    name: "Mongoose",
    imgUrl:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--P2LgNuEs--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dwcj63fdldqgmvtptoga.png",
  },
];

const methodologies = [
  {
    name: "Agile",
    imgUrl:
      "https://devcom.com/wp-content/uploads/2019/08/methodology-agile.png",
  },
  {
    name: "RAD",
    imgUrl:
      "https://getbreakout.com/assets/images/rapid-application-development.jpg",
  },
  {
    name: "DSDM",
    imgUrl:
      "https://d112uwirao0vo9.cloudfront.net/wp-content/uploads/2019/09/Dynamic-Software-Development-Methodology-DSDM.jpg",
  },
  {
    name: "FDD",
    imgUrl:
      "https://d3ixtcdq6iye11.cloudfront.net/storage/public/article/93/1609241398453844561.jpg",
  },
  {
    name: "SCRUM",
    imgUrl:
      "https://scrumorg-website-prod.s3.amazonaws.com/drupal/inline-images/2021-01/scrumorg-scrum-framework-3000.png",
  },
  {
    name: "UML",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/UML_logo.svg/800px-UML_logo.svg.png",
  },
];

const others = [
  {
    name: "git",
    imgUrl:
      "https://storage.googleapis.com/turing_developers/icon/1580938411008_1574358816081_git.png",
  },
  {
    name: "VisualSVN",
    imgUrl: "https://taiwebs.com/upload/icons/visualsvn-sever220-220.jpg",
  },
  {
    name: "TortoiseSVN",
    imgUrl:
      "https://www.saashub.com/images/app/service_logos/18/0a4b576ba5c1/large.png",
  },
];

const WORK_MAP = { database, backend, all, frontend, methodologies, others };

function Skills() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [works, setWorks] = useState(all);

  const handleWorkFilter = (item) => {
    setWorks(WORK_MAP[item.toLowerCase()] || []);
    setActiveFilter(item);
  };

  return (
    <div id="skills" className="skills__cointainer">
      <h2 className="skills__head-text">Skills & Experience</h2>

      <div className="app__work-filter">
        {[
          "FrontEnd",
          "BackEnd",
          "Database",
          "Methodologies",
          "All",
          "others",
        ].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex  p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="app__skills-container">
        {works.map((work, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="skills-item app_flex"
            key={work.name + index}
          >
            <p className="skills-name">{work.name}</p>
            <img className="skills-img" src={work.imgUrl} alt="img" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
