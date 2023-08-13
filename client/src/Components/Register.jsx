import axios from 'axios';
import React, { useState } from 'react';

const Register = ({SetHaveAcc}) => {

    const [Email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    const [conformPassword, setConformPassword] = useState('');
    const [error, setError] = useState('');
    const [passError, setPassError] = useState('');
    
   


    const handdleAcc=(e)=>{
        e.preventDefault()
        SetHaveAcc(true)
    }

    // const handleChange = (e) => {
    //     // setFormData({
    //     //   ...formData,
    //     //   [e.target.name]: e.target.value,
    //     // });
    //     const newData={...formData}
    //     newData[e.target.id] =e.target.value
    //     setFormData(newData)
    //     console.log(newData)
    // };
    
    
    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log(Email)
        console.log(userName)
        console.log(Password)
       
        // Check for blank fields
        // const { email, userName, password, conformPassword} = formData;
        if (!Email || !userName || !Password || !conformPassword) {
          setError('All fields are required');
          return;
        }
        // Clear previous errors
        setError('');

        // Check password
        if (Password!=conformPassword){
            setPassError('Please Enter The Same Password')
            return;
        }
        // Clear previous errors
        setPassError('');

        
        
        try {
            const response = await axios.post('http://localhost:5000/auth',{
                email:Email,
                username:userName,
                password:Password
            });
            console.log('Post created:', response.data);
            console.log('Post created:', response.status);
            // Reset the form after successful post
            setEmail("")
            setUserName("")
            setPassword("")
            setConformPassword("")
            SetHaveAcc(true)
            
        } catch (error) {
            console.error('Error creating post:', error);
            
        }
       
    };
    

    return (
        
        <div className='card w-96 glass items-center pt-8'>
            <form onSubmit={handleSubmit}>
                {error && <p className='text-red-600'>{error}</p>}
                <div className='w-80 pt-8'>
                    <input type="text" value={Email} id="email" placeholder="Email" className="input input-bordered w-full max-w-xs" onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className='w-80 pt-8'>
                    <input type="text" value={userName} id="username" placeholder="Username" className="input input-bordered w-full max-w-xs" onChange={(e)=>setUserName(e.target.value)} />
                </div>
                <div className='w-80 pt-8'>
                    <input type="password" value={Password} id="pasword" placeholder="Password" className="input input-bordered w-full max-w-xs" onChange={(e)=>setPassword(e.target.value)} />
                </div>
                
                <div className='w-80 pt-8'>
                    {passError && <p className='text-red-600'>{passError}</p>}
                    
                    <input type="password" value={conformPassword} id ="conformpassword" placeholder=" Conform Password" className="input input-bordered w-full max-w-xs" onChange={(e)=>setConformPassword(e.target.value)} />
                </div>
                <div className='w-80 pt-8'>
                    <button type="submit" className="btn btn-success w-80 bg-lime-600 hover:bg-lime-500">Register</button>
                    <button onClick={handdleAcc} className="btn btn-link w-80  text-sky-600 hover:text-sky-500">already have an account?</button>
                </div>
                
            </form>
            
        </div>
        
    );
};

export default Register;