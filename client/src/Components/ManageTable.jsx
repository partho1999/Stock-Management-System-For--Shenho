import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const ManageTable = ({data}) => {
    // const [editedData, setEditedData] = useState({});
    const [id, setId] = useState('')
    const [manageData, setManageData] =useState(data);
    console.log("getData:", manageData)
    
    
    
    const UpdateValue =  (id, newValue) => {
        setManageData(prevData => {
        const updatedData = prevData.map(item => {
            if (item.id === id) {
            return { ...item, StockNumber: newValue };
            }
            return item;
        });
        return updatedData;
        }); 
        setId(id)
    };
    
    const updateStock =async(id)=>{
        const updatedItem = manageData.find(item => item.id === id);
        console.log(updatedItem)
        await axios.put(`http://localhost:5000/data/${id}`, updatedItem);
    }  
   
    
    useEffect(()=>{
       if(id != ''){
        updateStock(id)
       }
        
        
    },[manageData])
    
    const hanldeDelete=async(id)=>{
        await axios.delete(`http://localhost:5000/data/${id}`);
        const remainingItems = manageData.filter(
            (item) => item.id !== id
        );

        setManageData(remainingItems);
    }
   
    
    return (
        <div>
            <div className='flex'></div>
            <div className="overflow-x-auto h-96">
                <table className="table  table-pin-rows table-pin-cols text-center">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>SL</th>
                        <th>Code</th>
                        <th>Product Name</th>
                        <th>Product Size</th>
                        <th>Product Category</th>
                        <th>Stock Amount</th>
                        <th>Status</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {
                        manageData.map((item, index)=>{
                            return(
                                // eslint-disable-next-line react/jsx-key
                                <tr key={item.id}>
                                    <th>{index + 1}</th>
                                    <td>{item.Code}</td>
                                    <td>{item.ProductName}</td>
                                    <td>{item.SelectSize}</td>
                                    <td>{item.SelectCategory}</td>
                                    <td><input
                                            className='w-20 rounded h-10 text-center'
                                            type="text"
                                            value={item.StockNumber}
                                            onChange={e => UpdateValue(item.id, e.target.value)}
                                            
                                        />
                                    </td>
                                    <td>
                                        {parseInt(item.StockNumber)>0 ? <div className="badge bg-green-600 text-white my-4">In Stock</div> : <div className="badge bg-red-600 text-white my-4">Out Stock</div>}
                                    </td>
                                    <td>
                                        <button className="btn btn-circle btn-outline">
                                            <svg xmlns="http://www.w3.org/2000/svg" onClick={e=>hanldeDelete(item.id)} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    
                   
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageTable;