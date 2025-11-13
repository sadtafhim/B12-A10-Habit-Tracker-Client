import React, { use } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-hot-toast";

const AddHabit = () => {
  const { user } = use(AuthContext);
  const addHabit = (e) => {
    e.preventDefault();

    const formData = {
      habitTitle: e.target.habitName.value,
      description: e.target.description.value,
      category: e.target.category.value,
      reminderTime: e.target.time.value,
      uploadedImage: e.target.image.value,
      creatorEmail: e.target.email.value,
      creatorName: e.target.name.value,
      createdAt: new Date(),
    };

    fetch("http://localhost:5000/habits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Habit Updated Successfully!");
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 py-16">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-(--color-primary)">
          Add a New Habit
        </h2>
        <p className="text-center text-gray-500">
          Build consistency — one step at a time.
        </p>

        <form className="space-y-5" onSubmit={addHabit}>
          <div className="form-control">
            <label className="label text-(--color-primary)">Habit Title</label>
            <input
              type="text"
              name="habitName"
              placeholder="e.g. Morning Run"
              required
              className="input input-bordered w-full p-3 rounded-md border-gray-300 focus:border-(--color-primary) focus:ring focus:ring-(--color-primary)/30 text-(--color-primary)"
            />
          </div>

          <div className="form-control">
            <label className="label text-(--color-primary)">Description</label>
            <textarea
              name="description"
              placeholder="Describe your habit..."
              required
              className="input input-bordered w-full p-3 h-24 resize-none rounded-md border-gray-300 focus:border-(--color-primary) focus:ring focus:ring-(--color-primary)/30 text-(--color-primary)"
            />
          </div>

          <div className="form-control">
            <label className="label text-(--color-primary)">Category</label>
            <select
              name="category"
              required
              className="input input-bordered w-full rounded-md border-gray-300 focus:border-(--color-primary) focus:ring focus:ring-(--color-primary)/30 text-(--color-primary)"
            >
              <option>Morning</option>
              <option>Work</option>
              <option>Fitness</option>
              <option>Evening</option>
              <option>Study</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label text-(--color-primary)">
              Reminder Time
            </label>
            <input
              type="time"
              name="time"
              required
              className="input input-bordered w-full p-3 rounded-md border-gray-300 focus:border-(--color-primary) focus:ring focus:ring-(--color-primary)/30 text-(--color-primary)"
            />
          </div>

          <div className="form-control">
            <label className="label text-(--color-primary)">Upload Image</label>
            <input
              type="text"
              name="image"
              placeholder="Paste image URL..."
              className="input input-bordered w-full p-3 rounded-md border-gray-300 focus:border-(--color-primary) focus:ring focus:ring-(--color-primary)/30 text-(--color-primary)"
            />
          </div>

          <div className="form-control">
            <label className="label text-(--color-primary)">User Name</label>
            <input
              value={user ? user.displayName : "Guest"}
              readOnly
              name="name"
              className="input input-bordered w-full p-3 bg-gray-100 text-(--color-primary)"
            />
          </div>

          <div className="form-control">
            <label className="label text-(--color-primary)">Email</label>
            <input
              value={user ? user.email : "guest@example.com"}
              readOnly
              name="email"
              className="input input-bordered w-full p-3 bg-gray-100 text-(--color-primary)"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 rounded-full text-white font-semibold bg-linear-to-r from-(--color-primary) to-(--color-accent) hover:opacity-90 transition-all duration-300 shadow-md"
          >
            Add Habit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddHabit;
