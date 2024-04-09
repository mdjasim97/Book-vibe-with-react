import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { getReadsBookStorage } from '../../Utility/ReadBook';

const Reads = () => {

    const books = useLoaderData()


    const [storeBook, setStoreBook] = useState([])

    useEffect(() => {
        const readStoreBook = getReadsBookStorage()
        if(books.length>0){
            const storeBookData = []
            for(const id of books){
                const book = books.find(book=> book.id === id)
                if(book){
                    storeBookData.push(book)
                    console.log(book)
                }
            }

            setStoreBook(storeBookData)
        }
    }, [])
    return (
        <div>
            <h1>This is a read all book</h1>
        </div>
    );
};

export default Reads;