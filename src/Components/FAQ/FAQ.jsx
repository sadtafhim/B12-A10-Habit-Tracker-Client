import React from "react";
import { motion } from "framer-motion";
import { FaQuestionCircle } from "react-icons/fa";

const faqs = [
    {
        question: "Is this platform free to use?",
        answer:
            "Yes. You can start building and tracking habits for free. Some advanced features may be added later, but core habit tracking will remain accessible.",
    },
    {
        question: "Do I need to use it every day?",
        answer:
            "Daily check-ins help build consistency, but the platform is flexible. Missing a day won’t reset your progress mindset—only your streak.",
    },
    {
        question: "How is my data handled?",
        answer:
            "Your data is private and securely stored. We do not sell or share personal information with third parties.",
    },
    {
        question: "Can I stop or delete my account anytime?",
        answer:
            "Yes. You’re always in control. You can pause, stop, or delete your account whenever you choose.",
    },
    {
        question: "Who is this platform best suited for?",
        answer:
            "Anyone who wants to build consistent habits—students, professionals, creators, or anyone focused on personal growth.",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.12,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

const FAQSection = () => {
    return (
        <div>
            {/* Header */}
            <div
                className="w-full h-24 flex items-center justify-center shadow-sm mt-20"
                style={{ background: "#2F4C7A" }}
            >
                <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
                    Frequently Asked Questions
                </h1>
            </div>

            {/* Content */}
            <section className="py-16 px-6" style={{ background: "#F8F9FC" }}>
                <div className="max-w-5xl mx-auto text-center">
                    <p
                        className="max-w-2xl mx-auto mb-14 text-lg leading-relaxed"
                        style={{ color: "#1D1D1F", opacity: 0.85 }}
                    >
                        Clear answers to common questions—so you can focus on building better
                        habits with confidence.
                    </p>

                    <div className="flex flex-col gap-6 max-w-3xl mx-auto">
                        {faqs.map((item, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }}
                                variants={cardVariants}
                                className="rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border text-left"
                                style={{
                                    background: "#FFFFFF",
                                    borderColor: "#9EC9FF",
                                }}
                            >
                                <div className="flex items-start gap-4">
                                    <FaQuestionCircle
                                        className="text-2xl mt-1"
                                        style={{ color: "#FF785A" }}
                                    />

                                    <div>
                                        <h3
                                            className="text-xl font-semibold mb-2"
                                            style={{ color: "#1D1D1F" }}
                                        >
                                            {item.question}
                                        </h3>

                                        <p
                                            className="text-base leading-relaxed"
                                            style={{ color: "#1D1D1F", opacity: 0.8 }}
                                        >
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQSection;
