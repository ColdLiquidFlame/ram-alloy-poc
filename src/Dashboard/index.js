import { Link } from "react-router-dom";
import React, { useCallback, useState } from "react";

import OrderTrackingService from "../Services/OrderTracking";
import { Box } from "@mui/material";
import moment from "moment/moment";
import useAuthenticatedUser from "../Hooks/useAuthenticatedUser";
import DataGrid from "../Shared/Grid";

const columnDefs = [
  {
    width: 100,
    cellRenderer: (params) => (
      <Link to={`order/${params.data.id}/view`}>View Logs</Link>
    ),
  },
  {
    field: "id",

    headerName: "WO#",
  },
  {
    field: "createdDate",
    valueFormatter: (params) =>
      params?.data?.createdDate
        ? moment(params?.data?.createdDate).format("MM/DD/YYYY h:mm a")
        : null,
  },
  {
    field: "user.nickname",
    headerName: "User",
  },
  {
    headerName: "PDF",

    cellRenderer: (params) => (
      <Link to={`order/${params.data.id}/pdf`}>View PDF</Link>
    ),
  },
  { field: "status" },
];

const Dashboard = () => {
  const [orders, setOrders] = useState([]);

  useAuthenticatedUser();

  const onGridReady = useCallback(async () => {
    const orders = await OrderTrackingService.getOrders();
    setOrders(orders);
  }, []);

  return (
    <Box>
      <DataGrid
        rowData={orders}
        columnDefs={columnDefs}
        onGridReady={onGridReady}
      />
    </Box>
  );
};

export default Dashboard;
