import { useEffect, useState } from 'react';
import Book from '../BookCard/BookCard';

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch("/books.json")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])


    return (
        <div className='mt-20'>
            <h1 className='text-5xl font-Playfair text-center font-bold my-10'>Books</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    books.map((book, indx) => <Book key={indx} book={book} ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;