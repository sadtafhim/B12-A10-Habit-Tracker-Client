import React from "react";
import { motion } from "framer-motion";
import {
  FaClipboardList,
  FaCheckCircle,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

const features = [
  {
    icon: <FaClipboardList />,
    title: "Easy Habit Management",
    text: "Create, schedule and track habits with simple controls designed for daily use.",
    color: "#2F4C7A",
  },
  {
    icon: <FaCheckCircle />,
    title: "Track Progress & Streaks",
    text: "Stay motivated with streak indicators and visual progress history.",
    color: "#FF785A",
  },
  {
    icon: <FaChartLine />,
    title: "Insights & Analytics",
    text: "View your completion trends and reflect on your consistency.",
    color: "#2F4C7A",
  },
  {
    icon: <FaUsers />,
    title: "Community & Sharing",
    text: "Browse and share public habits that inspire personal growth.",
    color: "#FF785A",
  },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const WhyJoinUs = () => {
  return (
    <div>
      <div
        className="w-full h-24 flex items-center justify-center shadow-sm mt-20"
        style={{ background: "#2F4C7A" }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
          Why Join HabitRise
        </h1>
      </div>

      <section className="py-16 px-6" style={{ background: "#F8F9FC" }}>
        <div className="max-w-5xl mx-auto text-center">
          <p
            className="max-w-2xl mx-auto mb-14 text-lg leading-relaxed"
            style={{ color: "#1D1D1F", opacity: 0.85 }}
          >
            HabitRise helps you build consistent routines, track growth, and
            stay motivated with clarity and purpose — all in one smooth,
            distraction-free platform.
          </p>

          <div className="flex flex-col gap-8 max-w-3xl mx-auto">
            {features.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={cardVariants}
                className="rounded-3xl p-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border flex flex-col items-center text-center gap-4"
                style={{
                  background: "#FFFFFF",
                  borderColor: "#9EC9FF",
                }}
              >
                <div className="text-5xl" style={{ color: item.color }}>
                  {item.icon}
                </div>

                <h3
                  className="text-2xl font-semibold"
                  style={{ color: "#1D1D1F" }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#1D1D1F", opacity: 0.8 }}
                >
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyJoinUs;
