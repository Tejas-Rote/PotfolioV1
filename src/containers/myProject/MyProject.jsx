// import React from 'react'
import { Gallery, Work } from "../../components";
import "./myProject.css";
import NFT from "../../assets/nft-alt.png";
import gpt3 from "../../assets/gpt3-alt.png";
import uav from "../../assets/teamuav-alt.png";
import order from "../../assets/OrderSummary-alt.png";
import faq from "../../assets/faq.png";
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
            name={"GPT-3"}
            imgsrc={gpt3}
            stack={"MERN "}
            info={
              "Discover GPT-3 and OpenAI on our website. Stay updated with the latest news, breakthroughs, and applications of this powerful language model. Explore the world of AI and its impact with us."
            }
            code={"https://github.com/Tejas-Rote/React-Projects"}
            live={"https://www.teamuav.in"}
            flexStyle={"projectCard"}
          />

          <Work
            name={"Team UAV"}
            imgsrc={uav}
            stack={"MERN "}
            info={
              "Introducing Team UAV! We are a dedicated college team passionate about unmanned aerial vehicles (UAVs). Visit our website to get to know us better. Learn about our team members, the various departments within our team, and our past achievements."
            }
            code={"https://github.com/TeamUAV/Website"}
            live={"links2"}
            flexStyle={"projectCardR"}
          />
          <Work
            name={"FAQ Accordian"}
            imgsrc={faq}
            stack={"HTML CSS & JS"}
            info={
              "Experience our FAQ accordion app sample on our website. Explore the intuitive interface, expand and collapse sections effortlessly, and discover the benefits of this user-friendly design for presenting frequently asked questions. "
            }
            code={"https://github.com/TeamUAV/Website"}
            live={"https://www.teamuav.in"}
            flexStyle={"projectCard"}
          />
          <div className="row">
            <Gallery
              name={"NFT Card"}
              imgsrc={NFT}
              info={"NFT Preview Card "}
              code={"https://github.com/Tejas-Rote/React-Projects"}
              live={"links2"}
            />
            <Gallery
              name={"Order Card"}
              imgsrc={order}
              info={"Order Summary Card "}
              code={"https://github.com/Tejas-Rote/React-Projects"}
              live={"links2"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
