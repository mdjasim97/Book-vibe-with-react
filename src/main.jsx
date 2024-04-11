import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import NotFound from './Pages/NotFoundPage/NotFoundPage.jsx';
import Root from './Component/Root/Root.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';
import BookDetails from './Component/BookDetails/BookDetails.jsx';
import ReadsPageDetails from './Pages/ReadPage/ReadPageDetails.jsx';
import ListPages from './Pages/ListPage/ListPages.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },

      {
        path: "/listpages",
        element: <ListPages></ListPages>,
        loader: () => fetch("/books.json")
      },
      
      {
        path: "listpages/bookDetails/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/books.json")
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/books.json")
      },
      {
        path: "/readsBook",
        element: <ReadsPageDetails></ReadsPageDetails>,
        loader: () => fetch("/books.json")
      }
    
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
