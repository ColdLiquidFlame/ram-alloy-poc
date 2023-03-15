import {useParams } from "react-router-dom";
import React ,{useState} from 'react'
import { Button, MenuItem, Select, FormControl, InputLabel} from "@mui/material/";

// import { Form, Field } from 'react-final-form'


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
    <FormControl fullWidth>
      <InputLabel>Sales</InputLabel>
        <div>Order # {orderId}
          <h2>Sales</h2>
            <strong>1. Setect location</strong>
            <Select value={value} onChange={handleChange} placeholder={'Enter Name'}>
              <MenuItem  value="">Select</MenuItem >
              <MenuItem  value="Sales Desk">Sales Desk</MenuItem > 
              <MenuItem  value="Reviewed/Approved">Reviewed/Approved</MenuItem >
              <MenuItem  value="Return to Sales">Return to Sales</MenuItem >
            </Select>
            <strong>2. Setect status</strong>
            <Select value={value} onChange={handleChange} placeholder={'Enter Name'}>
              <MenuItem  value="">Select</MenuItem >
              <MenuItem  value="Started">Started</MenuItem > 
              <MenuItem  value="Processing">Processing</MenuItem >
              <MenuItem  value="Finished">Finished</MenuItem >
            </Select>
          <Button>submit</Button>
        </div>
    </FormControl>
  );
}
export default Orders;





