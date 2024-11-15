import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import PropTypes from "prop-types";

const BookCard = ({ book }) => {
  console.log(book);
  const { id, cover_image, title, author, genre, rating, category } = book;
  return (
    <div className="border rounded-2xl p-4">
      <Link to={`/bookDetails/${id}`} className="card ">
        {/* card image  */}
        <figure className="bg-base-200 rounded-2xl p-4">
          <img src={cover_image} alt="Shoes" />
        </figure>

        <div className="p-2 my-2 space-y-4 f">
          {/* category  */}
          <div className="flex font-WorkSans">
            {category.map((cat, ind) => (
              <p
                key={ind}
                className="mr-4 text-[#23BE0A] text-base font-bold bg-green-100 px-2 rounded-3xl"
              >
                {" "}
                {cat}
              </p>
            ))}
          </div>
          {/* title  */}
          <h2 className="text-2xl font-Playfair font-bold">
            {title.length > 25 ? title.slice(0, 25) + "..." : title}
          </h2>
          <p className="text-base font-WorkSans">By : {author}</p>
          <hr />

          {/* card bottom part  */}
          <div className="card-actions font-WorkSans justify-between">
            <p className="text-base">{genre}</p>
            {/* rating  */}
            <div className="flex items-center">
              <p>{rating}</p>
              <CiStar className="text-xl"></CiStar>
            </div>
          </div>
          
        </div>
      </Link>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.object,
};

export default BookCard;
