import React from "react";
import Slider from "../../Components/Slider/Slider";
import WhyJoinUs from "../../Components/WhyJoinUs/WhyJoinUs";
import ChooseYourStory from "../../Components/ChooseYourStory/ChooseYourStory";
import FeedbackSection from "../../Components/FeedbackSection/FeedbackSection";

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
      <div>
        <FeedbackSection></FeedbackSection>
      </div>
    </div>
  );
};

export default Home;
