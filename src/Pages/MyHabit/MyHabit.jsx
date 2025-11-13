import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router";
import Loader from "../../Components/Loader/Loader";
import Swal from "sweetalert2";

const MyHabit = () => {
  const { user } = useContext(AuthContext);
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://server-habit.vercel.app/my-habit?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setHabits(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This habit will be deleted permanently.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-habit.vercel.app/habits/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              setHabits((prev) => prev.filter((habit) => habit._id !== id));
              Swal.fire("Deleted!", "Habit deleted successfully.", "success");
            }
          });
      }
    });
  };

  const handleMarkComplete = (id) => {
    fetch(`https://server-habit.vercel.app/habits/${id}/complete`, { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setHabits((prev) =>
            prev.map((habit) =>
              habit._id === id ? { ...habit, streak: data.streak } : habit
            )
          );
          Swal.fire("Completed!", "Habit marked as complete.", "success");
        } else {
          Swal.fire("Info", data.message || "Already completed today!", "info");
        }
      })
      .catch((err) => console.error(err));
  };

  if (loading) return <Loader />;

  return (
    <div className="py-10">
      <div className="w-full h-24 flex items-center justify-center shadow-sm bg-[#2F4C7A]">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
          My Habits
        </h1>
      </div>
      <section className="min-h-screen bg-gray-100 px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-6">
          {habits.length === 0 ? (
            <p className="text-center text-gray-500">No habits found.</p>
          ) : (
            habits.map((habit) => (
              <div
                key={habit._id}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center md:justify-between gap-4 border border-gray-200"
              >
                <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4 w-full">
                  <div className="flex-1">
                    <p className="font-semibold text-(--color-primary)">
                      Title:{" "}
                      <span className="font-normal">{habit.habitTitle}</span>
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-(--color-primary)">
                      Category:{" "}
                      <span className="font-normal">{habit.category}</span>
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-(--color-primary)">
                      Current Streak:{" "}
                      <span className="font-normal">
                        {habit.streak || 0} days
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 mt-4 md:mt-0">
                  <Link
                    to={`/update-details/${habit._id}`}
                    className="btn px-3 py-1 rounded-full bg-linear-to-r from-(--color-primary) to-(--color-accent) text-white font-semibold hover:opacity-90 transition"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(habit._id)}
                    className="px-3 py-1 rounded-full bg-red-500 text-white font-semibold hover:opacity-90 transition"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleMarkComplete(habit._id)}
                    className="px-3 py-1 rounded-full bg-green-500 text-white font-semibold hover:opacity-90 transition"
                  >
                    Mark Complete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default MyHabit;
