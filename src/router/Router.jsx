import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import HotJobs from "../pages/HotJobs";
import JobDetails from "../components/JobDetails";
import PrivetRouter from "../privetRouter/PrivetRouter";
import JobApply from "../components/JobApply";
import MyApply from "../components/MyApply";
import AddJob from "../pages/AddJob";
import MyJobs from "../pages/MyJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivetRouter>
            <JobDetails />
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/jobApply/:id",
        element: <JobApply />,
      },
      {
        path: "/my-apply",
        element: (
          <PrivetRouter>
            <MyApply />
          </PrivetRouter>
        ),
      },
      {
        path: "/add-job",
        element: (
          <PrivetRouter>
            <AddJob />
          </PrivetRouter>
        ),
      },
      {
        path: "/myPostedJobs",
        element: <MyJobs />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/hot-jobs",
        element: <HotJobs />,
      },
    ],
  },
]);

export default router;
