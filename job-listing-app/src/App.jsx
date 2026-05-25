import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import Mainlayout from './layouts/Mainlayout';
import Homepage from './pages/Homepage'
import Jobspage from './pages/Jobspage'
import NotFoundPage from './pages/NotFoundPage';
import JobPage ,{jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Mainlayout />}>
    <Route
      index
      element={<Homepage />}
      errorElement={<h1>Greška - stranica nije pronađena</h1>}
    />
    <Route
      path='/jobs'
      element={<Jobspage />}
      errorElement={<h1>Greška - stranica nije pronađena</h1>}
      
    />
    <Route
      path='/jobs/:id'
      element={<JobPage />}
      loader={jobLoader}
      errorElement={<h1>Greška - stranica nije pronađena</h1>}
      
    />
    <Route
      path='/add-job'
      element={<AddJobPage />}
      errorElement={<h1>Greška - stranica nije pronađena</h1>}
      
    />
    <Route
      path='*'
      element={<NotFoundPage />}
    />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />
}

export default App