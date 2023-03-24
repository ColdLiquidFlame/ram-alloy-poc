import {
  Alert,
  Backdrop,
  Box,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../Shared/Button";
import useAuthenticatedUser from "../Hooks/useAuthenticatedUser";
import OrderTrackingService from "../Services/OrderTracking";
import stations from "../Config/stations";

const Orders = () => {
  let { orderId } = useParams();
  const [open, setOpen] = useState(false);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [station, setStation] = useState("");
  const [status, setStatus] = useState("");
  const [buckets, setBuckets] = useState([]);
  const { roles, user } = useAuthenticatedUser();

  useEffect(() => {
    const options = (roles ?? []).reduce((options, role) => {
      return [...options, ...(stations[role] ?? [])];
    }, []);

    setBuckets(options);
  }, [roles]);

  const handleStationChange = (e) => {
    setStation(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleButtonClick = async () => {
    setOpen(true);
    await OrderTrackingService.addLogToOrder(orderId, {
      status,
      station,
      user,
      createdDate: new Date(),
    });
    setStation("");
    setStatus("");
    setOpen(false);
    setSnackBarOpen(true);
  };

  return (
    <>
      <Snackbar
        open={snackBarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackBarOpen(false)}
      >
        <Alert
          severity="success"
          sx={{ width: "100%" }}
          elevation={6}
          variant="filled"
        >
          Log saved
        </Alert>
      </Snackbar>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "1em",
          width: "200px",
        }}
      >
        <Box>
          <Typography variant="h4">
            {roles.map((r) => r.charAt(0).toUpperCase() + r.slice(1)).join("/")}
          </Typography>
          <Typography variant="div">Order # {orderId}</Typography>

          <Button component={Link} to={`/order/${orderId}/view`}>
            View Logs
          </Button>
        </Box>
        <FormControl sx={{ width: "200px" }}>
          <InputLabel id="station-select">Station</InputLabel>
          <Select
            label="Station"
            labelId="station-select"
            value={station}
            onChange={handleStationChange}
          >
            {buckets.map((bucket) => (
              <MenuItem key={bucket} value={bucket}>
                {bucket}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ width: "200px" }}>
          <InputLabel id="status-select">Status</InputLabel>
          <Select
            label="Status"
            labelId="status-select"
            value={status}
            onChange={handleStatusChange}
          >
            <MenuItem value="Started">Started</MenuItem>
            <MenuItem value="Processing">Processing</MenuItem>
            <MenuItem value="Finished">Finished</MenuItem>
          </Select>
        </FormControl>
        <Button
          onClick={handleButtonClick}
          disabled={status === "" || station === ""}
        >
          submit
        </Button>
      </Box>
    </>
  );
};

export default Orders;
