import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import DatabaseService from '../Services/Database';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


const columnDefs = [
  { field: 'id', filter:true, sortable:true, headerName: "WO#" },
  { field: 'Date', filter:true, sortable:true },
  { field: 'Time', filter:true, sortable:true },
  { field: 'User', filter:true, sortable:true },
  { field: 'link', filter:true, sortable:true },
  { field: 'status', filter:true, sortable:true }        
]


const Dashboard = () => {
    useEffect(() => { 
      async function fetchOrders() {
        var orders = await DatabaseService.getOrders();

        setOrders(orders);
      }

      fetchOrders();
    }, [])

    const [orders, setOrders] = useState([]);
    
      return (
        <div className="ag-theme-alpine">
          <AgGridReact rowData={orders} columnDefs={columnDefs} />
        </div>
      );
    };    

export default Dashboard;
