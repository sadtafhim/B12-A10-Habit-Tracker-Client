import React, { useEffect, useState } from "react";

const PublicHabit = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/habits")
      .then((res) => res.json())
      .then((data2) => setData(data2))
      .catch((err) => console.error("Error fetching habits:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6 font-(--font-body)">
      {/* Page Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-(--color-primary) mb-12 font-(--font-heading)">
        Discover Public Habits
      </h2>

      {/* Habits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch h-full">
        {data.map((habit) => (
          <div
            key={habit._id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200"
          >
            {/* Habit Image */}
            <div className="relative">
              <img
                src={habit.uploadedImage}
                alt={habit.habitTitle}
                className="w-full h-52 object-cover rounded-t-xl"
              />
            </div>

            {/* Habit Info */}
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
                <button className="w-full py-2.5 bg-linear-to-r from-(--color-primary) to-(--color-accent) hover:opacity-90 text-white font-semibold rounded-full transition duration-300 shadow-sm">
                  See Details
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* No Data Message */}
        {data.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">
            No public habits found.
          </p>
        )}
      </div>
    </div>
  );
};

export default PublicHabit;
