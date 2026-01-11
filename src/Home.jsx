import React from "react";
import MovingCarousel from "./MovingCarousel";
import HomeAboutUs from "./HomeAboutUs";
import HomeServices from "./HomeServices";
import HomeFeatures from "./HomeFeatueres";
import Quote from "./Quote";

const Home = () => {
    
  return (
    <div>
        <MovingCarousel/>
        <HomeAboutUs/>
        <HomeServices/>
        <HomeFeatures/>
        <Quote/>
    </div>
  )}

export default Home;