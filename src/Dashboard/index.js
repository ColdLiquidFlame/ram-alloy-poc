import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { AgGridReact } from "ag-grid-react";
import { Link } from "react-router-dom";
import React, { useCallback, useEffect, useRef, useState } from "react";

import OrderTrackingService from "../Services/OrderTracking";
import { Box } from "@mui/material";
import moment from "moment/moment";

const columnDefs = [
  {
    cellRenderer: (params) => {
      return params.data?.logs?.some(
        (log) => log !== undefined || log !== null
      ) ? (
        <Link to={`order/${params.data.id}/view`}>View Logs</Link>
      ) : null;
    },
  },
  { field: "id", filter: true, sortable: true, headerName: "WO#" },
  {
    field: "createdDate",
    filter: true,
    sortable: true,
    valueFormatter: (params) =>
      params?.data?.createdDate
        ? moment(params?.data?.createdDate).format("MM/DD/YYYY h:mm a")
        : null,
  },
  { field: "user.nickname", headerName: "User", filter: true, sortable: true },
  {
    headerName: "PDF",
    filter: true,
    sortable: true,
    cellRenderer: (params) => (
      <Link to={`order/${params.data.id}/pdf`}>View PDF</Link>
    ),
  },
  { field: "status", filter: true, sortable: true },
];

const Dashboard = () => {
  const gridRef = useRef();
  useEffect(() => {
    async function fetchOrders() {
      var orders = await OrderTrackingService.getOrders();

      setOrders(orders);
    }

    fetchOrders();
  }, []);

  const onGridReady = useCallback((params) => {
    params.api.sizeColumnsToFit();
    window.addEventListener("resize", function () {
      setTimeout(function () {
        params.api.sizeColumnsToFit();
      });
    });

    gridRef.current.api.sizeColumnsToFit();
  }, []);

  const [orders, setOrders] = useState([]);

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box sx={{ display: "flex", flexDirection: "row", height: "100%" }}>
        <Box sx={{ overflow: "hidden", flexGrow: "1" }}>
          <Box
            sx={{ height: "100%", width: "100%" }}
            className="ag-theme-alpine"
          >
            <AgGridReact
              ref={gridRef}
              rowData={orders}
              columnDefs={columnDefs}
              onGridReady={onGridReady}
              domLayout="autoHeight"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
