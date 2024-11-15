import { useEffect } from "react";
import { getReadsBookStorage } from "../../Utility/ReadListStore";
import { useLoaderData } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import ReadList from "../../Component/ReadList/ReadList";
import WishList from "../../Component/wishList/WishList";

const ListPage = () => {
  const books = useLoaderData();
  console.log(books);

  useEffect(() => {
    const getStorageBooks = getReadsBookStorage();
    if (books.length > 0) {
      const booksArray = [];

      for (const id of getStorageBooks) {
        const booksData = books.find((book) => book["id"] === id);
        if (booksData) {
          booksArray.push(booksData);
          console.log(booksData);
        }
      }
    }
  }, []);

  const handleFilterBooks = (filter) => {
    console.log("Data filter function", filter);
  };

  return (
    <div>
      <div className="bg-base-200 p-5 my-5 rounded-2xl">
        <h1 className="text-3xl font-bold font-WorkSans text-center">Books</h1>
      </div>

      <div className="text-center">
        <details className="dropdown w-52">
          <summary className="m-1 w-full btn font-WorkSans text-lg normal-case text-white bg-[#23BE0A]">
            Sort By
            <RiArrowDropDownLine className="text-2xl" />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-full">
            <li onClick={() => handleFilterBooks("Rating")} className="btn">
              Rating
            </li>
            <li
              onClick={() => handleFilterBooks("Number of pages")}
              className="btn"
            >
              Number of pages
            </li>
            <li
              onClick={() => handleFilterBooks("Published year")}
              className="btn"
            >
              Published year
            </li>
          </ul>
        </details>
      </div>

      {/* tab content  */}
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Reads_Book"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <ReadList />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wishlist_Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <WishList />
        </div>
      </div>
    </div>
  );
};

export default ListPage;
