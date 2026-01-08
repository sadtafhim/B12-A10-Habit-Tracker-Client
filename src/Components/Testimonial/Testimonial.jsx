import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Ayesha Rahman",
        role: "University Student",
        feedback:
            "Building habits daily helped me regain focus and reduce anxiety. The simplicity keeps me consistent without feeling overwhelmed.",
    },
    {
        name: "Tanvir Ahmed",
        role: "Software Engineer",
        feedback:
            "I’ve tried many productivity apps, but this one actually sticks. The streak system quietly pushes you to show up every day.",
    },
    {
        name: "Nusrat Jahan",
        role: "Content Creator",
        feedback:
            "The clean design and daily tracking changed how I approach self-improvement. Progress feels achievable instead of exhausting.",
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

const TestimonialsSection = () => {
    return (
        <div>
            {/* Header */}
            <div
                className="w-full h-24 flex items-center justify-center shadow-sm mt-20"
                style={{ background: "#2F4C7A" }}
            >
                <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
                    What Our Users Say
                </h1>
            </div>

            {/* Content */}
            <section className="py-16 px-6" style={{ background: "#F8F9FC" }}>
                <div className="max-w-5xl mx-auto text-center">
                    <p
                        className="max-w-2xl mx-auto mb-14 text-lg leading-relaxed"
                        style={{ color: "#1D1D1F", opacity: 0.85 }}
                    >
                        Real stories from people who turned small daily actions into
                        meaningful, lasting change.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((item, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }}
                                variants={cardVariants}
                                className="rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border flex flex-col gap-6 text-left"
                                style={{
                                    background: "#FFFFFF",
                                    borderColor: "#9EC9FF",
                                }}
                            >
                                <FaQuoteLeft
                                    className="text-3xl"
                                    style={{ color: "#FF785A" }}
                                />

                                <p
                                    className="text-base leading-relaxed"
                                    style={{ color: "#1D1D1F", opacity: 0.85 }}
                                >
                                    {item.feedback}
                                </p>

                                <div className="flex items-center gap-3 mt-auto">
                                    <div>
                                        <h4
                                            className="text-lg font-semibold"
                                            style={{ color: "#1D1D1F" }}
                                        >
                                            {item.name}
                                        </h4>
                                        <p
                                            className="text-sm"
                                            style={{ color: "#1D1D1F", opacity: 0.65 }}
                                        >
                                            {item.role}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className="text-sm"
                                            style={{ color: "#FF785A" }}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TestimonialsSection;
