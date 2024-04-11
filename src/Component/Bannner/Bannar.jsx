import React from 'react';
import { Link } from 'react-router-dom';

const Bannar = () => {
    return (
        <div className='my-10'>
            <div className="hero min-h-[500px] bg-base-200 rounded-2xl">
                <div className="hero-content grid grid-cols-1 lg:grid-cols-3 lg:p-24">
                    {/* <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
                    <div className='grow text-start space-y-10 col-span-2'>
                        <h1 className="text-3xl lg:text-6xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                        <Link to="/listpages" className="btn text-xl bg-[#23BE0A] text-white my-10">View The List</Link>
                    </div>

                    <div className=''>
                        <img className='max-h-72 lg:min-h-[400px]' src="https://i.postimg.cc/cLJxg9XX/pngwing-1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;