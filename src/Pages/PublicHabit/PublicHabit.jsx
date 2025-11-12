import React, { useEffect, useState } from "react";

const PublicHabit = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/habits")
      .then((res) => res.json())
      .then((data2) => setData(data2))
      .catch((err) => console.error("Error fetching habits:", err));
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-lightBg)] py-12 px-6 font-[var(--font-body)]">
      <h2 className="text-3xl font-bold text-[var(--color-primary)] text-center mb-10 font-[var(--font-heading)]">
        Public Habits
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {data.map((habit) => (
          <div
            key={habit._id}
            className="bg-white shadow-lg rounded-xl overflow-hidden border border-[var(--color-secondary)] hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={habit.uploadedImage}
                alt={habit.habitTitle}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-3 right-3 bg-[var(--color-accent)] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                NEW
              </span>
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2 font-[var(--font-heading)]">
                {habit.habitTitle}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {habit.description.length > 100
                  ? habit.description.slice(0, 100) + "..."
                  : habit.description}
              </p>

              <div className="text-sm space-y-1 text-gray-700">
                <p>
                  <span className="font-medium text-[var(--color-primary)]">
                    Category:
                  </span>{" "}
                  {habit.category}
                </p>
                <p>
                  <span className="font-medium text-[var(--color-primary)]">
                    Reminder:
                  </span>{" "}
                  {habit.reminderTime}
                </p>
                <p>
                  <span className="font-medium text-[var(--color-primary)]">
                    Creator:
                  </span>{" "}
                  {habit.creatorName}
                </p>
              </div>

              <div className="mt-5 text-center">
                <button className="bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-white font-semibold px-5 py-2 rounded-full transition duration-300">
                  Track This Habit
                </button>
              </div>
            </div>
          </div>
        ))}

        {data.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">
            No habits found.
          </p>
        )}
      </div>
    </div>
  );
};

export default PublicHabit;
