import {
  GridCallbackDetails,
  GridColDef,
  GridRowParams,
  MuiEvent
} from '@mui/x-data-grid';

export interface TableProps {
  rows: any[];
  columns: GridColDef[];
  showCheckboxSelection?: boolean;
  hideFooter?: boolean;
  isRowClickable?: boolean;
  handleRowClick?: (
    params: GridRowParams,
    event: MuiEvent<React.MouseEvent>,
    details: GridCallbackDetails
  ) => void;
}
