import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashPage from './Pages/DashPage';
import InStockPage from './Pages/InStockPage';
import AuthPage from './Pages/AuthPage';
import AddStockPage from './Pages/AddStockPage';
import ManageStockPage from './Pages/ManageStockPage';
import OutStockPage from './Pages/OutStockPage';
import ReportPage from './Pages/ReportPage';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthPage/>}/>
          <Route path="/dashboard" element={<DashPage/>}/>
          <Route path="/instock" element={<InStockPage/>}/>
          <Route path="/outstock" element={<OutStockPage/>}/>
          <Route path="/add-stock" element={<AddStockPage/>}/>
          <Route path="/manage-stock" element={<ManageStockPage/>}/>
          <Route path="/report" element={<ReportPage/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;