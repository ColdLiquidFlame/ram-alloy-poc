import { TextField, Button, Link, Box } from "@mui/material";
import React, { useState } from 'react';
import QRCode from "react-qr-code";

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

    return (
      <div className="flexboxItem content" style={styles.content}> 
        <Box>
          <TextField 
            label="Order #"
            variant="filled"
            value={value}
            onChange={(e) => setValue(e.target.value)}/>
        </Box>
        <Box>
          <QRCode value={"https://zealous-plant-09bf75710.2.azurestaticapps.net/order/" + value}/>
        </Box>
        <Box>
          {value && <> <Link href={value} download={"work #.pdf"}>
            <Button type="button">Download Cover Sheet</Button>
            </Link>
          </>}
        </Box>
      </div>
    );
  }

 export default QRCodeGenerator;