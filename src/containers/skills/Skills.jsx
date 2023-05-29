import { Cards } from "../../components/index.js";
import html from "../../assets/html.png";
import javaS from "../../assets/javaS.png";
import git from "../../assets/git.png";
import css3 from "../../assets/css3.png";
import arduino from "../../assets/arduinoSmall.png";
import mongodb from "../../assets/mongodb.png";
import java from "../../assets/java.png";
import cplusplus from "../../assets/cplusplus.png";
import react from "../../assets/react.png";
import python from "../../assets/python.png";

import "./skills.css";
const data = [
  { imgsrc: html, title: "HTML" },
  { imgsrc: javaS, title: "JavaScript" },
  { imgsrc: css3, title: "CSS3" },
  { imgsrc: react, title: "ReactJS" },
  { imgsrc: python, title: "Python" },
  { imgsrc: git, title: "Git" },
  { imgsrc: arduino, title: "Arduino" },
  { imgsrc: mongodb, title: "MongoDB" },
  { imgsrc: java, title: "Java" },
  { imgsrc: cplusplus, title: "C++" },
];

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="skills__content">
        <div className="skills__content-title">
          <h1>My Skills</h1>
        </div>
        <div className="skills__content-tech">
          <div className=" skills__content-tech__card ">
            <div className="row">
              {data.map((item, index) => (
                <Cards key={index} imgsrc={item.imgsrc} title={item.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
