import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import Table from '../Components/Table';
import axios from 'axios';

const InStockPage = () => {
    const [haveTable, SetHaveTable] =useState(false);
    const [inStockData, setInStockData] = useState([]);
    const [inStockHeading, setInStockHeading] = useState([]);


    useEffect(()=>{
        (async()=>{
            const response = await axios.get('http://localhost:5000/data');
            const jsonData = response.data;
            const filteredData = jsonData.filter(item => parseInt(item.StockNumber)>0);
            if (filteredData.length > 0) {
                setInStockHeading(Object.keys(filteredData[0]));
                setInStockData(filteredData);
                SetHaveTable(true)
            }
         
        })()
    },[])

    return (
        <Layout>
            {haveTable ? <Table head={inStockHeading} data={inStockData}/> : <p>there is no data!</p>}
            
            
        </Layout>
    );
};

export default InStockPage;