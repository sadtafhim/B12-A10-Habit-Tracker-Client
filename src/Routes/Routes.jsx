import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AddHabit from "../Pages/AddHabit/AddHabit";
import MyHabit from "../Pages/MyHabit/MyHabit";
import PublicHabit from "../Pages/PublicHabit/PublicHabit";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import PrivateRoute from "../Provider/PrivateRoute";
import NotFound from "../Pages/NotFound/NotFound";
import HabitDetails from "../HabitDetails/HabitDetails";
import UpdateHabit from "../Pages/UpdateHabit/UpdateHabit";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <MainLayout></MainLayout>
      </div>
    ),
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-habit",
        element: (
          <PrivateRoute>
            <AddHabit></AddHabit>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-habit",
        element: (
          <PrivateRoute>
            <MyHabit></MyHabit>
          </PrivateRoute>
        ),
      },
      {
        path: "/habit-details/:id",
        element: (
          <PrivateRoute>
            <HabitDetails></HabitDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-details/:id",
        element: (
          <PrivateRoute>
            <UpdateHabit></UpdateHabit>
          </PrivateRoute>
        ),
      },
      {
        path: "/public-habit",
        element: <PublicHabit></PublicHabit>,
      },
    ],
  },
  {
    path: "/auth",
    element: (
      <div>
        <AuthLayout></AuthLayout>
      </div>
    ),
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/auth/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/auth/register",
        element: <RegisterPage></RegisterPage>,
      },
    ],
  },
]);

export default router;
