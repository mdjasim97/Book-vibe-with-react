import { getReadsBookStorage } from "./ReadListStore"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const getWishListBookStorage = () => {
    const wishListStorage = localStorage.getItem("wishlist")
    if (wishListStorage) {
        return JSON.parse(wishListStorage)
    }
    return []
}


const saveWishListBook = (idInt) => {
    const WishList = getWishListBookStorage()
    const isExitWish = WishList.find(storeid => storeid === idInt);
    const getReadList = getReadsBookStorage()
    const isRead = getReadList.find(readId => readId === idInt)
    if (!isExitWish && !isRead) {
        WishList.push(idInt)
        localStorage.setItem("wishlist", JSON.stringify(WishList))
        toast("Book Added to wishlist")
    } else {
        toast("You have already Read this Books")
    }
}


export { getWishListBookStorage, saveWishListBook }