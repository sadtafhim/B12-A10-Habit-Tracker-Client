import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import {
    FaHome,
    FaClipboardList,
    FaPlusCircle,
} from "react-icons/fa";

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-lightBg">
                <p className="text-textMain text-lg">
                    Please log in to access the dashboard.
                </p>
            </div>
        );
    }

    return (
        <div className="drawer lg:drawer-open min-h-screen">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col bg-lightBg">
                <nav className="navbar bg-base-300 border-b border-secondary/30">
                    <label
                        htmlFor="dashboard-drawer"
                        className="btn btn-square btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </label>

                    <div className="px-4 font-heading font-bold text-primary text-xl">
                        Dashboard
                    </div>
                </nav>

                <div className="p-6">
                    <Outlet />
                </div>
            </div>

            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

                <aside className="w-64 bg-base-200 p-4">
                    <ul className="menu text-textMain font-body space-y-1">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `flex items-center gap-3 ${isActive ? "text-primary font-semibold" : ""
                                    }`
                                }
                            >
                                <FaHome />
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/dashboard/my-habit"
                                className={({ isActive }) =>
                                    `flex items-center gap-3 ${isActive ? "text-primary font-semibold" : ""
                                    }`
                                }
                            >
                                <FaClipboardList />
                                My Habits
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/dashboard/add-habit"
                                className={({ isActive }) =>
                                    `flex items-center gap-3 ${isActive ? "text-primary font-semibold" : ""
                                    }`
                                }
                            >
                                <FaPlusCircle />
                                Add Habit
                            </NavLink>
                        </li>
                    </ul>
                </aside>
            </div>
        </div>
    );
};

export default Dashboard;
