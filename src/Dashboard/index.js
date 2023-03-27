import { Link } from "react-router-dom";
import React, { useCallback, useEffect, useRef, useState } from "react";

import OrderTrackingService from "../Services/OrderTracking";
import { Box } from "@mui/material";
import moment from "moment/moment";
import useAuthenticatedUser from "../Hooks/useAuthenticatedUser";
import DataGrid from "../Shared/Grid";
import QrPrintPreview from "../QRCodeGenerator/QrPrintPreview";
import { useReactToPrint } from "react-to-print";
import Button from "../Shared/Button";
import DeleteOrderConfirmation from "./DeleteOrderConfirmation";

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
  const gridRef = useRef();
  const [showPrintDialog, setShowPrintDialog] = useState(false);
  const [gridReady, setGridReady] = useState(false);
  const [orderId, setOrderId] = useState();
  const [orders, setOrders] = useState([]);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const handlePrint = useReactToPrint({
    content: () => ref.current,
    onAfterPrint: () => {
      setShowPrintDialog(false);
    },
  });

  useEffect(() => {
    if (showPrintDialog && orderId !== undefined) {
      handlePrint();
    }
  }, [orderId, handlePrint]);

  const { isAdmin } = useAuthenticatedUser();

  const handleDeleteOrder = useCallback(async () => {
    setShowConfirmationDialog(false);
    await OrderTrackingService.deleteOrder(orderId);

    const orders = await OrderTrackingService.getOrders();
    setOrders(orders);
  }, [orderId]);

  const columnDefs = [
    {
      width: 100,
      flex: 0,
      sortable: false,
      filter: false,
      cellRenderer: (params) => (
        <Link to={`order/${params.data.id}/view`}>View Logs</Link>
      ),
    },
    {
      field: "delete",
      initialHide: true,
      width: 120,
      flex: 0,
      sortable: false,
      filter: false,
      cellRenderer: ({ data: { id: orderId } }) => (
        <Button
          variant="text"
          onClick={() => {
            setOrderId(orderId);
            setShowConfirmationDialog(true);
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
        return (
          <Link
            onClick={() => {
              setOrderId(id);
              setShowPrintDialog(true);
            }}
          >
            View PDF
          </Link>
        );
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

  const onGridReady = useCallback(async ({ api, columnApi }) => {
    const orders = await OrderTrackingService.getOrders();
    setOrders(orders);

    const currentModel = api.getFilterModel();
    const newFilterModel = {
      ...currentModel,
      status: {
        filterType: "text",
        operator: "AND",
        condition1: {
          filterType: "text",
          type: "notEqual",
          filter: "Closed",
        },
        condition2: {
          filterType: "text",
          type: "notEqual",
          filter: "Cancel",
        },
      },
    };

    setGridReady(true);

    api.setFilterModel(newFilterModel);
  }, []);

  useEffect(() => {
    if (isAdmin && gridReady) {
      console.log("isAdmin and grid is ready");
      const { columnApi } = gridRef.current;

      columnApi.setColumnVisible("delete", true);
    }
  }, [isAdmin, gridRef, gridReady]);

  return (
    <>
      <DeleteOrderConfirmation
        title="Delete Work Order?"
        content={`Are you sure you want to delete Work Order ${orderId}?`}
        open={showConfirmationDialog}
        onHandleConfirm={handleDeleteOrder}
        onHandleCancel={() => setShowConfirmationDialog(false)}
      />
      <Box sx={{ display: "none" }}>
        <QrPrintPreview ref={ref} orderId={orderId} />
      </Box>
      <Box>
        <DataGrid
          ref={gridRef}
          rowData={orders}
          columnDefs={columnDefs}
          onGridReady={onGridReady}
          onFilterChanged={(params) => console.log(params.api.getFilterModel())}
          defaultColDefs={{
            resizable: true,
            suppressMovable: false,
          }}
        />
      </Box>
    </>
  );
};

export default Dashboard;
