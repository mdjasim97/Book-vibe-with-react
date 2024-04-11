import React from 'react';
import WishList from '../../Component/wishList/WishList';
import ReadList from '../../Component/ReadList/ReadList';

const ListPages = () => {
    return (
        <div>

            <div className='bg-base-200 p-10 my-5 rounded-2xl'>
                <h1 className='text-5xl font-bold text-center'>Books</h1>
            </div>

            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Reads_Book" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <ReadList></ReadList>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist_Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <WishList></WishList>
                </div>

            </div>

        </div>
    );
};

export default ListPages;