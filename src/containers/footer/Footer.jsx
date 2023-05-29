import "./footer.css";
import gfg from "../../assets/gfg.png";
import twitter from "../../assets/twitter.png";
import linked from "../../assets/linked.png";
import gmail from "../../assets/gmail.png";

import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer" id="contacts">
      <div className="footer__content">
        <div className="footer__content-left">
          <div className="footer__content-left-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="footer__content-left-text">
            <p>
              If you liked my work and you need me, I am ready to talk to you.
            </p>
          </div>
        </div>
        <div className="footer__content-contacts">
          <div className="footer__content-contacts-title">
            <h1>Contacts</h1>
          </div>
          <div className="footer__content-contacts-links_container">
            <div className="col">
              <div className="link">
                <div className="footer__content-contacts-link_container-logo">
                  <img src={gmail} alt="gmail" />
                </div>
                <div className="footer__content-contacts-links_container-name">
                  <p>tejas292002@gmail.com</p>
                </div>
              </div>
              <div className="link">
                <div className="footer__content-contacts-link_container-logo">
                  <img src={linked} alt="linked" />
                </div>
                <div className="footer__content-contacts-links_container-name">
                  <a href="https://twitter.com/rote_tejas">Tejas Rote</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="link">
                <div className="footer__content-contacts-link_container-logo">
                  <img src={gfg} alt="gfg" />
                </div>
                <div className="footer__content-contacts-links_container-name">
                  {/* <p>tejas292002</p> */}
                  <a href="https://auth.geeksforgeeks.org/user/tejas292002">tejas292002</a>
                </div>
              </div>

              <div className="link">
                <div className="footer__content-contacts-link_container-logo">
                  <img src={twitter} alt="twitter" />
                </div>
                <div className="footer__content-contacts-links_container-name">
                  {/* <p>rote_tejas</p> */}
                  <a href="https://twitter.com/rote_tejas">@rote_tejas</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
