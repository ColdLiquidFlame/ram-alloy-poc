import { TextField } from "@mui/material";
import React, { useState } from 'react';
import QRCode from "react-qr-code";
import ReactDOM from "react-dom";
import { Button } from '@mui/material'
 const QRCodeGenerator = () => {
    const [value, setValue] = useState('');
    const [url, setUrl] = useState('')
    const [qr, setQr] = useState('')
    const GenerateQRCode = () => {
        QRCode.toDataURL(url, {
            width: 800,
            margin: 2,
            color: {
                // dark: '#335383FF',
                // light: '#EEEEEEFF'
            }
        }, (err, url) => {
            if (err) return console.error(err)
            console.log(url)
            setQr(url)
        })
    }
    return (
      <div className="qrcodecontent">
            <div className="text">
             <TextField
               label="Order Id"
               value={value}
               onChange={(e) => setValue(e.target.value)}
             />
           <div className="qr">
               <QRCode value={"https://zealous-plant-09bf75710.2.azurestaticapps.net/order/" + value}/>
             </div>
              {value && <>
              <a href={value} download={"work#.pdf"}>
                <div className="QR Code Button">
                  <button type="button">Download Cover Sheet</button>
              </div>
              </a>
                </>}
              </div>
           </div>

         );
       }

 export default QRCodeGenerator;