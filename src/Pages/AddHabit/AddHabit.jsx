import React, { use } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AddHabit = () => {
  const { user } = use(AuthContext);
  console.log(user);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md p-8 space-y-6 bg-white/60 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-(--color-primary)">
          Add a New Habit
        </h2>
        <p className="text-center text-gray-500">
          Build consistency. One day at a time
        </p>

        <form className="space-y-4">
          <div className="form-control">
            <label className="label text-(--color-primary)">Habit Title</label>
            <input
              type="text"
              name="habit-name"
              placeholder="Habit name..."
              className="input input-bordered w-full p-3 text-(--color-primary)"
            />
          </div>

          <div className="form-control">
            <label className="label text-(--color-primary)">Description</label>
            <textarea
              placeholder="Describe the habit..."
              name="description"
              className="input input-bordered w-full p-3 h-24 resize-none text-(--color-primary)"
            />
          </div>

          <div className="form-control">
            <label className="label text-(--color-primary)">Category</label>
            <select
              name="category"
              className="input input-bordered w-full text-(--color-primary)"
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
              className="input input-bordered w-full p-3 text-(--color-primary)"
            />
          </div>

          <div className="form-control">
            <label className="label text-(--color-primary)">Upload Image</label>
            <input
              type="text"
              name="image"
              className="input input-bordered w-full p-3 cursor-pointer bg-white text-(--color-primary)"
            />
          </div>

          <div className="form-control">
            <label className="label text-(--color-primary)">User Name</label>
            <input
              value={user ? user.name : "name"}
              readOnly
              className="input input-bordered w-full p-3 bg-gray-200 text-(--color-primary)"
            />
          </div>

          <div className="form-control">
            <label className="label text-(--color-primary)">Email</label>
            <input
              value={user ? user.email : "email"}
              readOnly
              className="input input-bordered w-full p-3 bg-gray-200 text-(--color-primary)"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full py-2 text-white"
          >
            Add Habit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddHabit;
