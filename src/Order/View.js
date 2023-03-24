import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import OrderTrackingService from "../Services/OrderTracking";
import moment from "moment";
import Button from "../Shared/Button";
import DataGrid from "../Shared/Grid";
import { getLogStatus } from "../Utilities/Helpers";

const columnDefs = [
  { field: "station" },
  { field: "status" },
  {
    field: "createdDate",
    valueFormatter: (params) =>
      params?.data?.createdDate
        ? moment(params?.data?.createdDate).format("MM/DD/YYYY h:mm a")
        : null,
  },
  {
    field: "user.nickname",
    headerName: "Created By",
  },
];

const OrderView = () => {
  const { orderId } = useParams();
  const [logs, setLogs] = useState([]);
  const [isCancelledOrClosed, setIsCancelledOrClosed] = useState(false);

  useEffect(() => {
    async function getOrderById(orderId) {
      if (orderId === undefined) {
        return;
      }

      const order = await OrderTrackingService.getOrderById(orderId);
      const logs = order?.logs ?? [];
      setLogs([...logs]);

      const logStatus = getLogStatus(logs);
      setIsCancelledOrClosed(logStatus.isCancelledOrClosed);
    }

    getOrderById(orderId);
  }, [orderId]);

  return (
    <>
      <h3>WorkOrder#: {orderId} Logs</h3>
      {!isCancelledOrClosed && (
        <Button component={Link} to={`/order/${orderId}`}>
          Add Log
        </Button>
      )}
      <DataGrid rowData={logs} columnDefs={columnDefs} domLayout="autoHeight" />
    </>
  );
};

export default OrderView;
