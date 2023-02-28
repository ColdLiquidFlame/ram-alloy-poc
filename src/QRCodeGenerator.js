import { TextField } from "@mui/material";
import { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [value, setValue] = useState(1234);
  return (
    <div style={{ background: "white", padding: "16px" }}>
      <TextField
        label="Order Id"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "25%", width: "25%" }}
        value={
          "https://zealous-plant-09bf75710.2.azurestaticapps.net/order/" + value
        }
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};

export default QRCodeGenerator;
