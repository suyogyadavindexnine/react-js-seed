import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";
import { TableProps } from "./services/tableInterface";
import clsx from "clsx";

const useStyles = makeStyles({
  datatable: {
    "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
      outline: "none !important",
    },
  },
  clickableRow: {
    // disable cell selection style
    ".MuiDataGrid-cell:focus": {
      outline: "none",
    },
    // pointer cursor on ALL rows
    "& .MuiDataGrid-row:hover": {
      cursor: "pointer",
    },
  },
});
export const Tables = ({
  rows,
  columns,
  showCheckboxSelection = true,
  hideFooter = false,
  isRowClickable = false,
  handleRowClick,
}: TableProps) => {
  const classes = useStyles();
  return (
    <div className="tablestyle">
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection={showCheckboxSelection}
        hideFooter={hideFooter}
        disableColumnFilter={true}
        pageSizeOptions={[25, 50, 100]}
        disableColumnMenu
        autoHeight={true}
        disableRowSelectionOnClick={true}
        disableDensitySelector={true}
        classes={{ root: classes.datatable }}
        className={clsx({ [classes.clickableRow]: isRowClickable })}
        onRowClick={handleRowClick}
      />
    </div>
  );
};
