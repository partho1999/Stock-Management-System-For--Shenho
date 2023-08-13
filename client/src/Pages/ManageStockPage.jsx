import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import axios from 'axios';
import ManageTable from '../Components/ManageTable';

const ManageStockPage = () => {
    const [haveTable, SetHaveTable] =useState(false);
    const [manageStockData, setManageStockData] = useState([]);


    useEffect(()=>{
        (async()=>{
            const response = await axios.get('http://localhost:5000/data');
            const jsonData = response.data;
            if (jsonData.length > 0) {
                setManageStockData(jsonData);
                SetHaveTable(true)
            }
         
        })()
    },[])
    return (
        <Layout>
            {haveTable ? <ManageTable  data={manageStockData}/> : <p>there is no data!</p>}
        </Layout>
    );
};

export default ManageStockPage;