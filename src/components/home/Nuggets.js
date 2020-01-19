import React from "react";

import nuggetsImg from "../../assets/homepage/nuggets.svg";

const Nuggets = () => {
  return (
    <section className="nuggets-container">
      <div className="purple-bg">
        <div className="nuggets-content">
          <h2 className="proj-title">
            Nuggets <br />
            <span className="proj-details">
              Helping users remember what's <br /> important to them
            </span>
          </h2>
          <p className="proj-desc">
            Spaced repetition has been scientifically proven to improve memory
            retention. Nuggets helps users retain more, for longer
          </p>

          <button>Coming Soon</button>
        </div>

        <figure>
          <img src={nuggetsImg} alt="app model" />
        </figure>
      </div>
    </section>
  );
};

export default Nuggets;
