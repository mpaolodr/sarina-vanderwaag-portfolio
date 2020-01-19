import React from "react";

import img from "../../assets/homepage/office.svg";

const HeroArea = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div>
          <h1 className="name">
            Sarina <br /> <span className="fam-name">van der Waag</span>
          </h1>
          <h3 className="details">UX Designer</h3>
        </div>
        <div>
          <p className="desc">
            I create thoughtful experiences by <br />
            studying my users and their needs
          </p>
        </div>
        <button>Contact Me</button>
      </div>
      <figure>
        <img src={img} alt="" />
      </figure>
    </section>
  );
};

export default HeroArea;
