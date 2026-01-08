import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-hot-toast";

const AddHabit = () => {
  const { user } = useContext(AuthContext);

  const addHabit = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = {
      habitTitle: form.habitName.value,
      description: form.description.value,
      category: form.category.value,
      reminderTime: form.time.value,
      uploadedImage: form.image.value,
      creatorEmail: form.email.value,
      creatorName: form.name.value,
      createdAt: new Date(),
    };

    fetch("https://server-habit.vercel.app/habits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Habit Added Successfully!");
        form.reset();
      })
      .catch((err) => {
        toast.error("Something went wrong");
        console.error(err);
      });
  };

  return (
    <div className="pt-10 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="w-full h-24 flex items-center justify-center shadow-sm bg-[#2F4C7A]">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
          Add A New Habit
        </h1>
      </div>

      {/* Form Container */}
      <div className="flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-3xl p-8 bg-white rounded-xl shadow-md border border-gray-200">
          <p className="text-center text-gray-500 mb-6">
            Build consistency — one step at a time.
          </p>

          <form
            onSubmit={addHabit}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {/* Habit Title */}
            <div className="form-control md:col-span-2">
              <label className="label text-(--color-primary)">
                Habit Title
              </label>
              <input
                type="text"
                name="habitName"
                placeholder="e.g. Morning Run"
                required
                className="input input-bordered w-full p-3 rounded-md"
              />
            </div>

            {/* Description */}
            <div className="form-control md:col-span-2">
              <label className="label text-(--color-primary)">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Describe your habit..."
                required
                className="input input-bordered w-full p-3 h-24 resize-none rounded-md"
              />
            </div>

            {/* Category */}
            <div className="form-control">
              <label className="label text-(--color-primary)">
                Category
              </label>
              <select
                name="category"
                required
                className="input input-bordered w-full rounded-md"
              >
                <option>Morning</option>
                <option>Work</option>
                <option>Fitness</option>
                <option>Evening</option>
                <option>Study</option>
              </select>
            </div>

            {/* Reminder Time */}
            <div className="form-control">
              <label className="label text-(--color-primary)">
                Reminder Time
              </label>
              <input
                type="time"
                name="time"
                required
                className="input input-bordered w-full p-3 rounded-md"
              />
            </div>

            {/* Image */}
            <div className="form-control md:col-span-2">
              <label className="label text-(--color-primary)">
                Upload Image
              </label>
              <input
                type="text"
                name="image"
                placeholder="Paste image URL..."
                className="input input-bordered w-full p-3 rounded-md"
              />
            </div>

            {/* User Name */}
            <div className="form-control">
              <label className="label text-(--color-primary)">
                User Name
              </label>
              <input
                name="name"
                value={user?.displayName || "Guest"}
                readOnly
                className="input input-bordered w-full p-3 bg-gray-100"
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label text-(--color-primary)">
                Email
              </label>
              <input
                name="email"
                value={user?.email || "guest@example.com"}
                readOnly
                className="input input-bordered w-full p-3 bg-gray-100"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full py-3 mt-4 rounded-full text-white font-semibold bg-linear-to-r from-(--color-primary) to-(--color-accent) hover:opacity-90 transition-all duration-300 shadow-md"
              >
                Add Habit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddHabit;
