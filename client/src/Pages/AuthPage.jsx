import React, { useState } from 'react';
import Login from '../Components/Login';
import Register from '../Components/Register';

const AuthPage = () => {
    const [haveAcc, SetHaveAcc] =useState(true);
    return (
        <div>
            <div className="h-screen bg-cover bg-no-repeat bg-[url('src/assets/5073414.jpg')]">
                <div className='container'>
                    <div className='grid grid-cols-1 pt-40 md:grid-cols-1 lg:grid-cols-2 place-items-center'>
                <div className='items-center p-8'>
                    <h1 className='text-7xl text-lime-600 mx-auto'>
                        Stock Mangement System
                    </h1>
                    <p className='text-2xl text-lime-600 pt-5'>best stock management system you have ever seen</p>
                </div>
                    {haveAcc ? <Login SetHaveAcc={SetHaveAcc}/> : <Register SetHaveAcc={SetHaveAcc}/>}
                </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;