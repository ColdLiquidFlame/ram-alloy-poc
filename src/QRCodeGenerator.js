import { TextField } from "@mui/material";
import React, { useState } from 'react';
import QRCode from "react-qr-code";

 const QRCodeGenerator = () => {
    const [value, setValue] = useState('');
    
    return (
      // <div className="content">
        <div className="qrcodecontent">
          <div className="qrtext">
            <TextField style={{backgroundColor: "lightgrey",marginBottom: 20,}}
               id="standard-basic"
               label="Order Id"
               className="classes.textfield"
               value={value}
               variant="filled"
               size="large"
               color="primary"
               onChange={(e) => setValue(e.target.value)}
              />
          <div className="qr">
            <QRCode value={"https://zealous-plant-09bf75710.2.azurestaticapps.net/order/" + value}/>
            {/* <QRCode value={"https://localhost:3000/order/" + value}/> */}

          </div>
            {value && <> <a href={value} download={"work#.pdf"}>
              <div className="QRButton">
                <button type="button">Download Cover Sheet</button>
              </div>
              </a>
            </>}
          </div>
        </div>
      // </div>
    );
  }

 export default QRCodeGenerator;