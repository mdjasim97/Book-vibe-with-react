import React, { useEffect, useState } from 'react';
import { getWishListBookStorage } from '../../Utility/WishListStore';
import { useLoaderData } from 'react-router-dom';
import {Link, NavLink } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineRequestPage } from "react-icons/md";

const WishList = () => {

    const books = useLoaderData()

    const [wishlist, setWishList] = useState([])

    useEffect(() => {
        const getWishList = getWishListBookStorage()
        if (books.length > 0) {
            const wishBook = []
            for (const id of getWishList) {
                const book = books.find(book => book.id === id);
                if (book) {
                    wishBook.push(book)
                }
            }
            setWishList(wishBook)
        }
    }, [])


    return (
        <div>
            {/* <div className=''>
                <h1 className='text-5xl font-bold text-center'>Wish List : {wishlist.length} </h1>
            </div> */}

            <div>
                {
                    wishlist.map(book => <div className='grid grid-cols-1 border rounded-2xl my-6 lg:grid-cols-6'>
                        <div className='p-4'>
                            <figure><img className='bg-base-200 w-52 rounded-2xl p-4' src={book["cover_image"]} alt="Shoes" /> </figure>
                        </div>

                        <div className="col-span-4 lg:space-y-5 my-4 mx-4 lg:mx-8">
                            <h2 className="card-title">{book["title"]}</h2>
                            <p>By : {book["author"]}</p>

                            <p className='my-0 flex flex-col lg:flex-row'><span className='font-bold mr-5'>tag : </span>{book["tag"].map((tag, indx) => <NavLink key={indx} className="mr-10 text-[#23BE0A]">{tag}</NavLink>)} <span className='flex items-center'><CiLocationOn className='mr-3' /> Year of Publishing: {book["published_year"]}</span> </p>
                            <div className='flex flex-col lg:flex-row'>
                                <p className='flex items-center font-semibold mr-5'><IoPeopleOutline className='mr-3' /> Publisher : {book["publisher"]}</p>
                                <p className='flex items-center font-semibold'><MdOutlineRequestPage className='mr-3' /> Pages : {book["pages"]}</p>
                            </div>

                            <div className='grid grid-cols-1 lg:grid-cols-3 space-y-2 mt-4'>
                                <button className='btn rounded-full mr-4 bg-[#d1e4fc] text-[#328EFF]'>Catagory : {book["category"].map(item => <NavLink className="mr-1">{item}</NavLink>)}</button>

                                <button className='btn rounded-full mr-4 bg-[#fdeadd] text-[#dd906d]'>Rating : {book["rating"]}</button>


                                <Link to={`bookDetails/${book.id}`} className='btn rounded-full mr-4 bg-[#23BE0A] text-white'>View Details</Link>

                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default WishList;