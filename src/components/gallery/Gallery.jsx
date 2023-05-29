import React from "react";
import "./gallery.css";
import redirect from "../../assets/redirect.png";
import github from "../../assets/github.png";
import nft from "../../assets/nft.png";

const Gallery = (props) => {
  return (
    <div className="gallery">
      <div className="gallery-container">
        <div className="gallery-container-image">
          <img src={props.imgsrc} alt="image" className="gImage" />
        </div>
        <div className="gallery-container-content">
          <div className="gallery-container-content-heading">
            <h1>{props.name}</h1>
          </div>
          <div className="hr" />

          <div className="gallery-container-content-info">
            <p>{props.info}</p>
          </div>
          <div className="links"> 
            <div className="code">
              <div className="code-text">
                <a href={props.code}>Code</a>
              </div>
              <div className="code-logo">
                <img src={github} alt="github" />
              </div>
            </div>
            <div className="live">
              <div className="live-text">
                <a href={props.live}>live</a>
              </div>
              <div className="live-logo">
                <img src={redirect} alt="redirect" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
