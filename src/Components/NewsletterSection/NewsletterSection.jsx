import React from "react";
import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";

const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const NewsletterSection = () => {
    return (
        <div>
            <div
                className="w-full h-24 flex items-center justify-center shadow-sm mt-20"
                style={{ background: "#2F4C7A" }}
            >
                <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
                    Stay in the Loop
                </h1>
            </div>

            {/* Content */}
            <section className="py-16 px-6" style={{ background: "#F8F9FC" }}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4 }}
                    variants={containerVariants}
                    className="max-w-3xl mx-auto text-center"
                >
                    <div
                        className="rounded-3xl p-10 shadow-md border flex flex-col items-center gap-6"
                        style={{
                            background: "#FFFFFF",
                            borderColor: "#9EC9FF",
                        }}
                    >
                        <div className="text-5xl" style={{ color: "#2F4C7A" }}>
                            <FaEnvelopeOpenText />
                        </div>

                        <h2
                            className="text-3xl font-semibold"
                            style={{ color: "#1D1D1F" }}
                        >
                            Subscribe to Our Newsletter
                        </h2>

                        <p
                            className="max-w-xl text-base leading-relaxed"
                            style={{ color: "#1D1D1F", opacity: 0.8 }}
                        >
                            Get habit-building tips, product updates, and motivation delivered
                            straight to your inbox. No spam. Unsubscribe anytime.
                        </p>

                        <form className="w-full max-w-md flex flex-col sm:flex-row gap-4 mt-4">
                            <input
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="flex-1 px-5 py-3 rounded-full border focus:outline-none focus:ring-2"
                                style={{
                                    borderColor: "#9EC9FF",
                                }}
                            />

                            <button
                                type="submit"
                                className="px-8 py-3 rounded-full font-semibold text-white bg-linear-to-r from-(--color-primary) to-(--color-accent) hover:opacity-90 transition-all duration-300 shadow-md"
                            >
                                Subscribe
                            </button>
                        </form>

                        <p
                            className="text-sm mt-2"
                            style={{ color: "#1D1D1F", opacity: 0.6 }}
                        >
                            We respect your privacy.
                        </p>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default NewsletterSection;
