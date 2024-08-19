import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  datatable: {
    '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
      outline: 'none !important'
    }
  }
});
export const Tables = (props) => {
  const { rows, columns, checkboxSelection = true } = props;
  const classes = useStyles();
  return (
    <div className="tablestyle">
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection={checkboxSelection}
        disableColumnFilter={true}
        pageSizeOptions={[25, 50, 100]}
        disableColumnMenu
        autoHeight={true}
        disableRowSelectionOnClick={true}
        disableDensitySelector={true}
        classes={{ root: classes.datatable }}
      />
    </div>
  );
};
