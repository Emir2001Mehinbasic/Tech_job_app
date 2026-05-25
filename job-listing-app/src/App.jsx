import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from "./layouts/Mainlayout";
import Homepage from "./pages/Homepage";
import Jobspage from "./pages/Jobspage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditPage from "./pages/EditPage";

const App = () => {
  // Add job function that will be passed to AddJobPage component as a prop. This function will make a POST request to the backend to add a new job.
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return res.json();
  };

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return res.json();
  };
  const updateJob = async (updatedJob) => {
    const res = await fetch(`/api/jobs/${updatedJob.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedJob),
    });
    return res.json();
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Mainlayout />}>
        <Route
          index
          element={<Homepage />}
          errorElement={<h1>Greška - stranica nije pronađena</h1>}
        />
        <Route
          path="/jobs"
          element={<Jobspage />}
          errorElement={<h1>Greška - stranica nije pronađena</h1>}
        />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
          errorElement={<h1>Greška - stranica nije pronađena</h1>}
        />
        <Route
          path="/add-job"
          element={<AddJobPage addJobSubmit={addJob} />}
          errorElement={<h1>Greška - stranica nije pronađena</h1>}
        />
        <Route
          path="/edit-job/:id"
          element={<EditPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
          errorElement={<h1>Greška - stranica nije pronađena</h1>}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
};

export default App;
