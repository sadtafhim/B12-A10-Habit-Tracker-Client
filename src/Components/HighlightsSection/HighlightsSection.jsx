import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaTasks, FaCalendarCheck, FaLock } from "react-icons/fa";

const highlights = [
    {
        icon: <FaBolt />,
        title: "Simple & Fast Setup",
        text: "Create and start tracking habits in seconds with a clean, distraction-free interface.",
        color: "#2F4C7A",
    },
    {
        icon: <FaTasks />,
        title: "Daily Progress Tracking",
        text: "Visual indicators help you stay accountable and motivated throughout your day.",
        color: "#FF785A",
    },
    {
        icon: <FaCalendarCheck />,
        title: "Streak-Based Motivation",
        text: "Build momentum through streaks that reinforce consistency and long-term discipline.",
        color: "#2F4C7A",
    },
    {
        icon: <FaLock />,
        title: "Private & Secure",
        text: "Your habits and personal progress stay protected with strong data security practices.",
        color: "#FF785A",
    },
];

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

const HighlightsSection = () => {
    return (
        <div>
            {/* Header */}
            <div
                className="w-full h-24 flex items-center justify-center shadow-sm mt-20"
                style={{ background: "#2F4C7A" }}
            >
                <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
                    Platform Highlights
                </h1>
            </div>

            {/* Content */}
            <section className="py-16 px-6" style={{ background: "#F8F9FC" }}>
                <div className="max-w-5xl mx-auto text-center">
                    <p
                        className="max-w-2xl mx-auto mb-14 text-lg leading-relaxed"
                        style={{ color: "#1D1D1F", opacity: 0.85 }}
                    >
                        Designed to remove friction and keep you consistent, our core
                        features focus on clarity, motivation, and long-term habit success.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {highlights.map((item, index) => (
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

export default HighlightsSection;
