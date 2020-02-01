import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//images
import dog1 from "../../assets/carousel/dog1.jpg";
import dog2 from "../../assets/carousel/dog2.jpg";
import dog3 from "../../assets/carousel/dog3.jpg";
import dog4 from "../../assets/carousel/dog4.jpg";
import dog5 from "../../assets/carousel/dog5.jpg";
import dog6 from "../../assets/carousel/dog6.jpg";
import dog7 from "../../assets/carousel/dog7.jpg";
import dog8 from "../../assets/carousel/dog8.jpg";

const Profile = () => {
  //for carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <section className="profile-container">
      <div className="profile-content about-indented-container">
        <h1 className="profile-title">Hi, I'm Sarina</h1>
        <p className="profile-desc">
          UX designer, sandwich afficionado and part dolphin. I create
          thoughtful experiences by studying my users and their needs
        </p>
      </div>

      <Carousel
        swipeable={true}
        infinite={true}
        showDots={true}
        ssr={true}
        responsive={responsive}
        autoplay={true}
        autoPlaySpeed={1000}
        customTransitions="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
        dotListClass="dots"
      >
        <figure className="img-container">
          <img src={dog1} alt="" />
        </figure>
        <figure className="img-container">
          <img src={dog2} alt="" />
        </figure>
        <figure className="img-container">
          <img src={dog3} alt="" />
        </figure>
        <figure className="img-container">
          <img src={dog4} alt="" />
        </figure>
        <figure className="img-container">
          <img src={dog5} alt="" />
        </figure>
        <figure className="img-container">
          <img src={dog6} alt="" />
        </figure>
        <figure className="img-container">
          <img src={dog7} alt="" />
        </figure>
        <figure className="img-container">
          <img src={dog8} alt="" />
        </figure>
      </Carousel>
    </section>
  );
};

export default Profile;
