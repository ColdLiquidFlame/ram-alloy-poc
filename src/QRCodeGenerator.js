import { TextField } from "@mui/material";
import React, { useState } from 'react';
import QRCode from "react-qr-code";
import Button from "@mui/material/Button";
import useStyles from './Styles';

 const QRCodeGenerator = () => {
    const [value, setValue] = useState('');
    const classes = useStyles();

    return (
      <div className="content">
        <div className="qrcodecontent">
          <div className="text">
            <TextField className="classes.textfield" label="Order Id" value={value}
               onChange={(e) => setValue(e.target.value)}
            />
          <div className="qr">
            <QRCode value={"https://zealous-plant-09bf75710.2.azurestaticapps.net/order/" + value}/>
          </div>
            {value && <> <a href={value} download={"work#.pdf"}>
             
            <Button className={classes.buttons}>Download Cover Sheet</Button>
              </a>
            </>}
          </div>
        </div>
      </div>
    );
  }

 export default QRCodeGenerator;