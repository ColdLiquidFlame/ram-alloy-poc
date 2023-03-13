import { TextField, Button, Link } from "@mui/material";
import React, { useState } from 'react';
import QRCode from "react-qr-code";
// import {theme} from "./theme";
 const QRCodeGenerator = () => {
    const [value, setValue] = useState('');
    
    return (
          <div className="qrtext">
            <TextField 
               id="standard-basic"
               label="Order Id"
               className="classes.textfield"
               value={value}
               variant="filled"
               size="large"
               color="primary"
               onChange={(e) => setValue(e.target.value)}
              />
            <QRCode value={"https://zealous-plant-09bf75710.2.azurestaticapps.net/order/" + value}/>
            {value && <> <Link href={value} download={"work #.pdf"}>
                <Button type="button">Download Cover Sheet</Button>
              </Link>
            </>}
          </div>
    );
  }

 export default QRCodeGenerator;