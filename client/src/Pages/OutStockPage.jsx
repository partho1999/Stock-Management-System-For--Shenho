import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import Table from '../Components/Table';
import axios from 'axios';

const OutStockPage = () => {
    const [haveTable, SetHaveTable] = useState(false);
    const [outStockData, setOutStockData] = useState([]);
    const [outStockHeading, setOutStockHeading] = useState([]);


    useEffect(()=>{
        (async()=>{
            const response = await axios.get('http://localhost:5000/data');
            const jsonData = response.data;
            const filteredData = jsonData.filter(item => parseInt(item.StockNumber)===0);
            if (filteredData.length > 0) {
                setOutStockHeading(Object.keys(filteredData[0]));
                setOutStockData(filteredData);
                SetHaveTable(true)
            }
         
        })()
    },[])

    return (
        <Layout>
            {haveTable ? <Table head={outStockHeading} data={outStockData}/> : <p>there is no data!</p>}
            
            
        </Layout>
    );
};

export default OutStockPage;