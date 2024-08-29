import {
  Box,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Tooltip
} from '@mui/material';
import PropTypes from 'prop-types';
import { FC, useState } from 'react';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import Container from '@mui/material/Container';
import { GridColDef } from '@mui/x-data-grid';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Card,
  Tables,
  TextField
} from '../../../shared/components/index';
import { EmployeeDetails } from '../models';
import { sortComparator } from '../../../shared/utils/utils';
import SearchIcon from '@mui/icons-material/Search';

interface EmployeeDetailsTableProps {
  className?: string;
  employeeDetails: EmployeeDetails[];
  handleButtonClick: (e: string) => void;
}

const EmployeeDetailsTable: FC<EmployeeDetailsTableProps> = ({
  employeeDetails,
  handleButtonClick
}) => {
  const { t } = useTranslation('english');
  const [searchQuery, setSearchQuery] = useState('');
  /**
   * This function used to set search query
   * @param event
   * @returns void
   */
  const onSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  /**
   * showing employee details name starting with search query
   */
  employeeDetails = employeeDetails.filter((m) =>
    m.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  const columns: GridColDef[] = [
    {
      field: 'id',
      sortable: true,
      headerName: 'Employee Id',
      width: 170,
      headerClassName: 'tableHeadersFont',
      renderHeader: (params) => {
        return (
          <>
            <Box className="d-flex  align-items-center tableSortIcon">
              <Box className="MuiDataGrid-columnHeaderTitle">
              Employee Id
              </Box>
              <Box className="flex-column-start p-relative">
                <Box className="arrowUpDown ml-7"></Box>
              </Box>
            </Box>
          </>
        );
      },
    },
    {
      field: 'name',
      sortable: true,
      flex: 0.25,
      headerName: 'Name',
      width: 170,
      headerClassName: 'tableHeadersFont',
      renderHeader: (params) => {
        return (
          <>
            <Box className="d-flex  align-items-center tableSortIcon">
              <Box className="MuiDataGrid-columnHeaderTitle">
              Name
              </Box>
              <Box className="flex-column-start p-relative">
                <Box className="arrowUpDown ml-7"></Box>
              </Box>
            </Box>
          </>
        );
      },
    },
    {
      field: 'designation',
      sortable: true,
      flex: 0.25,
      headerName: 'Designation',
      width: 170,
      headerClassName: 'tableHeadersFont',
      renderHeader: (params) => {
        return (
          <>
            <Box className="d-flex  align-items-center tableSortIcon">
              <Box className="MuiDataGrid-columnHeaderTitle">
              Designation
              </Box>
              <Box className="flex-column-start p-relative">
                <Box className="arrowUpDown ml-7"></Box>
              </Box>
            </Box>
          </>
        );
      },
    },
    {
      field: 'date_of_join',
      headerName: 'Date of Joining',
      sortable: true,
      flex: 0.25,
      align: 'center',
      headerAlign: 'center',
      sortComparator: sortComparator,
      width: 170,
      headerClassName: 'tableHeadersFont',
      renderHeader: (params) => {
        return (
          <>
            <Box className="d-flex  align-items-center tableSortIcon">
              <Box className="MuiDataGrid-columnHeaderTitle">
              Date of Joining
              </Box>
              <Box className="flex-column-start p-relative">
                <Box className="arrowUpDown ml-7"></Box>
              </Box>
            </Box>
          </>
        );
      },
    },
    {
      field: 'date_of_birt',
      headerName: 'Date of Birth',
      sortable: true,
      align: 'center',
      headerAlign: 'center',
      sortComparator: sortComparator,
      width: 170,
      headerClassName: 'tableHeadersFont',
      renderHeader: (params) => {
        return (
          <>
            <Box className="d-flex  align-items-center tableSortIcon">
              <Box className="MuiDataGrid-columnHeaderTitle">
              Date of Birth
              </Box>
              <Box className="flex-column-start p-relative">
                <Box className="arrowUpDown ml-7"></Box>
              </Box>
            </Box>
          </>
        );
      },
    },
    {
      field: 'address',
      headerName: 'Address',
      sortable: false,
      width: 170,
      headerClassName: 'tableHeadersFont',
      
    },
    {
      field: 'Actions',
      sortable: false,
      headerClassName: 'tableHeadersFont',
      width: 150,
      renderCell: () => {
        return (
          <>
            <Tooltip title="Edit Order" arrow>
              <IconButton
                aria-label="editorder"
                className="RecentOrderEditButton"
                color="inherit"
                size="medium"
                onClick={() => handleButtonClick('clicked!')}
              >
                <EditTwoToneIcon fontSize="medium" />
              </IconButton>
            </Tooltip>
            <Tooltip
              className="RecentOrderDeleteButton"
              title="Delete Order"
              arrow
            >
              <IconButton color="inherit" size="medium">
                <DeleteTwoToneIcon fontSize="medium" />
              </IconButton>
            </Tooltip>
          </>
        );
      }
    }
  ];

  return (
    <>
      <Card>
        {/* <Box flex={1} py={3}>
          <Box>
            <Grid container direction="row">
              <Grid>
                <TextField
                  className="customField"
                  id="outlined-search"
                  placeholder="Search"
                  type="search"
                  value={searchQuery}
                  onChange={onSearchChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Box> */}

        {/* <Divider /> */}
        <Box>
          <Tables
            rows={employeeDetails}
            columns={columns}
            // showCheckboxSelection={false}
          />
        </Box>
      </Card>
    </>
  );
};

EmployeeDetailsTable.propTypes = {
  employeeDetails: PropTypes.array.isRequired
};



export default EmployeeDetailsTable;
