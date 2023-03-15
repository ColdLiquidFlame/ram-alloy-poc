import {useParams } from "react-router-dom";
import React ,{useState} from 'react'
import { Button, MenuItem, Select, FormControl, Box, Typography } from "@mui/material/";
import { makeStyles, createStyles} from "@mui/styles";

// import { Form, Field } from 'react-final-form'
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
const useStyles = makeStyles((theme) => createStyles({
  Button: { color: 'primary', width: '200px', height: '50px',  fontSize: '16px', borderRight: '2px solid' },
  Box: { display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' },
  FormControl:{alignContent:'center'},
  Typography:{},
  Select:{alignContent:'center'},
  MenuItem:{},
}));
const Orders = () =>{
  const getInitialState = () => {
  const value = "";
  return value;
};
const classes = useStyles();

const [value, setValue] = useState(getInitialState);

const handleChange = (e) => {
  setValue(e.target.value);
};

let { orderId } = useParams();
  return(
    
    <div className="flexboxItem content" style={styles.content}> 
      <Box className={classes.Box}>
        <h2>Sales</h2>
        <div>Order # {orderId}</div>
      </Box>
        <FormControl className={classes.FormControl} fullWidth>
            <Box className={classes.Box}>
              <Typography  className={classes.InputLabel}>1. Setect location</Typography >
            </Box>
              <Box className={classes.Box}>
                <Select className={classes.Select} value={value} onChange={handleChange} placeholder={'Enter Name'}>
                  <MenuItem className={classes.MenuItem}  value="Sales Desk">Sales Desk</MenuItem > 
                  <MenuItem className={classes.MenuItem} value="Reviewed/Approved">Reviewed/Approved</MenuItem >
                  <MenuItem className={classes.MenuItem} value="Return to Sales">Return to Sales</MenuItem >
                </Select>
              </Box>
              <Box className={classes.Box}>
                <Typography  className={classes.Typography}>2. Setect status</Typography >
              </Box>
              <Box className={classes.Box}>
                <Select className={classes.Select} value={value} onChange={handleChange} placeholder={'Enter Name'}>
                  <MenuItem className={classes.MenuItem} value="Started">Started</MenuItem > 
                  <MenuItem className={classes.MenuItem} value="Processing">Processing</MenuItem >
                  <MenuItem className={classes.MenuItem} value="Finished">Finished</MenuItem >
                </Select>
              </Box>
            <Box className={classes.Box}>
              <Button className={classes.Button}>submit</Button>
            </Box>
      </FormControl>
  </div>
  );
}
export default Orders;





