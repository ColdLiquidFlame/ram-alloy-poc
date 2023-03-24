import { Link } from "react-router-dom";
import React, { useCallback, useEffect, useRef, useState } from "react";

import OrderTrackingService from "../Services/OrderTracking";
import { Box } from "@mui/material";
import moment from "moment/moment";
import useAuthenticatedUser from "../Hooks/useAuthenticatedUser";
import DataGrid from "../Shared/Grid";
import QrPrintPreview from "../QRCodeGenerator/QrPrintPreview";
import { useReactToPrint } from "react-to-print";

const orderStatusValueGetter = ({ data: { logs = [] } }) => {
  const cancelledOrClosed = logs.filter((l) =>
    ["Closed", "Cancel"].includes(l.station)
  );
  const isCancelledOrClosed = cancelledOrClosed.length !== 0;
  if (isCancelledOrClosed) {
    const [value] = cancelledOrClosed;
    return value.station;
  }

  return "In progress";
};

const Dashboard = () => {
  const ref = useRef();
  const [orderId, setOrderId] = useState();
  const [orders, setOrders] = useState([]);
  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });

  useEffect(() => {
    if (orderId !== undefined) {
      handlePrint();
    }
  }, [orderId, handlePrint]);

  useAuthenticatedUser();

  const columnDefs = [
    {
      sortable: false,
      filter: false,
      cellRenderer: (params) => (
        <Link to={`order/${params.data.id}/view`}>View Logs</Link>
      ),
    },
    {
      field: "id",
      headerName: "WO#",
    },
    {
      minWidth: 150,
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
      sortable: false,
      filter: false,
      headerName: "PDF",
      cellRenderer: ({ data: { id } }) => {
        return <Link onClick={() => setOrderId(id)}>View PDF</Link>;
      },
    },
    {
      field: "status",
      valueGetter: orderStatusValueGetter,
      filterParams: {
        filterValueGetter: orderStatusValueGetter,
        defaultOption: "notEqual",
      },
    },
  ];

  const onGridReady = useCallback(async ({ api }) => {
    const orders = await OrderTrackingService.getOrders();
    setOrders(orders);

    const currentModel = api.getFilterModel();
    const newFilterModel = {
      ...currentModel,
      status: {
        filterType: "text",
        operator: "AND",
        condition1: { filterType: "text", type: "notEqual", filter: "Closed" },
        condition2: { filterType: "text", type: "notEqual", filter: "Cancel" },
      },
    };
    api.setFilterModel(newFilterModel);
  }, []);

  return (
    <>
      <Box sx={{ display: "none" }}>
        <QrPrintPreview ref={ref} orderId={orderId} />
      </Box>
      <Box>
        <DataGrid
          rowData={orders}
          columnDefs={columnDefs}
          onGridReady={onGridReady}
          onFilterChanged={(params) => console.log(params.api.getFilterModel())}
        />
      </Box>
    </>
  );
};

export default Dashboard;
