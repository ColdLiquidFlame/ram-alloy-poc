import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import OrderTrackingService from "../Services/OrderTracking";
import moment from "moment";
import Button from "../Shared/Button";
import DataGrid from "../Shared/Grid";

const columnDefs = [
  { field: "station", filter: true, sortable: true },
  { field: "status", filter: true, sortable: true },
  {
    field: "createdDate",
    filter: true,
    sortable: true,
    valueFormatter: (params) =>
      params?.data?.createdDate
        ? moment(params?.data?.createdDate).format("MM/DD/YYYY h:mm a")
        : null,
  },
  {
    field: "user.nickname",
    headerName: "Created By",
    filter: true,
    sortable: true,
  },
];

const OrderView = () => {
  const { orderId } = useParams();
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    async function getOrderById(orderId) {
      if (orderId === undefined) {
        return;
      }

      const order = await OrderTrackingService.getOrderById(orderId);
      setLogs([...order?.logs]);
    }

    getOrderById(orderId);
  }, [orderId]);

  return (
    <>
      <h3>WorkOrder#: {orderId} Logs</h3>
      <Button component={Link} to={`/order/${orderId}`}>
        Add Log
      </Button>
      <DataGrid rowData={logs} columnDefs={columnDefs} domLayout="autoHeight" />
    </>
  );
};

export default OrderView;
