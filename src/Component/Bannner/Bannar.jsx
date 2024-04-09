import React from 'react';

const Bannar = () => {
    return (
        <div className='my-10'>
            <div className="hero min-h-[500px] bg-base-200 rounded-2xl">
                <div className="hero-content grid grid-cols-1 lg:grid-cols-3 lg:p-24">
                    {/* <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
                    <div className='grow text-start space-y-10 col-span-2'>
                        <h1 className="text-6xl font-bold">Books to freshen up your bookshelf</h1>
                        <button className="btn text-xl bg-[#23BE0A] text-white my-10">View The List</button>
                    </div>

                    <div className=''>
                        <img src="https://i.postimg.cc/cLJxg9XX/pngwing-1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;