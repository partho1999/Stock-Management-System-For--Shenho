import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({SetHaveAcc}) => {
    const navigate = useNavigate();

    const handdleAcc=(e)=>{
        e.preventDefault()
        SetHaveAcc(false)
    }

    const handleSubmit =()=>{
        navigate('/dashboard')
    }


    return (
        // <div className='container'>
        //     <div className='grid grid-cols-1 pt-40 md:grid-cols-1 lg:grid-cols-2 place-items-center'>
        //         <div className='items-center p-8'>
        //             <h1 className='text-7xl text-lime-600 mx-auto'>
        //                 Stock Mangement System
        //             </h1>
        //             <p className='text-2xl text-lime-600 pt-5'>best stock management system you have ever seen</p>
        //         </div>
                <div className="card w-96 glass items-center pt-8">
                
                    <form action="">
                        <div className='grid grid-rows-4 gap-4 h-auto place-items-center pt-10'>
                            <div className='w-80'>
                                <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className='w-80'>
                                <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <button onClick={handleSubmit} className="btn btn-success w-80 bg-lime-600 hover:bg-lime-500">Login</button>
                            <button onClick={handdleAcc} className="btn btn-link w-80 text-sky-600 hover:text-sky-500">do not have account?</button>
                        </div>
                    </form>
                    
                </div>
        //     </div>
        // </div>
    );
};

export default Login;