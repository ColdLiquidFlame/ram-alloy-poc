import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { AgGridReact } from "ag-grid-react";
import { Link } from "react-router-dom";
import React, { useCallback, useRef, useState } from "react";

import OrderTrackingService from "../Services/OrderTracking";
import { Box } from "@mui/material";
import moment from "moment/moment";
import useAuthenticatedUser from "../Hooks/useAuthenticatedUser";

const columnDefs = [
  {
    width: "100px",
    cellRenderer: (params) => (
      <Link to={`order/${params.data.id}/view`}>View Logs</Link>
    ),
  },
  {
    field: "id",
    filter: true,
    sortable: true,
    headerName: "WO#",
    resizable: true,
  },
  {
    field: "createdDate",
    filter: true,
    sortable: true,
    valueFormatter: (params) =>
      params?.data?.createdDate
        ? moment(params?.data?.createdDate).format("MM/DD/YYYY h:mm a")
        : null,
    flex: 1,
    resizable: true,
  },
  {
    field: "user.nickname",
    headerName: "User",
    filter: true,
    sortable: true,
    flex: 1,
    resizable: true,
  },
  {
    headerName: "PDF",
    filter: true,
    sortable: true,
    cellRenderer: (params) => (
      <Link to={`order/${params.data.id}/pdf`}>View PDF</Link>
    ),
    flex: 1,
    resizable: true,
  },
  { field: "status", filter: true, sortable: true, flex: 1, resizable: true },
];

const resizeColumns = (gridApi, columnApi) => {
  const allColumnIds = [];
  columnApi.getColumns().forEach((column) => {
    allColumnIds.push(column.getId());
  });
  columnApi.autoSizeColumns(allColumnIds, false);
};

const Dashboard = () => {
  const gridRef = useRef();
  useAuthenticatedUser();

  const onFirstDataRendered = useCallback(() => {
    resizeColumns(gridRef.current.api, gridRef.current.columnApi);
  }, [gridRef]);

  const onGridReady = useCallback(async (params) => {
    const orders = await OrderTrackingService.getOrders();
    setOrders(orders);

    window.addEventListener("resize", function () {
      resizeColumns(params.api, params.columnApi);
      setTimeout(function () {
        resizeColumns(params.api, params.columnApi);
      });
    });
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
              gridOptions={{ colResizeDefault: true }}
              onGridReady={onGridReady}
              domLayout="autoHeight"
              onFirstDataRendered={onFirstDataRendered}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
