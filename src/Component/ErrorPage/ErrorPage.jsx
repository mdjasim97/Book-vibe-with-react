import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(-1)
    }
    return (
        <div>
            <h1 className='text-5xl'>Opps...</h1>
            <button onClick={handleNavigate} className='btn'>Back</button>
        </div>
    );
};

export default ErrorPage;