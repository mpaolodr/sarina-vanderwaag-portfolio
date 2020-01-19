import React from "react";

import phoneImg from "../../assets/homepage/gigapets.svg";

const Gigapet = () => {
  return (
    <section className="gigapet-container">
      <div className="blue-bg">
        <div className="gigapet-content">
          <h2 className="proj-title">
            Gigapet <br />
            <span className="proj-details">Helping kids eat better</span>
          </h2>
          <p className="proj-desc">
            Parents are always looking for new ways to encourage their kids to
            eat better. With Gigapet, children can watch their pet flourish or
            wither, depending on the food they eat.
          </p>

          <button>Read More</button>
        </div>

        <figure>
          <img src={phoneImg} alt="app model" />
        </figure>
      </div>
    </section>
  );
};

export default Gigapet;
