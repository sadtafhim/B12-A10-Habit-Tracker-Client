import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { TrendingUp } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

import carousel1 from "../../assets/carousel-1.jpg";
import carousel2 from "../../assets/carousel-2.jpg";
import carousel3 from "../../assets/carousel-3.jpg";
import { Link } from "react-router";

const slides = [
  {
    id: 1,
    image: carousel1,
    subtitle: "Next-Gen Habit Builder",
    title: "Unlock Your Potential",
    text: "Track, grow and master your habits with guided encouragement and consistency.",
  },
  {
    id: 2,
    image: carousel2,
    subtitle: "Grow Every Day",
    title: "Build Healthy Habits",
    text: "Stay motivated with visual progress and community-driven goals to help you grow daily.",
  },
  {
    id: 3,
    image: carousel3,
    subtitle: "Consistent Progress",
    title: "Rise, Track & Improve",
    text: "Turn small steps into lasting change through daily tracking and mindful improvement.",
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <section className="relative font-sans overflow-hidden">
        <Swiper
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full h-[90vh] md:h-screen"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div
                className="relative w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-linear-to-r from-primary/70 to-accent/60"></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16 lg:px-24">
                  {index === activeIndex && (
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="max-w-3xl bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/20 shadow-2xl text-white space-y-6"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-linear-to-r from-primary/80 to-accent/80 border border-white/20 shadow"
                      >
                        <TrendingUp className="w-4 h-4" />
                        <span className="font-semibold tracking-wide text-sm">
                          {slide.subtitle}
                        </span>
                        <div className="ml-3 flex">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                          <div className="w-2 h-2 bg-green-400 rounded-full ml-1"></div>
                        </div>
                      </motion.div>

                      <motion.h1
                        className="text-4xl md:text-5xl font-bold leading-tight tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                      >
                        <Typewriter
                          words={[slide.title]}
                          loop={false}
                          cursor
                          cursorStyle="|"
                          typeSpeed={90}
                          deleteSpeed={40}
                          delaySpeed={1800}
                        />
                      </motion.h1>

                      <motion.p
                        className="text-white/90 text-lg md:text-xl font-light max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                      >
                        {slide.text}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="mt-6"
                      >
                        <Link
                          to="/public-habit"
                          className="inline-flex items-center gap-2 py-3 px-6 rounded-full border border-white text-white hover:bg-white hover:text-primary transition-all duration-300 font-medium"
                        >
                          Explore Habits
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
          {slides.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-linear-to-r from-primary to-accent scale-125 shadow-lg"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Slider;
