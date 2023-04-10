import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';

import Blog from './components/Blog/Blog';
import ApplyJobs from './components/ApplyJobs/ApplyJobs';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch('categoryData.json')
      },
      {
        path: '/statistics',
        element:<Statistics></Statistics>
      },
      {
        path: '/appliedJobs',
        element:<ApplyJobs></ApplyJobs>
      },
      {
        path: '/blog',
        element:<Blog></Blog>
      }
    ]
  }
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
