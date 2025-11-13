import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const UpdateHabit = () => {
  const { id } = useParams();
  console.log(id);
  const [habit, setHabit] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/habits/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setHabit(data.result);
      })
      .catch((err) => console.error("Error fetching habit:", err));
  }, [id]);
  console.log(habit);

  const updateHabit = (e) => {
    e.preventDefault();

    const formData = {
      habitTitle: e.target.habitName.value,
      description: e.target.description.value,
      category: e.target.category.value,
      uploadedImage: e.target.image.value,
      creatorEmail: e.target.email.value,
      creatorName: e.target.name.value,
    };

    fetch(`http://localhost:5000/habits/${habit._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-start py-12 bg-gray-100">
      <form
        onSubmit={updateHabit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-2xl space-y-6"
      >
        <h2 className="text-2xl font-bold text-(--color-primary)">
          Update Habit
        </h2>

        <div>
          <label className="block font-semibold text-(--color-primary)">
            User Name
          </label>
          <input
            name="name"
            type="text"
            readOnly
            defaultValue={habit.creatorName}
            disabled
            className="w-full border border-gray-300 rounded-md p-2 mt-1 bg-gray-100"
          />
        </div>

        <div>
          <label className="block font-semibold text-(--color-primary)">
            Email
          </label>
          <input
            type="email"
            name="email"
            readOnly
            defaultValue={habit.creatorEmail}
            disabled
            className="w-full border border-gray-300 rounded-md p-2 mt-1 bg-gray-100"
          />
        </div>

        <div>
          <label className="block font-semibold text-(--color-primary)">
            Title
          </label>
          <input
            type="text"
            name="habitName"
            defaultValue={habit.habitTitle}
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
          />
        </div>

        <div>
          <label className="block font-semibold text-(--color-primary)">
            Description
          </label>
          <textarea
            name="description"
            defaultValue={habit.description}
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
            rows={4}
          />
        </div>

        <div>
          <label className="block font-semibold text-(--color-primary)">
            Category
          </label>
          <input
            type="text"
            name="category"
            defaultValue={habit.category}
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
          />
        </div>

        <div>
          <label className="block font-semibold text-(--color-primary)">
            Image
          </label>
          <input type="text" className="w-full mt-1" />
          <input
            type="text"
            name="image"
            defaultValue={habit.uploadedImage}
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2.5 bg-linear-to-r from-(--color-primary) to-(--color-accent) text-white font-semibold rounded-full hover:opacity-90 transition"
        >
          Update Habit
        </button>
      </form>
    </div>
  );
};

export default UpdateHabit;
