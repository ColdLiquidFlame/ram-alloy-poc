import {useParams } from "react-router-dom";
import React ,{useState} from 'react'
import { Button, MenuItem, Select, FormControl, Box, Typography } from "@mui/material/";

const styles = {
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
}

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
    
    <div className="flexboxItem content" style={styles.content}> 
      <Box>
        <h2>Sales</h2>
        <div>Order # {orderId}</div>
      </Box>
        <FormControl fullWidth>
            <Box>
              <Typography>1. Setect location</Typography >
            </Box>
              <Box>
                <Select value={value} onChange={handleChange} placeholder={'Enter Name'}>
                  <MenuItem value="Sales Desk">Sales Desk</MenuItem > 
                  <MenuItem value="Reviewed/Approved">Reviewed/Approved</MenuItem >
                  <MenuItem value="Return to Sales">Return to Sales</MenuItem >
                </Select>
              </Box>
              <Box>
                <Typography>2. Setect status</Typography >
              </Box>
              <Box>
                <Select value={value} onChange={handleChange} placeholder={'Enter Name'}>
                  <MenuItem value="Started">Started</MenuItem > 
                  <MenuItem value="Processing">Processing</MenuItem >
                  <MenuItem value="Finished">Finished</MenuItem >
                </Select>
              </Box>
            <Box>
              <Button>submit</Button>
            </Box>
      </FormControl>
  </div>
  );
}
export default Orders;





