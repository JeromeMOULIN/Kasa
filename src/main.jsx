import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/public/Home'
import About from './pages/public/about'
import Error_pages from './pages/public/error_pages'
import Logement from './pages/public/Logement'

import '@/index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: `/logement/*`,
        element: <Logement/>
      },
      {
        path: "*",
        element: <Error_pages/>
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
