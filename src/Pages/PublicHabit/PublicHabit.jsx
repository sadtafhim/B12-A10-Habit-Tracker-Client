import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import { Link } from "react-router";

const PublicHabit = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Morning", "Work", "Fitness", "Evening", "Study"];

  useEffect(() => {
    fetch("http://localhost:5000/habits")
      .then((res) => res.json())
      .then((data2) => {
        setData(data2);
        setFilteredData(data2);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching habits:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = [...data];
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (habit) =>
          habit.category &&
          habit.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter(
        (habit) =>
          habit.habitTitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          habit.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          habit.creatorName?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredData(filtered);
  }, [searchQuery, selectedCategory, data]);

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );

  return (
    <div className="bg-gray-100 py-10">
      <div className="w-full h-24 flex items-center justify-center shadow-sm bg-[#2F4C7A]">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
          Browse All Habits
        </h1>
      </div>
      <div className="min-h-screen bg-gray-100 py-16 px-6 font-(--font-body)">
        <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6 mb-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="w-full md:w-2/3 relative">
              <input
                type="text"
                placeholder="Search habits by title or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 pl-10 rounded-full border border-gray-300 shadow-sm text-gray-700 focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/30 outline-none transition-all duration-300 placeholder-gray-400"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </div>

            <div className="w-full md:w-1/3 relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 rounded-full border border-gray-300 shadow-sm text-gray-700 focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/30 outline-none appearance-none cursor-pointer transition-all duration-300"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch h-full">
          {filteredData.length > 0 ? (
            filteredData.map((habit) => (
              <div
                key={habit._id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200"
              >
                <div className="relative">
                  <img
                    src={habit.uploadedImage}
                    alt={habit.habitTitle}
                    className="w-full h-52 object-cover rounded-t-xl"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-(--color-primary) mb-2 font-(--font-heading)">
                    {habit.habitTitle}
                  </h3>
                  <div className="text-sm space-y-1 text-gray-700">
                    <p>
                      <span className="font-medium text-(--color-primary)">
                        Category:
                      </span>{" "}
                      {habit.category}
                    </p>
                    <p>
                      <span className="font-medium text-(--color-primary)">
                        Reminder:
                      </span>{" "}
                      {habit.reminderTime}
                    </p>
                    <p>
                      <span className="font-medium text-(--color-primary)">
                        Creator:
                      </span>{" "}
                      {habit.creatorName}
                    </p>
                  </div>
                  <div className="mt-6 text-center">
                    <Link
                      to={`/habit-details/${habit._id}`}
                      className="btn w-full py-2.5 bg-linear-to-r from-(--color-primary) to-(--color-accent) hover:opacity-90 text-white font-semibold rounded-full transition duration-300 shadow-sm"
                    >
                      See Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No habits found matching your criteria.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublicHabit;
