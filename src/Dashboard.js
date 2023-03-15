import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
// import { Box } from "@mui/material";
// import { makeStyles, createStyles} from "@mui/styles";


const Dashboard = () => {

    const [rowData] = useState([
        { WO: '210', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '212', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '206', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '298', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '233', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '423', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '534', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '235', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '267', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '287', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '322', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '245', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '212', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '267', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '288', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '249', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '655', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '222', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '245', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},
        { WO: '302', Date: '02/01/2023', Time: '10:23am',  User: '600', link: 'www.order213.com', status:'pending'},

      ]);
    
      const [columnDefs] = useState([
        { field: 'WO', filter:true, sortable:true},
        { field: 'Date', filter:true, sortable:true },
        { field: 'Time', filter:true, sortable:true },
        { field: 'User', filter:true, sortable:true },
        { field: 'link', filter:true, sortable:true },
        { field: 'status', filter:true, sortable:true }
        
      ]);
      const style = {
        flexboxContainer:{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        },
        flexboxItem:{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          alignContent: 'center'
        },
        content:{
          background: 'linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%)',
          backgroundSize: 'cover',
        },
        agThemeAlpine:{
          height: '800px',
          paddingLeft: '50px',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center',
          paddingTop: '60px',
          paddingBottom: '50px',
          paddingRight: '50px'  
        }

      }
      return (
        <div class="flexboxContainer flexboxItem" style={style.content}>
          <div className="ag-theme-alpine" style={{
          height: '800px',
          paddingLeft: '50px',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center',
          paddingTop: '60px',
          paddingBottom: '50px',
          paddingRight: '50px'  
        }}>
          
            <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
        </div>
      </div>

      );
    };
    
    render(<Dashboard />, document.getElementById('root'));
    

export default Dashboard;
