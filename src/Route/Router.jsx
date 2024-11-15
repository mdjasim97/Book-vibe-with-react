import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";
import ListPages from "../Pages/ListPage/ListPage";
import ReadPage from "../Pages/ReadPage/ReadPage";
import BookDetails from "../Pages/BookDetailsPage/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/listed",
        element: <ListPages />,
        loader: () => fetch("/books.json"),
      },

      {
        path: "/bookDetails/:id",
        element: <BookDetails />,
        loader: () => fetch("/books.json"),
      },

      {
        path: "/read",
        element: <ReadPage />,
        loader: () => fetch("/books.json"),
      },
    ],
  },
]);

export default router;
