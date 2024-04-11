import { ToastContainer, toast } from 'react-toastify';
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
    const exits = readBookStore.find(booksId => booksId === id)

    if (!exits) {
        readBookStore.push(id)
        localStorage.setItem("reads-book", JSON.stringify(readBookStore))
        toast("Books Added to ReadList")
    } else {
        return toast("You have already Read this Books")
    }
}


export { getReadsBookStorage, saveReadBooks }