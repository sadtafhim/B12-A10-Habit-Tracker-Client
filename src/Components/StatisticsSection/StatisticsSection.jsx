import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaFire, FaCheckCircle, FaClock } from "react-icons/fa";

const stats = [
    {
        icon: <FaUsers />,
        value: "50K+",
        label: "Active Users",
        color: "#2F4C7A",
    },
    {
        icon: <FaFire />,
        value: "1M+",
        label: "Habits Completed",
        color: "#FF785A",
    },
    {
        icon: <FaCheckCircle />,
        value: "92%",
        label: "Consistency Rate",
        color: "#2F4C7A",
    },
    {
        icon: <FaClock />,
        value: "30 Days",
        label: "Average Streak",
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

const StatisticsSection = () => {
    return (
        <div>
            {/* Header */}
            <div
                className="w-full h-24 flex items-center justify-center shadow-sm mt-20"
                style={{ background: "#2F4C7A" }}
            >
                <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
                    Our Impact So Far
                </h1>
            </div>

            {/* Content */}
            <section className="py-16 px-6" style={{ background: "#F8F9FC" }}>
                <div className="max-w-5xl mx-auto text-center">
                    <p
                        className="max-w-2xl mx-auto mb-14 text-lg leading-relaxed"
                        style={{ color: "#1D1D1F", opacity: 0.85 }}
                    >
                        Thousands of people are building better routines every day.
                        These numbers reflect real progress driven by small, consistent actions.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {stats.map((item, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }}
                                variants={cardVariants}
                                className="rounded-3xl p-10 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border flex flex-col items-center gap-4"
                                style={{
                                    background: "#FFFFFF",
                                    borderColor: "#9EC9FF",
                                }}
                            >
                                <div className="text-5xl" style={{ color: item.color }}>
                                    {item.icon}
                                </div>

                                <h3
                                    className="text-4xl font-bold"
                                    style={{ color: "#1D1D1F" }}
                                >
                                    {item.value}
                                </h3>

                                <p
                                    className="text-base font-medium tracking-wide"
                                    style={{ color: "#1D1D1F", opacity: 0.75 }}
                                >
                                    {item.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StatisticsSection;
