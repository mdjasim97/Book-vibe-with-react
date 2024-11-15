import { useEffect, useState } from "react";
import { getWishListBookStorage } from "../../Utility/WishListStore";
import { useLoaderData } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineRequestPage } from "react-icons/md";

const WishList = () => {
  const books = useLoaderData();
  const [wishlist, setWishList] = useState([]);

  useEffect(() => {
    const getWishList = getWishListBookStorage();
    if (books.length > 0) {
      const wishBook = [];
      for (const id of getWishList) {
        const book = books.find((book) => book.id === id);
        if (book) {
          wishBook.push(book);
        }
      }
      setWishList(wishBook);
    }
  }, []);

  return (
    <div>
      {wishlist.map((book) => (
        <div
          key={book.id}
          className="grid grid-cols-1 border rounded-2xl my-6 lg:grid-cols-6"
        >
          <div className="p-4">
            <figure>
              <img
                className="bg-base-200 w-52 rounded-2xl p-4"
                src={book["cover_image"]}
                alt="Shoes"
              />{" "}
            </figure>
          </div>

          <div className="lg:col-span-4 lg:space-y-5 lg:my-4 p-4  lg:mx-8">
            <h2 className="text-2xl font-Playfair font-bold">
              {book["title"]}
            </h2>
            <p className="text-base font-WorkSans">By : {book["author"]}</p>
            <p className="flex flex-col items-center font-WorkSans lg:flex-row">
              <span className="font-bold mr-5">tag : </span>
              {book["tag"].map((tag, indx) => (
                <p
                  key={indx}
                  className="text-[#23BE0A] mr-4 bg-green-50 p-2 rounded-md"
                >
                  {tag}
                </p>
              ))}{" "}
              <span className="flex items-center">
                <CiLocationOn className="mr-3" /> Year of Publishing:{" "}
                {book["published_year"]}
              </span>{" "}
            </p>
            <div className="flex flex-col font-WorkSans text-base lg:flex-row">
              <p className="flex items-center mr-5">
                <IoPeopleOutline className="mr-3" /> Publisher :{" "}
                {book["publisher"]}
              </p>
              <p className="flex items-center">
                <MdOutlineRequestPage className="mr-3" /> Pages :{" "}
                {book["pages"]}
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center space-y-2 mt-4">
              <button className="btn px-10 rounded-full mr-4 bg-[#d1e4fc] text-[#328EFF]">
                Catagory : {book["category"]}
              </button>

              <button className="btn  px-10 rounded-full mr-4 bg-[#fad9c3] text-[#e29876]">
                Rating : {book["rating"]}
              </button>

              <Link
                to={`/bookDetails/${book.id}`}
                className="btn px-10 rounded-full mr-4 bg-[#23BE0A] text-white"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishList;
