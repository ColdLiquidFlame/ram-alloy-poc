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
import Button from "../Shared/TextButton";
import DataGrid from "../Shared/Grid";
import CheckboxEditor from "../Shared/Grid/Editors/CheckboxEditor";
import ButtonEditor from "./ButtonEditor";
import roles from "../Config/roles";
import useAuthenticatedUser from "../Hooks/useAuthenticatedUser";
import Unauthorized from "../Unauthorized";

const columnDefs = [
  {
    valueSetter: () => null,
    minWidth: 80,
    width: 250,
    flex: 0,
    filter: false,
    editable: true,
    cellRenderer: (params) => {
      const {
        api,
        column: { colId },
        rowIndex,
      } = params;

      return (
        <Button
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
  const { isAdmin, roles } = useAuthenticatedUser();
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  const onGridReady = useCallback(async () => {
    var results = await UserRoleService.getUserRoles();
    setUsers(results);
  }, []);

  const onCellValueChanged = async (params) => {
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
      {!isAdmin && <Unauthorized />}
      {isAdmin && [
        <Snackbar
          key="0"
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
          key="1"
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>,
        <Box key="2">
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
