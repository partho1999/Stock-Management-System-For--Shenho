import React from 'react';

const DashTable = ({data}) => {
    return (
        <div>
            <div className="overflow-x-auto w-full h-96">
                <table className="table  table-pin-rows table-pin-cols text-center ">
                    {/* head */}
                    <thead>
                    <tr>
                        
                        <th>Code</th>
                        <th>Product Name</th>
                        <th>Product Size</th>
                        <th>Stock Amount</th>
                        <th>Stock Status</th>
                        
                        
                    </tr>
                    </thead>
                    <tbody>
                        {
                            // eslint-disable-next-line react/prop-types
                            data.map((item, index)=>{
                                return(
                                    // eslint-disable-next-line react/jsx-key
                                    <tr>
                                        
                                        <td>{item.Code}</td>
                                        <td>{item.ProductName}</td>
                                        <td>{item.SelectSize}</td>
                                        <td>{item.StockNumber}</td>
                                        <td>
                                            {parseInt(item.StockNumber)>0 ? <div className="badge badge-sm bg-green-600 text-white text-sm my-4">In</div> : <div className="badge badge-sm bg-red-600 text-white text-sm my-4">Out</div>}
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

export default DashTable;