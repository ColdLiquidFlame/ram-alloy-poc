import { useParams } from "react-router-dom";

import React ,{useState} from 'react'
// import Button from "@mui/material/Button";
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';


// import { Menu, MenuItem, MenuButton , SubMenu} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';



const Orders = () =>{
  const getInitialState = () => {
    const value = "";
    return value;
  };
  
  const [value, setValue] = useState(getInitialState);
  
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
  let { orderId } = useParams();
    return(
      <div className="ordertext">
        <div>Order # {orderId}
        <h2>Sales</h2>
        <strong>1. Setect location</strong>
        <div className="selectb">
          <select value={value} onChange={handleChange} placeholder={'Enter Name'}>
            <option value="">Select</option>
            <option value="Sales Desk">Sales Desk</option> 
            <option value="Reviewed/Approved">Reviewed/Approved</option>
            <option value="Return to Sales">Return to Sales</option>
          </select>
        </div>
        <strong>2. Setect status</strong>
          <div className="selectb">
            <select value={value} onChange={handleChange} placeholder={'Enter Name'}>
              <option value="">Select</option>
              <option value="Started">Started</option> 
              <option value="Processing">Processing</option>
              <option value="Finished">Finished</option>
            </select>
          </div>
          <div className="orderbutton">
            <button>submit</button>
          </div>
       </div>
      </div>
    );
}
export default Orders;






// const Orders = () => { 
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   return (
//     <div className='orderScreen'>
//     <div>
//     <div className="orderbutton">
//       <button onClick={handleClick}>Location</button>
//     </div>
//     {/* </div><Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}> */}
//       {/* Open Menu */}
//     {/* </Button> */}
//     <Menu
//       id="simple-menu"
//       anchorEl={anchorEl}
//       keepMounted
//       open={Boolean(anchorEl)}
//       onClose={handleClose}
//     >
//       <MenuItem onClick={handleClose}>Station1</MenuItem>
//       <MenuItem onClick={handleClose}>Station2</MenuItem>
//       <MenuItem onClick={handleClose}>Station3</MenuItem>
//     </Menu>
//     </div>
//     </div>
    
    
// );
// };

// export default Orders;
