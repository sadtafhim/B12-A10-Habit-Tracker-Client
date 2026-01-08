import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { motion } from "framer-motion";
import { FaUserEdit } from "react-icons/fa";

const UpdateUser = () => {
    const { user, updateUser, setUser } = useContext(AuthContext);

    const [name, setName] = useState(user?.displayName || "");
    const [photo, setPhoto] = useState(user?.photoURL || "");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            await updateUser({
                displayName: name,
                photoURL: photo,
            });

            // Update local state immediately
            setUser({
                ...user,
                displayName: name,
                photoURL: photo,
            });

            setMessage("Profile updated successfully.");
        } catch (error) {
            setMessage("Failed to update profile. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {/* Header */}
            <div
                className="w-full h-24 flex items-center justify-center shadow-sm mt-20"
                style={{ background: "#2F4C7A" }}
            >
                <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
                    Update Profile
                </h1>
            </div>

            {/* Content */}
            <section className="py-16 px-6" style={{ background: "#F8F9FC" }}>
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="max-w-xl mx-auto"
                >
                    <div
                        className="rounded-3xl p-10 shadow-md border flex flex-col gap-6"
                        style={{
                            background: "#FFFFFF",
                            borderColor: "#9EC9FF",
                        }}
                    >
                        <div className="flex items-center gap-3">
                            <FaUserEdit className="text-3xl" style={{ color: "#FF785A" }} />
                            <h2
                                className="text-2xl font-semibold"
                                style={{ color: "#1D1D1F" }}
                            >
                                Personal Information
                            </h2>
                        </div>

                        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
                            <div>
                                <label className="text-sm font-medium">Display Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full mt-1 px-4 py-3 rounded-full border focus:outline-none focus:ring-2"
                                    style={{ borderColor: "#9EC9FF" }}
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Profile Photo URL</label>
                                <input
                                    type="text"
                                    value={photo}
                                    onChange={(e) => setPhoto(e.target.value)}
                                    className="w-full mt-1 px-4 py-3 rounded-full border focus:outline-none focus:ring-2"
                                    style={{ borderColor: "#9EC9FF" }}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="mt-4 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 disabled:opacity-60"
                                style={{ background: "#2F4C7A" }}
                            >
                                {loading ? "Updating..." : "Save Changes"}
                            </button>
                        </form>

                        {message && (
                            <p
                                className="text-sm text-center"
                                style={{ color: "#1D1D1F", opacity: 0.75 }}
                            >
                                {message}
                            </p>
                        )}
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default UpdateUser;
