import React from 'react';

const Table = ({data}) => {
    return (
        <div>
            <div className="overflow-x-auto h-96">
                <table className="table  table-pin-rows table-pin-cols text-center ">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>SL</th>
                        <th>Code</th>
                        <th>Product Name</th>
                        <th>Product Size</th>
                        <th>Product Category</th>
                        <th>Stock Amount</th>
                        
                        
                    </tr>
                    </thead>
                    <tbody>
                        {
                            // eslint-disable-next-line react/prop-types
                            data.map((item, index)=>{
                                return(
                                    // eslint-disable-next-line react/jsx-key
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td>{item.Code}</td>
                                        <td>{item.ProductName}</td>
                                        <td>{item.SelectSize}</td>
                                        <td>{item.SelectCategory}</td>
                                        <td>{item.StockNumber}</td>
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

export default Table;