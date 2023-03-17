import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { AgGridReact } from "ag-grid-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import OrderTrackingService from "../Services/OrderTracking";

const columnDefs = [
  { field: "id", filter: true, headerName: "Log Id", sortable: true },
  { field: "station", filter: true, sortable: true },
  { field: "action", filter: true, sortable: true },
  { field: "timestamp", filter: true, sortable: true },
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
      <div className="ag-theme-alpine">
        <AgGridReact rowData={logs} columnDefs={columnDefs} />
      </div>
    </>
  );
};

export default OrderView;
