import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router";
import Loader from "../../Components/Loader/Loader";
import Swal from "sweetalert2";

const MyHabit = () => {
  const { user } = use(AuthContext);
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/my-habit?email=${user.email}`)
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
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/habits/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0 || data.success) {
              setHabits((prev) => prev.filter((habit) => habit._id !== id));

              Swal.fire({
                title: "Deleted!",
                text: "Your habit has been deleted.",
                icon: "success",
              });
            } else {
              Swal.fire({
                title: "Error",
                text: "Failed to delete habit.",
                icon: "error",
              });
            }
          })
          .catch((err) => {
            console.error(err);
            Swal.fire("Error", "Something went wrong!", "error");
          });
      }
    });
  };

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );

  return (
    <section className="min-h-screen bg-gray-100 px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-(--color-primary) text-center">
          My Habits
        </h2>

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
                    <span className="font-normal">{habit.streak} days</span>
                  </p>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-(--color-primary)">
                    Created:{" "}
                    <span className="font-normal">{habit.createdAt}</span>
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
                <button className="px-3 py-1 rounded-full bg-green-500 text-white font-semibold hover:opacity-90 transition">
                  Mark Complete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default MyHabit;
