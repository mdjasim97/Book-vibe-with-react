import { getReadsBookStorage } from "./ReadListStore"
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const getWishListBookStorage = () => {
    const wishListStorage = localStorage.getItem("wishlist")
    if (wishListStorage) {
        return JSON.parse(wishListStorage)
    }
    return []
}


const saveWishListBook = (Id) => {
    const WishList = getWishListBookStorage()
    const isExitWish = WishList.find(storeId => storeId === Id);
    const getReadList = getReadsBookStorage()
    const isRead = getReadList.find(readId => readId === Id)
    if (!isExitWish && !isRead) {
        WishList.push(Id)
        localStorage.setItem("wishlist", JSON.stringify(WishList))
        toast.success("Book Added to wishlist")
    } else {
        toast.error("You have already Read this Books")
    }
}


export { getWishListBookStorage, saveWishListBook }