import { Box } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import { forwardRef } from "react";

const defaultColDefs = {
  minWidth: 100,
  flex: 1,
  filter: true,
  sortable: true,
  suppressMovable: true,
};

const DataGrid = forwardRef(
  ({ onGridReady, defaultColDefs: defaultColDefsProp, ...props }, ref) => {
    return (
      <Box sx={{ height: "100%", width: "100%" }} className="ag-theme-alpine">
        <AgGridReact
          ref={ref}
          gridOptions={{ colResizeDefault: true }}
          onGridReady={onGridReady}
          domLayout="autoHeight"
          defaultColDef={{ ...defaultColDefs, ...defaultColDefsProp }}
          {...props}
        />
      </Box>
    );
  }
);

export default DataGrid;
