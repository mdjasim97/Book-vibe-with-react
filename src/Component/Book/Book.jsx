import React, { useLayoutEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CiStar } from "react-icons/ci";

const Book = ({ book }) => {
    const { id, cover_image, tag, title, author, genre, rating, category } = book
    return (
        <div className='border rounded-2xl p-4'>
            <Link to={`/bookDetails/${id}`} className="card ">
                <figure className='bg-base-200 rounded-2xl p-4'><img src={cover_image} alt="Shoes" /></figure>
                <div className="p-2 my-2 space-y-4">
                    <p className='text-[#23BE0A] font-bold'>{category.map((catagory, ind) => <NavLink key={ind} className="mr-5"> {catagory}
                    </NavLink>)}</p>
                    <h2 className="card-title">{title.length > 20 ? title.slice(0, 20) + "...." : title}</h2>
                    <p>By : {author}</p>
                    <hr />
                    <div className="card-actions justify-between">
                        <div className="">{genre}</div>
                        <div className="flex items-center">
                            <p>{rating}</p>
                            <CiStar className='text-xl'></CiStar>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Book;