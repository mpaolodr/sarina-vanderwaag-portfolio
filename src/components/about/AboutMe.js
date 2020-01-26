import React from "react";

// divider image
import pattern from "../../assets/about/Pattern.svg";
import pineapple from "../../assets/about/Pineapple.svg";

// icons
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const AboutMe = () => {
  return (
    <section className="aboutme-container">
      <div className="aboutme-content about-indented-container">
        <div className="title-container">
          <h2>Have more time?</h2>
          <p>2 min read</p>
        </div>
        <div className="details-container">
          <p>
            Design has been a part of my life ever since I could remember. My
            grandfather was an illustrator for academic research books and my
            mother was a painter but she didn't have a typical canvas frame to
            work on. She painted on clothes and created scenes of tropical
            botany and aves(a.k.a avian dinosaurs, a.k.a birds). Her work was
            bursting with color, texture, and light. I adored her work and
            proudly wore the masterpieces.
          </p>

          <p>
            As a kid, my bedroom was scattered with paint brushes, coloring
            pencils, and charcoal. In fact, I can't recall a time in my life
            when I did not have an easel to create beautiful things on. As I got
            older, I also dabbed in jewelry making and fashion design. However,
            my interest wasn't just limited to conventional design. I was
            attracted to anything that could be made beautiful-plating food for
            our large family dinners for instance.
          </p>
        </div>
      </div>
      <div className="pattern-container">
        <img src={pattern} alt="pattern" />
      </div>

      <div className="aboutme-content-continuation about-indented-container">
        <p>
          I went to art school and got a degree in Interior Design. I worked as
          an interior designer for 5 years in Miami before moving to the Bay
          Area to further my career.
        </p>

        <p>
          Living in San Francisco transformed me into a bold and fearless
          designer. I was no longer afraid of making mistakes and began to
          embrace them. At the same time, I started making connections with some
          of the most intelligent people I have ever known, and through them, I
          began to see how technology could be a force for positive change. In
          technology, I also saw an avenue for impacting potentially millions of
          users.
        </p>

        <figure className="pineapple-container">
          <img src={pineapple} alt="pineapple" />
        </figure>

        <p>
          I would join my friends at UX design talks and meetups, where we would
          discuss the similarities between interior and UX design. The overlap
          was so undeniable that I developed a huge interest in analyzing and
          critiquing existing UX/UI designs.
        </p>

        <p>
          I love curating seamless experiences for my users - whether this be in
          a 3D space using furniture, color, and light, or in 2D using
          foreground, background, pattern, and proximity. The potential to do
          this at scale is what really attracts me to UX design.
        </p>

        <div className="about-social-links">
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
    </section>
  );
};

export default AboutMe;
