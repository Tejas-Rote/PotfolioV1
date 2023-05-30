import "./header.css";
import icon from "../../assets/icon.png";
import Tejas from "../../assets/Tejas_Photo.jpg";
import b2 from "../../assets/blobanimation2.svg";
import redirect from "../../assets/redirect.png";
const Header = () => {
  return (
    <div className="header" id="aboutme">
      <div className="header__content-top">
        <div className="header__content-left">
          <div className="header__info">
            <div className="header__info-title">
              <h1>Tejas Rote </h1>
            </div>
            <div className="header__info-subtitle">
              <h2>
                Hi 👋, I'm Tejas Rote
              </h2>
            </div>
            <div className="header__info-text">
              <p>
                🌱 I’m currently learning Redux, ExpressJS
                <br/>
                💬 Ask me about ReactJs, HTML, CSS, JS 
                <br/>
                📫 How to reach me tejas292002@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="header__content-right">
          <div className="header__image">
            <div className="parent"></div>
            <div id="blob">
              <div className="mask1 b1">
                <img src={Tejas} className="tejas"  />
              </div>
              <img src={b2} alt="blob" className="b1" />
            </div>
          </div>
        </div>
      </div>
      <div className="header__content-bottom">
        <div className="header__content-bottom-info">
          <div className="header__content-bottom-icon">
            <img src={icon} alt="icon" />
          </div>
          <div className="header__content-bottom-text">
            <p>
              A few years ago, I became interested in developing websites and
              interfaces. Since then, I have been steadily improving my skills.
            </p>
          </div>
          <div className="header__content-bottom-btn">
            <a href="https://drive.google.com/file/d/1ocaZK2CTB2xL_HPhd9f6LqhyejDIMF_e/view?usp=share_link">
              Resume
              <span>
                <img src={redirect} alt="redirect" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
