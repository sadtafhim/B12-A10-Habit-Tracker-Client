import React from "react";
import { motion } from "framer-motion";

const successStoriesData = [
  {
    quote:
      "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela",
    country: "South Africa",
    image: "https://via.placeholder.com/200", // Replace with actual image URL or path
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    country: "United States",
    image: "https://via.placeholder.com/200", // Replace with actual image URL or path
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    country: "United States",
    image: "https://via.placeholder.com/200", // Replace with actual image URL or path
  },
  // Add more stories as needed
];

const OurSuccessStories = () => {
  return (
    <section className="py-12 bg-lightBg">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-heading text-primary mb-4">
          Our Success Stories
        </h2>
        <p className="text-lg font-body text-secondary">
          Timeless insights from great minds to spark your creativity and growth
        </p>
      </div>

      <div className="relative w-full">
        <motion.div
          className="slider-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="carousel w-full">
            {successStoriesData.map((story, index) => (
              <div key={index} className="carousel-item w-full">
                <motion.div
                  className="card bg-white shadow-lg p-8 rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col items-center">
                    <img
                      src={story.image}
                      alt={story.author}
                      className="rounded-full w-32 h-32 mb-4"
                    />
                    <p className="text-xl font-body italic text-center mb-4">
                      "{story.quote}"
                    </p>
                    <h3 className="font-heading text-2xl text-primary mb-1">
                      {story.author}
                    </h3>
                    <p className="text-lg text-secondary">{story.country}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurSuccessStories;
