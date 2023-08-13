import React from 'react';
import { NavLink } from 'react-router-dom';


const Layout = (props) => {
    return (
        <div>
           <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn  bg-lime-600 hover:bg-lime-500 text-black drawer-button w-full lg:hidden">Dashboard</label>
                    {props.children}
                    

                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu pt-20 p4 w-80 h-full bg-base-200 text-base-content">
                        <h1 className='text-center text-xl text-lime-600 pb-8 uppercase '><b>Main</b></h1>
                    
                        {/* Sidebar content here */}
                        <li><NavLink className=' hover:text-lime-600' to='/dashboard'>Dashboard</NavLink></li>
                        <li><NavLink className=' hover:text-lime-600' to='/instock'>In Stock</NavLink></li>
                        <li><NavLink className=' hover:text-lime-600' to='/outstock'>Stock Out</NavLink></li>


                        <h1 className='text-center text-xl text-lime-600 pb-8 pt-8 uppercase '><b>Customize</b></h1>

                        <li><NavLink className=' hover:text-lime-600' to='/add-stock'>Add Stock</NavLink></li>
                        <li><NavLink className=' hover:text-lime-600' to='/manage-stock'>Manage Stock</NavLink></li>
                        <li><NavLink className=' hover:text-lime-600' to='/report'>Reports</NavLink></li>
                        

                        <p className='mx-auto mt-20'><b>Powered By SynthSoft</b></p>
                    </ul>
                    
                </div>
                
            </div>
            
        </div>
    );
};

export default Layout;