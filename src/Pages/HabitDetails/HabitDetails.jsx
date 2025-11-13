import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../../Components/Loader/Loader";
import { toast } from "react-hot-toast";

const HabitDetails = () => {
  const { id } = useParams();
  const [habit, setHabit] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/habits/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setHabit(data.result);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching habit:", err);
        setLoading(false);
      });
  }, [id]);

  const handleMarkComplete = () => {
    fetch(`http://localhost:5000/habits/${id}/complete`, { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCompleted(true);
          setHabit((prev) => ({ ...prev, streak: data.streak }));
        } else {
          toast.error(data.message || "Already completed today!");
        }
      })
      .catch((err) => console.error(err));
  };

  if (loading) return <Loader />;
  if (!habit)
    return <p className="text-center mt-20 text-gray-500">No habit found.</p>;

  const progress = habit.completedDaysLast30
    ? Math.min((habit.completedDaysLast30.length / 30) * 100, 100)
    : 0;
  const streak = habit.streak || 0;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 font-(--font-body)">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <img
          src={habit.uploadedImage}
          alt={habit.habitTitle}
          className="w-full h-64 object-cover"
        />
        <div className="p-8 space-y-4">
          <h1 className="text-3xl font-bold text-(--color-primary) font-(--font-heading)">
            {habit.habitTitle}
          </h1>
          <p className="text-gray-700">
            {habit.description || "No description."}
          </p>
          <p>
            <span className="font-semibold text-(--color-primary)">
              Category:
            </span>{" "}
            {habit.category}
          </p>
          <p>
            <span className="font-semibold text-(--color-primary)">
              Creator:
            </span>{" "}
            {habit.creatorName || habit.creatorEmail}
          </p>
          <div>
            <span className="font-semibold text-(--color-primary)">
              Progress:
            </span>
            <div className="w-full bg-gray-300 rounded-full h-4 mt-1">
              <div
                className="h-4 rounded-full bg-(--color-accent) transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm mt-1 text-gray-600">
              {progress.toFixed(0)}% completed in last 30 days
            </p>
          </div>
          <div className="mt-2">
            <span className="inline-block bg-(--color-primary) text-white px-3 py-1 rounded-full font-semibold">
              {streak} day streak
            </span>
          </div>
          <div className="mt-6">
            <button
              onClick={handleMarkComplete}
              disabled={completed}
              className={`w-full py-2.5 text-white font-semibold rounded-full transition duration-300 shadow-sm ${
                completed
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-linear-to-r from-(--color-primary) to-(--color-accent) hover:opacity-90"
              }`}
            >
              {completed ? "Completed!" : "Mark Complete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitDetails;
