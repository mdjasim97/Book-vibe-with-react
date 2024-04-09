import React from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';
import { saveReadBooks } from '../../Utility/ReadBook';

const BookDetails = () => {

    const booksData = useLoaderData()
    const { id } = useParams()

    const book = booksData.find(books => books.id === id);
    // console.log(book)


    const handleReadBook = () => {
        saveReadBooks(id)
    }



    return (
        <div>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='bg-base-200 flex-1 p-10 rounded-3xl'>
                        <img src={book["cover_image"]} className="min-h-[500px] max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className='flex-1'>
                        <h1 className="text-5xl font-bold">{book["title"]}</h1>
                        <p className="py-6">{book["author"]}</p>
                        <hr />
                        <p className='my-2'>{book["genre"]}</p>
                        <hr />
                        <p className='my-2'><span className='font-bold'>reviews : </span>{book["reviews"]}</p>
                        <p className='my-5'><span className='font-bold mr-5'>tag : </span>{book["tag"].map(tag => <NavLink className="mr-10 text-[#23BE0A]">{tag}</NavLink>)}</p>
                        <hr />
                        <div className=''>
                            <div className='my-2 grid grid-cols-2'>
                                <NavLink className='font-bold'>Number of Pages : </NavLink>
                                <NavLink>{book["pages"]}</NavLink>
                            </div>
                            <div className='my-2 grid grid-cols-2'>
                                <NavLink className='font-bold'>Publisher : </NavLink>
                                <NavLink>{book["publisher"]}</NavLink>
                            </div>
                            <div className='my-2 grid grid-cols-2'>
                                <NavLink className='font-bold'>Year of Publishing : </NavLink>
                                <NavLink>{book["published_year"]}</NavLink>
                            </div>
                            <div className='my-2 grid grid-cols-2'>
                                <NavLink className='font-bold'>Rating : </NavLink>
                                <NavLink>{book["rating"]}</NavLink>
                            </div>
                        </div>
                        <hr />

                        <div className='my-5'>
                            <button onClick={()=> handleReadBook()} className="btn btn-outline mr-5">Read</button>
                            <button className="btn bg-[#50B1C9]">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;