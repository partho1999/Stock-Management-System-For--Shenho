import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import axios from 'axios';
import DashTable from '../Components/DashTable';

const DashPage = () => {
    const [haveTable, SetHaveTable] =useState(false);
    const [inStockData, setInStockData] = useState([]);
    const [inStockHeading, setInStockHeading] = useState([]);


    useEffect(()=>{
        (async()=>{
            const response = await axios.get('http://localhost:5000/data');
            const jsonData = response.data;
            
            if (jsonData.length > 0) {
                setInStockHeading(Object.keys(jsonData[0]));
                setInStockData(jsonData);
                SetHaveTable(true)
            }
         
        })()
    },[])
    return (
        <Layout>
           <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className="grid grid-cols-3 gap-4 mt-5">
                        <div className="card w-25 h-32 badge-warning shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className="card w-25 h-32 badge-info shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className="card w-25 h-32 badge-success shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className="card w-25 h-32 badge-error shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>
                                <p>1000</p>
                            </div>
                        </div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        {haveTable ? <DashTable  data={inStockData}/> : <p>there is no data!</p>}
                    </div>
                    <div>2</div>
                </div>
                <div>3</div>
           </div>
        </Layout>
    );
};

export default DashPage;