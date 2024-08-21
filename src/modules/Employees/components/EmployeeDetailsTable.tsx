import { Box, Divider, Grid, IconButton, Tooltip } from '@mui/material';
import PropTypes from 'prop-types';
import { FC, useState } from 'react';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import Container from '@mui/material/Container';
import { GridColDef } from '@mui/x-data-grid';
import { useTranslation } from 'react-i18next';
import { Card, Tables, TextField } from '../../../shared/components/index';
import { EmployeeDetails } from '../models';
import { sortComparator } from '../../../shared/utils/utils';

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
      width: 170
    },
    { field: 'name', sortable: true, headerName: 'Name', width: 170 },
    {
      field: 'designation',
      sortable: true,
      headerName: 'Designation',
      width: 170
    },
    {
      field: 'date_of_join',
      headerName: 'Date of Joining',
      sortable: true,
      sortComparator: sortComparator,
      width: 170
    },
    {
      field: 'date_of_birt',
      headerName: 'Date of Birth',
      sortable: true,
      sortComparator: sortComparator,
      width: 170
    },
    {
      field: 'address',
      headerName: 'Adress',
      sortable: false,
      width: 170
    },
    {
      field: 'Actions',
      sortable: false,

      renderCell: () => {
        return (
          <>
            <Tooltip title="Edit Order" arrow>
              <IconButton
                aria-label="editorder"
                className="RecentOrderEditButton"
                color="inherit"
                size="small"
                onClick={() => handleButtonClick('clicked!')}
              >
                <EditTwoToneIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip
              className="RecentOrderDeleteButton"
              title="Delete Order"
              arrow
            >
              <IconButton color="inherit" size="small">
                <DeleteTwoToneIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </>
        );
      },
      width: 170
    }
  ];

  return (
    <>
      <Card>
        <Box flex={1} p={3}>
          <Container maxWidth="lg">
            <Grid container direction="row-reverse" spacing={2}>
              <Grid item lg={4}>
                <TextField
                  id="outlined-search"
                  label="Search field"
                  type="search"
                  value={searchQuery}
                  onChange={onSearchChange}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Divider />
        <Box>
          <Tables
            rows={employeeDetails}
            columns={columns}
            showCheckboxSelection={false}
          />
        </Box>
      </Card>
    </>
  );
};

EmployeeDetailsTable.propTypes = {
  employeeDetails: PropTypes.array.isRequired
};

// EmployeeDetailsTable.defaultProps = {
//   employeeDetails: []
// };

export default EmployeeDetailsTable;
