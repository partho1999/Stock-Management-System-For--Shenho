import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from './Table';

const AddStock = () => {
    const [code, setCode] = useState('');
    const [productName, setProductName] = useState('');
    const [selectSize, setSelectSize] = useState('');
    const [selectCategory, setSelectCategory] = useState('');
    const [stockNumber, setStockNumber] = useState('');
    const [error, setError] = useState('');
    const [showTable, setShowTable] = useState([]);
    const [hideTable, setHideTabe]= useState(true);
    const navigate = useNavigate();

    const handleChangeSize = (event) => {
        setSelectSize(event.target.value);
    };

    const handleChangeCategory = (event) => {
        setSelectCategory(event.target.value);
    };
    
    const handleClear =(event)=>{
        event.preventDefault();

        setCode('');
        setProductName('');
        setSelectSize('');
        setSelectCategory('');
        setProductName('');

    }


    const handleSubmit = async(event) => {
        event.preventDefault();
        
       
        // Check for blank fields
        
        if (!code || !productName || !selectSize || !selectCategory || !stockNumber) {
          setError('All fields are required');
          return;
        }
        // Clear previous errors
        setError('');

       

        
        
        try {
            const response = await axios.post('http://localhost:5000/data',{
                Code:code,
                ProductName :productName ,
                SelectSize:selectSize,
                SelectCategory:selectCategory,
                StockNumber:stockNumber
            });
            console.log('Post created:', response.data);
            console.log('Post created:', response.status);
            console.log('category:',selectCategory)
            // Reset the form after successful post
           setShowTable([
            {
                Code:code,
                ProductName :productName ,
                SelectSize:selectSize,
                SelectCategory:selectCategory,
                StockNumber:stockNumber
            }
           ])
           setHideTabe(false)
           setCode('');
           setProductName('');
           setSelectSize('');
           setSelectCategory('');
           setProductName('');
            
        //    navigate('/manage-stock')
        } catch (error) {
            console.error('Error creating post:', error);
            
        }
       
    };

    return (
        <div className='card w-100 glass items-center pt-8'>
            <form action="">
                {error && <p className='text-red-600'>{error}</p>}
                <div className='grid grid-rows-3'>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 px-5'>
                        <div className='w-30 pt-4'>
                            <input type="text" value={code} id="email" placeholder="Product Code" className="input input-bordered w-full max-w-xs" onChange={(e)=>setCode(e.target.value)} />
                        </div>
                        <div className='col-span-2 w-50 pt-4'>
                            <input type="text" value={productName} id="email" placeholder="Product Name" className="input input-bordered w-full max-w-lg" onChange={(e)=>setProductName(e.target.value)} />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 px-4'>
                        <div className='w-50 pt-8'>
                            <select className="select select-info w-full max-w-xs"  onChange={handleChangeSize}>
                                <option disabled selected>Size</option>
                                <option value={'250mg'}>250mg</option>
                                <option value={'300mg'}>300mg</option>
                                <option value={'300mg'}>350mg</option>
                            </select>
                        </div>
                        <div className='w-50 pt-8'>
                            <select className="select select-info w-full max-w-xs"  onChange={handleChangeCategory}>
                                <option disabled selected>Category</option>
                                <option value={'tost'}>tost</option>
                                <option value={'cake'}>cake</option>
                                <option value={'juice'}>juice</option>
                            </select>
                        </div>
                        <div className='w-50 pt-8'>
                            <div className="form-control">
                                {/* <label className="label">
                                    <span className="label-text">Enter amount</span>
                                </label> */}
                                <label className="input-group">
                                    <input type="text" value={stockNumber} placeholder="Add Stock" className="input input-bordered" onChange={(e)=>setStockNumber(e.target.value)}/>
                                    <span>Pac</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 py-8 px-4'>
                        {/* <div className='w-80 pt-8'> */}
                            <button onClick={handleClear} className="btn bg-red-600 hover:bg-red-500 text-black">Clear</button>
                            <button onClick={handleSubmit} className="btn bg-lime-600 hover:bg-lime-500 text-black">Add</button>
                        {/* </div> */}
                    </div>
                </div>
            </form>
            {hideTable ? <p></p>: <Table data={showTable} />}
        </div>
    );
};

export default AddStock;