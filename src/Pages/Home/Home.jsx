import React from "react";
import Slider from "../../Components/Slider/Slider";
import WhyJoinUs from "../../Components/WhyJoinUs/WhyJoinUs";
import ChooseYourStory from "../../Components/ChooseYourStory/ChooseYourStory";
import FeedbackSection from "../../Components/FeedbackSection/FeedbackSection";
import NewestHabits from "../../Components/NewestHabits/NewestHabits";
import StatisticsSection from "../../Components/StatisticsSection/StatisticsSection";
import HighlightsSection from "../../Components/HighlightsSection/HighlightsSection";
import NewsletterSection from "../../Components/NewsletterSection/NewsletterSection";
import TestimonialsSection from "../../Components/Testimonial/Testimonial";
import FAQSection from "../../Components/FAQ/FAQ";

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
        <StatisticsSection></StatisticsSection>
      </div>
      <div>
        <TestimonialsSection></TestimonialsSection>
      </div>
      <div>
        <ChooseYourStory></ChooseYourStory>
      </div>
      <div>
        <NewestHabits></NewestHabits>
      </div>
      <div>
        <HighlightsSection></HighlightsSection>
      </div>
      <div>
        <FAQSection></FAQSection>
      </div>
      <div>
        <NewsletterSection></NewsletterSection>
      </div>
      <div>
        <FeedbackSection></FeedbackSection>
      </div>
    </div>
  );
};

export default Home;
