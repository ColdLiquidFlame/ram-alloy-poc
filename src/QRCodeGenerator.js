import { TextField, Button, Link, Box } from "@mui/material";
import React, { useState } from 'react';
import { makeStyles, createStyles} from "@mui/styles";
import QRCode from "react-qr-code";
const useStyles = makeStyles((theme) => createStyles({
  Button: { color: 'primary', width: '200px', height: '50px',  fontSize: '16px', borderLeft: 'px solid' },
  Box: { display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingBottom:'20px' },
  TextField: { color:'primary', size:'large'},
  Link:{ color:'primary' }
}));
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
 const QRCodeGenerator = () => {
    const [value, setValue] = useState('');
    const classes = useStyles();

    return (
      <div className="flexboxItem content" style={styles.content}> 
        <Box className={classes.Box}>
          <TextField 
            label="Order #"
            className={classes.TextField}
            variant="filled"
            value={value}
            onChange={(e) => setValue(e.target.value)}/>
        </Box>
        <Box className={classes.Box}>
          <QRCode value={"https://zealous-plant-09bf75710.2.azurestaticapps.net/order/" + value}/>
        </Box>
        <Box className={classes.Box}>
          {value && <> <Link href={value} download={"work #.pdf"} className={classes.Link}>
            <Button className={classes.Button} type="button">Download Cover Sheet</Button>
            </Link>
          </>}
        </Box>
      
      </div>
    );
  }

 export default QRCodeGenerator;