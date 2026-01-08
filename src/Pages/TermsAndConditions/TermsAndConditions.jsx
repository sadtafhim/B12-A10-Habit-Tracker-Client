import React from "react";
import { FaFileContract, FaUserShield, FaExclamationTriangle } from "react-icons/fa";

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen bg-lightBg px-6 py-16">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                    <FaFileContract className="text-accent text-3xl" />
                    <h1 className="text-4xl font-bold text-primary font-heading">
                        Terms & Conditions
                    </h1>
                </div>

                <p className="text-textMain mb-10 font-body">
                    By accessing or using HabitRise, you agree to be bound by the following
                    terms and conditions. Please read them carefully before using the
                    platform.
                </p>

                <section className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-secondary/30">
                    <div className="flex items-center gap-2 mb-2">
                        <FaUserShield className="text-primary" />
                        <h2 className="text-2xl font-semibold text-primary">
                            1. User Responsibilities
                        </h2>
                    </div>
                    <p className="text-textMain leading-relaxed">
                        Users are responsible for maintaining the accuracy of the
                        information they provide. HabitRise should be used responsibly and
                        only for personal habit tracking and productivity purposes.
                    </p>
                </section>

                <section className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-secondary/30">
                    <div className="flex items-center gap-2 mb-2">
                        <FaExclamationTriangle className="text-primary" />
                        <h2 className="text-2xl font-semibold text-primary">
                            2. Acceptable Use
                        </h2>
                    </div>
                    <p className="text-textMain leading-relaxed">
                        You agree not to misuse the platform, attempt unauthorized access,
                        disrupt services, or engage in any activity that may harm other
                        users or the system.
                    </p>
                </section>

                <section className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-secondary/30">
                    <h2 className="text-2xl font-semibold text-primary mb-2">
                        3. Data & Privacy
                    </h2>
                    <p className="text-textMain leading-relaxed">
                        HabitRise stores user data only to provide habit tracking features.
                        We do not sell personal data. Users are responsible for safeguarding
                        their account credentials.
                    </p>
                </section>

                <section className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-secondary/30">
                    <h2 className="text-2xl font-semibold text-primary mb-2">
                        4. Availability & Changes
                    </h2>
                    <p className="text-textMain leading-relaxed">
                        HabitRise is provided on an “as-is” basis. Features may be updated,
                        modified, or discontinued at any time without prior notice.
                    </p>
                </section>

                <section className="bg-white p-6 rounded-xl shadow-sm border border-secondary/30">
                    <h2 className="text-2xl font-semibold text-primary mb-2">
                        5. Limitation of Liability
                    </h2>
                    <p className="text-textMain leading-relaxed">
                        HabitRise is not responsible for any losses or damages arising from
                        the use or inability to use the platform. Users use the service at
                        their own discretion.
                    </p>
                </section>

                <p className="text-sm text-gray-500 mt-10 font-body">
                    Last updated: {new Date().getFullYear()}
                </p>
            </div>
        </div>
    );
};

export default TermsAndConditions;
