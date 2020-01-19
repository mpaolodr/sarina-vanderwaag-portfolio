import React from "react";

import coffeeImg from "../../assets/homepage/coffee.svg";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h2 className="footer-title">Reach Out!</h2>
        <p className="footer-desc">
          If you're curious about me and my approach to design, please feel free
          to reach out
        </p>

        <div className="social-links">
          <button>
            <FontAwesomeIcon icon={faTwitter} />
          </button>
          <button>
            <FontAwesomeIcon icon={faLinkedin} />
          </button>
          <button>
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
        </div>
      </div>

      <figure>
        <img src={coffeeImg} alt="" />
      </figure>
    </footer>
  );
};

export default Footer;
