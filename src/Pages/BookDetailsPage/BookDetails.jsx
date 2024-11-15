import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveReadBooks } from "../../Utility/ReadListStore";
import { saveWishListBook } from "../../Utility/WishListStore";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const bookId = parseInt(id);

  const book = books.find((book) => book.id === bookId);
  const {
    cover_image,
    title,
    author,
    genre,
    reviews,
    tag,
    pages,
    publisher,
    published_year,
    rating,
  } = book;

  const handleReadBookOrToast = (id) => {
    saveReadBooks(id);
  };

  const handleWishlist = (id) => {
    saveWishListBook(id);
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="bg-base-200 flex-1 lg:p-10 rounded-2xl">
            <img
              src={cover_image}
              className="lg:min-h-[500px] max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl lg:text-5xl font-Playfair font-bold">
              {title}
            </h1>
            <p className="py-2 font-WorkSans text-xl">By : {author}</p>
            <hr />
            <p className="my-2 font-WorkSans">{genre}</p>
            <hr />
            <p className="my-2">
              <span className="font-bold">reviews : </span> {reviews}
            </p>
            <p className="my-5 flex flex-row">
              <span className="font-bold mr-4">tag : </span>
              {tag?.map((t) => (
                <p
                  className="text-[#23BE0A] bg-green-100 p-1 rounded-md font-WorkSans text-base mr-4"
                  key={t}
                >
                  {t}
                </p>
              ))}
            </p>
            <hr />
            <div className="">
              <div className="my-2 grid grid-cols-2">
                <p className="font-bold">Number of Pages : </p>
                <p>{pages}</p>
              </div>
              <div className="my-2 grid grid-cols-2">
                <p className="font-bold">Publisher : </p>
                <p>{publisher}</p>
              </div>
              <div className="my-2 grid grid-cols-2">
                <p className="font-bold">Year of Publishing : </p>
                <p>{published_year}</p>
              </div>
              <div className="my-2 grid grid-cols-2">
                <p className="font-bold">Rating : </p>
                <p>{rating}</p>
              </div>
            </div>
            <hr />

            <div className="my-5">
              <ToastContainer />
              <button
                onClick={() => handleReadBookOrToast(bookId)}
                className="btn btn-outline mr-5"
              >
                Read
              </button>
              <button
                onClick={() => handleWishlist(bookId)}
                className="btn bg-[#50B1C9] text-white"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
