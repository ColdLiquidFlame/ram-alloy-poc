import { Box } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import { useRef } from "react";

const defaultColDefs = {
  minWidth: 100,
  flex: 1,
  filter: true,
  sortable: true,
  suppressMovable: true,
};

const DataGrid = ({
  onGridReady,
  defaultColDefs: defaultColDefsProp,
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
        defaultColDef={{ ...defaultColDefs, ...defaultColDefsProp }}
        {...props}
      />
    </Box>
  );
};

export default DataGrid;
