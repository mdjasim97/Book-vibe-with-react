import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';
import Root from './Component/Root/Root.jsx';
import HomePage from './Component/HomePage/HomePage.jsx';
import BookDetails from './Component/BookDetails/BookDetails.jsx';
import Reads from './Component/Reads/Reads.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : "/",
        element : <HomePage></HomePage>
      },
      {
        path : "/bookDetails/:id",
        element : <BookDetails></BookDetails>,
        loader : ()=> fetch("/books.json")
      },
      {
        path : "/readsBook",
        element : <Reads></Reads>,
        loader : ()=> fetch("/books.json")
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
