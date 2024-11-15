import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero min-h-[550px] bg-base-200 rounded-3xl my-10">
      <div className="hero-content grid grid-cols-1 lg:grid-cols-3 lg:p-24">
        <div className="grow col-span-2">
          <h1 className="text-3xl lg:text-6xl font-Playfair font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>

          <Link
            to="/listed"
            className="btn text-xl font-WorkSans bg-[#23BE0A] text-white my-10"
          >
            View The List
          </Link>
        </div>

        <img
          className="max-h-72 lg:min-h-[400px]"
          src="https://i.postimg.cc/cLJxg9XX/pngwing-1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
