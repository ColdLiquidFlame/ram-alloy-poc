import { TextField, Button, Link, Box } from "@mui/material";
import React, { useState } from 'react';
import { makeStyles, createStyles} from "@mui/styles";
import QRCode from "react-qr-code";
const useStyles = makeStyles((theme) => createStyles({
  Button: { color: 'white', width: '200px', height: '50px',display: 'inline-flexbox',  background: 'lightGreen',  fontSize: '16px'},
  Box: {  display:'block', alignItems:"center", justifyContent:"center"} ,
  TextField: { color:'primary', size:'large'}
}));
 const QRCodeGenerator = () => {
    const [value, setValue] = useState('');
    const classes = useStyles();

    return (
      <Box className={classes.Box}>
        <TextField 
          label="Order #"
          className={classes.TextField}
          variant="filled"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Box className={classes.Box}>
          <QRCode value={"https://zealous-plant-09bf75710.2.azurestaticapps.net/order/" + value}/>
        </Box>
        <Box className={classes.Box}>
          {value && <> <Link href={value} download={"work #.pdf"}>
            <Button type="button">Download Cover Sheet</Button>
            </Link>
          </>}
        </Box>
      </Box>
    );
  }

 export default QRCodeGenerator;