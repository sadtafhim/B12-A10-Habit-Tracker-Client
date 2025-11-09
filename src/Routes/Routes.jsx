import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AddHabit from "../Pages/AddHabit/AddHabit";
import MyHabit from "../Pages/MyHabit/MyHabit";
import PublicHabit from "../Pages/PublicHabit/PublicHabit";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <MainLayout></MainLayout>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-habit",
        element: <AddHabit></AddHabit>,
      },
      {
        path: "/my-habit",
        element: <MyHabit></MyHabit>,
      },
      {
        path: "/public-habit",
        element: <PublicHabit></PublicHabit>,
      },
    ],
  },
]);

export default router;
