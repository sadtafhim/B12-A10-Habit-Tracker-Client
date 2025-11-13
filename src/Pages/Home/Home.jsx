import React from "react";
import Slider from "../../Components/Slider/Slider";
import WhyJoinUs from "../../Components/WhyJoinUs/WhyJoinUs";
import ChooseYourStory from "../../Components/ChooseYourStory/ChooseYourStory";
import FeedbackSection from "../../Components/FeedbackSection/FeedbackSection";
import NewestHabits from "../../Components/NewestHabits/NewestHabits";

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
        <NewestHabits></NewestHabits>
      </div>
      <div>
        <FeedbackSection></FeedbackSection>
      </div>
    </div>
  );
};

export default Home;
