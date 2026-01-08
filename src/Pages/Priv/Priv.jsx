import React from "react";
import {
    FaUserLock,
    FaDatabase,
    FaShieldAlt,
    FaInfoCircle,
} from "react-icons/fa";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-lightBg px-6 py-16">
            <div className="max-w-4xl mx-auto">

                <div className="flex items-center gap-3 mb-6">
                    <FaUserLock className="text-accent text-3xl" />
                    <h1 className="text-4xl font-bold text-primary font-heading">
                        Privacy Policy
                    </h1>
                </div>

                <p className="text-textMain mb-10 font-body">
                    This Privacy Policy explains how HabitRise collects, uses, and protects
                    your information when you use our habit tracking platform.
                </p>

                <section className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-secondary/30">
                    <div className="flex items-center gap-2 mb-2">
                        <FaDatabase className="text-primary" />
                        <h2 className="text-2xl font-semibold text-primary">
                            1. Information We Collect
                        </h2>
                    </div>
                    <p className="text-textMain leading-relaxed">
                        HabitRise may collect basic account information such as your name,
                        email address, and habit-related data you choose to create or track
                        within the platform.
                    </p>
                </section>

                <section className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-secondary/30">
                    <div className="flex items-center gap-2 mb-2">
                        <FaInfoCircle className="text-primary" />
                        <h2 className="text-2xl font-semibold text-primary">
                            2. How We Use Your Information
                        </h2>
                    </div>
                    <p className="text-textMain leading-relaxed">
                        Your information is used solely to provide habit tracking features,
                        improve user experience, and maintain account functionality. We do
                        not sell or share personal data with third parties.
                    </p>
                </section>

                <section className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-secondary/30">
                    <div className="flex items-center gap-2 mb-2">
                        <FaShieldAlt className="text-primary" />
                        <h2 className="text-2xl font-semibold text-primary">
                            3. Data Security
                        </h2>
                    </div>
                    <p className="text-textMain leading-relaxed">
                        We take reasonable measures to protect your data from unauthorized
                        access. However, no online system can be guaranteed to be completely
                        secure, and users share information at their own discretion.
                    </p>
                </section>

                <section className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-secondary/30">
                    <h2 className="text-2xl font-semibold text-primary mb-2">
                        4. User Control & Responsibility
                    </h2>
                    <p className="text-textMain leading-relaxed">
                        Users are responsible for maintaining the confidentiality of their
                        login credentials. You may update or delete your habit data through
                        your account at any time.
                    </p>
                </section>

                <section className="bg-white p-6 rounded-xl shadow-sm border border-secondary/30">
                    <h2 className="text-2xl font-semibold text-primary mb-2">
                        5. Policy Updates
                    </h2>
                    <p className="text-textMain leading-relaxed">
                        This Privacy Policy may be updated occasionally to reflect changes
                        in the platform. Continued use of HabitRise indicates acceptance of
                        the updated policy.
                    </p>
                </section>

                <p className="text-sm text-gray-500 mt-10 font-body">
                    Last updated: {new Date().getFullYear()}
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
