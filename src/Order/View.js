import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

import OrderTrackingService from "../Services/OrderTracking";
import moment from "moment";
import Button from "../Shared/Button";
import DataGrid from "../Shared/Grid";
import { getLogStatus } from "../Utilities/Helpers";
import useAuthenticatedUser from "../Hooks/useAuthenticatedUser";
import DeleteOrderConfirmation from "../Dashboard/DeleteOrderConfirmation";

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
  const { isAdmin } = useAuthenticatedUser();
  const { orderId } = useParams();
  const [logs, setLogs] = useState([]);
  const [log, setLog] = useState();
  const [isCancelledOrClosed, setIsCancelledOrClosed] = useState(false);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const gridRef = useRef();
  const [gridReady, setGridReady] = useState(false);

  const handleDeleteWorkOrderLog = useCallback(async () => {
    setShowConfirmationDialog(false);
    await OrderTrackingService.deleteLogFromOrder(orderId, log);

    const logs = await OrderTrackingService.getOrderLogsByWorkOrderId(orderId);
    setLogs([...logs]);
  }, [orderId, log]);

  const deleteColumn = {
    field: "delete",
    initialHide: true,
    width: 120,
    flex: 0,
    sortable: false,
    filter: false,
    cellRenderer: ({ data: log }) => (
      <Button
        variant="text"
        onClick={() => {
          console.log("Log", log);
          setShowConfirmationDialog(true);
          setLog(log);
        }}
        sx={{
          minWidth: "unset",
          background: "unset",
          border: "unset",
          color: "#3d3e3f",
          width: "100px",
        }}
      >
        Delete
      </Button>
    ),
  };

  useEffect(() => {
    async function getOrderById(orderId) {
      if (orderId === undefined) {
        return;
      }

      const logs = await OrderTrackingService.getOrderLogsByWorkOrderId(
        orderId
      );

      setLogs([...logs]);

      const logStatus = getLogStatus(logs);
      setIsCancelledOrClosed(logStatus.isCancelledOrClosed);
    }

    getOrderById(orderId);
  }, [orderId]);

  useEffect(() => {
    if (isAdmin && gridReady) {
      console.log("isAdmin and grid is ready");
      const { columnApi } = gridRef.current;

      columnApi.setColumnVisible("delete", true);
    }
  }, [isAdmin, gridRef, gridReady]);

  return (
    <>
      <h3>WorkOrder#: {orderId} Logs</h3>
      {!isCancelledOrClosed && (
        <Button component={Link} to={`/order/${orderId}`}>
          Add Log
        </Button>
      )}
      <DeleteOrderConfirmation
        title="Delete Work Order Log?"
        content={`Are you sure you want to delete Work Order Log?`}
        open={showConfirmationDialog}
        onHandleConfirm={handleDeleteWorkOrderLog}
        onHandleCancel={() => setShowConfirmationDialog(false)}
      />
      <DataGrid
        ref={gridRef}
        rowData={logs}
        columnDefs={[deleteColumn, ...columnDefs]}
        domLayout="autoHeight"
        onGridReady={() => setGridReady(true)}
      />
    </>
  );
};

export default OrderView;
