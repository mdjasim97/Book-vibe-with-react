import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {

    const [books, setBooks] = useState([])


    useEffect(() => {
        fetch("/books.json")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])


    return (
        <div className=''>
            <h1 className='text-5xl text-center font-bold my-10'>Books</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    books.map(book => <Book key={books.id} book={book} ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;