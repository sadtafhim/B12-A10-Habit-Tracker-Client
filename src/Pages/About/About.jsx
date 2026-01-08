import React from "react";
import {
    FaBullseye,
    FaRocket,
    FaCheckCircle,
    FaChartLine,
} from "react-icons/fa";

const About = () => {
    return (
        <div className="min-h-screen bg-lightBg px-6 py-16">
            <div className="mb-5 w-full h-24 flex items-center justify-center shadow-sm bg-[#2F4C7A]">
                <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
                    About HabitRise
                </h1>
            </div>
            <div className="max-w-5xl mx-auto">

                <p className="text-textMain text-lg mb-8 font-body">
                    HabitRise is a habit tracking platform designed to help users build
                    consistency, stay motivated, and improve productivity through small
                    daily actions.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary/30">
                        <div className="flex items-center gap-3 mb-3">
                            <FaBullseye className="text-accent text-2xl" />
                            <h2 className="text-2xl font-semibold text-primary">
                                Project Goal
                            </h2>
                        </div>

                        <p className="text-textMain leading-relaxed">
                            The goal of HabitRise is to help users create, track, and maintain
                            daily habits while building streaks that encourage long-term
                            consistency. The platform focuses on simplicity and motivation.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-secondary/30">
                        <div className="flex items-center gap-3 mb-3">
                            <FaRocket className="text-accent text-2xl" />
                            <h2 className="text-2xl font-semibold text-primary">
                                Features
                            </h2>
                        </div>

                        <ul className="space-y-2 text-textMain">
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-primary" />
                                Create and manage daily habits
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-primary" />
                                Track progress with streaks
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-primary" />
                                Browse public habits
                            </li>
                            <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-primary" />
                                Personalized dashboard
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-secondary/30">
                    <div className="flex items-center gap-3 mb-3">
                        <FaChartLine className="text-accent text-2xl" />
                        <h2 className="text-2xl font-semibold text-primary">
                            Habit Tracker Explanation
                        </h2>
                    </div>

                    <p className="text-textMain leading-relaxed">
                        HabitRise helps users visualize their progress and stay consistent
                        through daily tracking and streak building. The system encourages
                        discipline, motivation, and long-term self-improvement using a
                        clean and distraction-free interface.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
