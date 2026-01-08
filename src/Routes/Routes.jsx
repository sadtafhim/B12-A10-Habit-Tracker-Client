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
import UpdateHabit from "../Pages/UpdateHabit/UpdateHabit";
import HabitDetails from "../Pages/HabitDetails/HabitDetails";
import About from "../Pages/About/About";
import Dashboard from "../Components/Dashboard/Dashboard";
import TermsAndConditions from "../Pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "../Pages/Priv/Priv";
import UpdateUser from "../Pages/UpdateUser/UpdateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
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
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/terms&conditions",
        element: <TermsAndConditions></TermsAndConditions>,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy></PrivacyPolicy>
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
      {
        path: "/auth/updateUser",
        element: <UpdateUser></UpdateUser>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/dashboard/my-habit",
        element: (
          <PrivateRoute>
            <MyHabit></MyHabit>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/add-habit",
        element: (
          <PrivateRoute>
            <AddHabit></AddHabit>
          </PrivateRoute>
        ),
      },
    ]
  }
]);

export default router;
