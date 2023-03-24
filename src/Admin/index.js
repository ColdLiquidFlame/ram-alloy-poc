import CheckIcon from "@mui/icons-material/Check";
import {
  Alert,
  Backdrop,
  Box,
  CircularProgress,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import UserRoleService from "../Services/UserRoles";
import Button from "../Shared/Button";
import DataGrid from "../Shared/Grid";
import CheckboxEditor from "../Shared/Grid/Editors/CheckboxEditor";
import ButtonEditor from "./ButtonEditor";
import roles from "../Config/roles";
import useAuthenticatedUser from "../Hooks/useAuthenticatedUser";

const columnDefs = [
  {
    valueSetter: () => null,
    width: 200,
    resizable: true,
    editable: true,
    cellRenderer: (params) => {
      const {
        api,
        column: { colId },
        rowIndex,
      } = params;

      return (
        <Button
          sx={{ minWidth: "unset", height: "2.5em" }}
          onClick={() => api.startEditingCell({ rowIndex, colKey: colId })}
        >
          Edit
        </Button>
      );
    },
    cellEditor: ButtonEditor,
  },
  { field: "nickname" },
  { field: "email" },
  ...roles.map((r) => ({
    field: r,
    cellRenderer: (params) => {
      const {
        column: { colId },
        data: { roles },
      } = params;
      if ((roles ?? []).includes(colId)) {
        return <CheckIcon />;
      }
    },
    editable: true,
    cellEditor: CheckboxEditor,
  })),
];

const Admin = () => {
  const { isAdmin } = useAuthenticatedUser();
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  const onGridReady = useCallback(async () => {
    var results = await UserRoleService.getUserRoles();
    setUsers(results);
  }, []);

  const onCellValueChanged = async (params) => {
    console.log("onCellValueChanged", params);
    const { data, node } = params;

    const { id } = data;

    var selectedRoles = roles.reduce((changed, currentRole) => {
      // role was not changed
      if (data[currentRole] === undefined) {
        return changed;
      }

      // role was set to true
      if (data[currentRole]) {
        return [...changed, currentRole];
      }

      // otherwise remove
      return changed.filter((r) => r !== currentRole);
    }, []);

    // update api
    setOpen(true);
    await UserRoleService.updateRoles({ id, roles: selectedRoles });
    setOpen(false);
    setSnackBarOpen(true);

    // update grid
    node.setData({ ...data, roles: [...selectedRoles] });
  };

  return (
    <>
      {!isAdmin && (
        <Typography variant="h3" sx={{ color: "red" }}>
          Unauthorized
        </Typography>
      )}
      {isAdmin && [
        <Snackbar
          open={snackBarOpen}
          autoHideDuration={6000}
          onClose={() => setSnackBarOpen(false)}
        >
          <Alert
            severity="success"
            sx={{ width: "100%" }}
            elevation={6}
            variant="filled"
          >
            Log saved
          </Alert>
        </Snackbar>,
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>,
        <Box>
          <Typography variant={"h3"}>Manage Users</Typography>
          <Box>
            <DataGrid
              rowData={users}
              editType="fullRow"
              columnDefs={columnDefs}
              onGridReady={onGridReady}
              rowSelection="single"
              onRowValueChanged={onCellValueChanged}
            />
          </Box>
        </Box>,
      ]}
    </>
  );
};

export default Admin;
