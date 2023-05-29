// import React from 'react'
import { Work } from "../../components";
import "./myProject.css";
import NFT from "../../assets/nft.png";
import gpt from "../../assets/gpt.png"
const MyProject = () => {
  return (
    <div className="projects" id="projects">
      <div className="top">
        <div className="title">
          <h1> Projects </h1>
        </div>
        <div className="subtitle">
          <h2> Each Project is unique !!</h2>
        </div>
      </div>
      <div className="bottom">
        <div className="content">
          <Work
            name={"NFT Preview"}
            imgsrc={NFT}
            stack={"MERN stack"}
            info={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolores veritatis. Culpa voluptatibus autaccusamus, iure repudiandae laboriosam optio obcaecati recusandaedolor mollitia ipsa dolores facilis, possimus incidunt ipsam eaque."
            }
            code={"https://github.com/Tejas-Rote/React-Projects"}
            live={"links2"}
            flexStyle={'projectCard'}
          />
          <Work
            name={"NFT Preview"}
            imgsrc={NFT}
            stack={"MERN stack"}
            info={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolores veritatis. Culpa voluptatibus autaccusamus, iure repudiandae laboriosam optio obcaecati recusandaedolor mollitia ipsa dolores facilis, possimus incidunt ipsam eaque."
            }
            code={"https://github.com/Tejas-Rote/React-Projects"}
            live={"links2"}
            flexStyle={'projectCardR'}

          />
          <Work
            name={"NFT Preview"}
            imgsrc={NFT}
            stack={"MERN stack"}
            info={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolores veritatis. Culpa voluptatibus autaccusamus, iure repudiandae laboriosam optio obcaecati recusandaedolor mollitia ipsa dolores facilis, possimus incidunt ipsam eaque."
            }
            code={"https://github.com/Tejas-Rote/React-Projects"}
            flexStyle={'projectCard'}
          />
          <Work
            name={"NFT Preview"}
            imgsrc={NFT}
            stack={"MERN stack"}
            info={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolores veritatis. Culpa voluptatibus autaccusamus, iure repudiandae laboriosam optio obcaecati recusandaedolor mollitia ipsa dolores facilis, possimus incidunt ipsam eaque."
            }
            code={"https://github.com/Tejas-Rote/React-Projects"}
            live={"links2"}
            flexStyle={'projectCardR'}

          />
          
        </div>
      </div>
    </div>
  );
};

export default MyProject;
