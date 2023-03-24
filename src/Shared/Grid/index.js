import { Box } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import { useRef } from "react";

const defaultColumnDefs = {
  minWidth: 100,
  flex: 1,
};

const DataGrid = ({
  onGridReady,
  defaultColumnDefs: defaultColumnDefsProp,
  ...props
}) => {
  const gridRef = useRef();

  return (
    <Box sx={{ height: "100%", width: "100%" }} className="ag-theme-alpine">
      <AgGridReact
        ref={gridRef}
        gridOptions={{ colResizeDefault: true }}
        onGridReady={onGridReady}
        domLayout="autoHeight"
        defaultColumnDefs={{ ...defaultColumnDefs, ...defaultColumnDefsProp }}
        {...props}
      />
    </Box>
  );
};

export default DataGrid;
