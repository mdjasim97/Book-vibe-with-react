import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getReadsBookStorage = () => {
    const readBookStorage = localStorage.getItem("reads-book");
    if (readBookStorage) {
        return JSON.parse(readBookStorage)
    }
    return []
}

const saveReadBooks = (id) => {
    const readBookStore = getReadsBookStorage()
    const isExits = readBookStore.find(bookId => bookId === id)

    if (!isExits) {
        readBookStore.push(id)
        localStorage.setItem("reads-book", JSON.stringify(readBookStore))
        toast.success("Books Added to ReadList")
    } else {
        return toast.error("You have already Read this Books")
    }
}


export { getReadsBookStorage, saveReadBooks }