import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Loader from "../../Components/Loader/Loader";

const PublicHabit = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/habits")
      .then((res) => res.json())
      .then((data2) => {
        setData(data2);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching habits:", err), setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div>
        <Loader></Loader>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6 font-(--font-body)">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-(--color-primary) mb-12 font-(--font-heading)">
        Discover Public Habits
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch h-full">
        {data.map((habit) => (
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
        ))}

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
