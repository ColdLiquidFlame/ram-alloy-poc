import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
const Dashboard = () => {
    const [rowData] = useState([
        { WO: '212', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '212', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '212', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '212', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '212', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '212', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '212', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '212', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '212', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '212', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '212', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '212', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '212', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '212', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '212', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '212', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '212', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '212', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '212', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '212', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},

      ]);
    
      const [columnDefs] = useState([
        { field: 'WO', filter:true, sortable:true},
        { field: 'Date', filter:true, sortable:true },
        { field: 'Time', filter:true, sortable:true },
        { field: 'User', filter:true, sortable:true },
        { field: 'link', filter:true, sortable:true },
        { field: 'status', filter:true, sortable:true }
        
      ]);
    
      return (
        <div className="ag-theme-alpine">
          <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
        </div>
      );
    };
    
    render(<Dashboard />, document.getElementById('root'));
    

export default Dashboard;
