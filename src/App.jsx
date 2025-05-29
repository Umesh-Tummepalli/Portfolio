import React from 'react'
import LandingPage from './components/LandingPage'
import {createBrowserRouter, RouterProvider} from "react-router-dom"  // Fixed import
import NavBar from './components/NavBar'
import AboutMain from './components/AboutMain'

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