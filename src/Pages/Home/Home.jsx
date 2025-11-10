import React from "react";
import Slider from "../../Components/Slider/Slider";
import WhyJoinUs from "../../Components/WhyJoinUs/WhyJoinUs";
import OurSuccessStories from "../../Components/OurSuccessStories/OurSuccessStories";
import ChooseYourStory from "../../Components/ChooseYourStory/ChooseYourStory";

const Home = () => {
  return (
    <div>
      <div>
        <Slider></Slider>
      </div>
      <div>
        <WhyJoinUs></WhyJoinUs>
      </div>
      <div>
        <ChooseYourStory></ChooseYourStory>
      </div>
    </div>
  );
};

export default Home;
