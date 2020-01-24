import React from "react";

const Tldr = () => {
  return (
    <section className="tldr-container">
      <div className="tldr-content">
        <h2>tl;dr</h2>

        <div className="tldr-statements">
          {/* first row */}
          <div className="row first">
            <p className="first-statement">I make amazing nail art</p>
            <p className="second-statement">I make bomb sandwiches</p>
            <p className="third-statement">
              I cut my own hair (you may have noticed)
            </p>
          </div>

          {/* second row */}
          <div className="row second">
            <p className="first-statement">
              The sheer beauty of the Itmad-ud-Daula in Agra, India brought me
              to tears (literally)
            </p>

            <div className="flex-container">
              <p className="second-statement">I am a really good swimmer</p>
              <p className="third-statement">I'm really a dolphin</p>
            </div>
          </div>

          {/* third row */}
          <div className="row third">
            <p>I am Dutch Antillean</p>
          </div>

          {/* fourth row */}
          <div className="row fourth">
            <p className="first-statement">I'm sort of a chai connoisseur</p>
            <p className="second-statement">
              I really want to(but don't) play the violin and piano because the
              idea of it is amazing, you must admit
            </p>
          </div>

          {/* fifth row */}
          <div className="row last">
            <p className="first-statement">
              My favorite books are The Old Man and the Sea, The Storyteller's
              Secret, The White Tiger, The Curious Incident of the Dog in the
              Night-time, The Five People You Meet in Heaven
            </p>
            <p className="second-statement">I can speak Hindi</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tldr;
