import React from 'react'
import LandingPage from './components/LandingPage'
import {createBrowserRouter, RouterProvider} from "react-router-dom"  // Fixed import
import NavBar from './components/NavBar'
import AboutMain from './components/AboutMain'
import ProjectMain from './components/ProjectMain'
import ScrollToTop from './app/ScrollToTop'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [
        {
          path:"",
          element: <LandingPage />,
        },
        {
          path: "about",
          element: <AboutMain />
        },
        {
          path:'projects',
          element:<ProjectMain/>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App