import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import cycle from "../../assets/Cycle.png";
import { Link } from "react-router";

const ChooseYourStory = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section
      ref={ref}
      className="relative bg-linear-to-r from-primary to-secondary text-lightBg py-16 px-6 overflow-hidden"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text */}
        <motion.div
          className="text-left md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-accent text-white text-xs px-3 py-1 rounded-full font-body mb-4 inline-block">
            Consistent Progress
          </span>

          <h2 className="text-4xl font-heading font-bold mb-4 text-white">
            Rise, Track & Improve
          </h2>

          <p className="text-lg font-body mb-6 text-white">
            Turn small steps into lasting change through daily tracking and
            mindful improvement.
          </p>

          <Link
            to="/public-habit"
            className="inline-block bg-linear-to-r from-primary to-accent text-white py-3 px-6 rounded-full border border-white hover:bg-white hover:text-primary transition-all duration-300 font-medium"
          >
            Explore Habits
          </Link>
        </motion.div>

        {/* Image */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={cycle}
            alt="Rise, Track & Improve"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ChooseYourStory;
