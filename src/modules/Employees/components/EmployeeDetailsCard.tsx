import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Box,
  CardHeader,
  FormControl,
  Grid,
  IconButton,
  TablePagination,
  Tooltip
} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import { ChangeEvent, FC, useState } from 'react';
import {
  Card,
  Select,
  CheckBox,
  TextField,
  Typography
} from '../../../shared/components/index';
import BulkActions from './BulkActions';
import { EmployeeDetails } from '../models';
import { filterDataByWeekMonthYear } from '../../../shared/utils/utils';

interface EmployeeDetailsCardProps {
  className?: string;
  employeeDetails: EmployeeDetails[];
  handleButtonClick: (value: string) => void;
}

const applyPagination = (
  employeeDetails: EmployeeDetails[],
  page: number,
  limit: number
): EmployeeDetails[] => {
  return employeeDetails?.slice(page * limit, page * limit + limit);
};

const EmployeeDetailsCard: FC<EmployeeDetailsCardProps> = ({
  employeeDetails,
  handleButtonClick
}) => {
  const filterOptions = [
    {
      value: 'all',
      label: 'All'
    },
    {
      value: 'last_week',
      label: 'Last Week'
    },
    {
      value: 'last_month',
      label: 'Last month'
    },
    {
      value: 'last_year',
      label: 'Last Year'
    }
  ];

  // State Variables
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEmployees, setSelectedEmployees] = useState<string[]>([]);
  const selectedBulkActions = selectedEmployees.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);

  // Methods
  /**
   * This function is used to set filter data
   * @param event Any
   * @returns void
   */
  const handleChange = (event: any) => {
    setFilter(event.target.value);
  };

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

  /**
   * function used to perform an action on all selected employee data
   * @param event
   */
  const handleSelectAllEmployees = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedEmployees(
      event.target.checked
        ? employeeDetails?.map((employeeDetail) => employeeDetail.id)
        : []
    );
  };

  /**
   * function for performing action on one selected employee data
   * @param event
   * @param employeeId
   */
  const handleSelectOneEmployee = (
    event: ChangeEvent<HTMLInputElement>,
    employeeId: string
  ): void => {
    if (!selectedEmployees.includes(employeeId)) {
      setSelectedEmployees((prevSelected) => [...prevSelected, employeeId]);
    } else {
      setSelectedEmployees((prevSelected) =>
        prevSelected.filter((id) => id !== employeeId)
      );
    }
  };

  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  let filteredEmployees = filterDataByWeekMonthYear(
    employeeDetails,
    filter,
    'date_of_join'
  );

  let paginatedEmployees = applyPagination(filteredEmployees, page, limit);
  const selectedSomeEmployeeDetails =
    selectedEmployees.length > 0 &&
    selectedEmployees.length < employeeDetails?.length;
  const selectedAllEmployeeDetails =
    selectedEmployees.length === employeeDetails?.length;

  return (
    <>
      <Card>
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item xs="auto">
              <CheckBox
                color="primary"
                checked={selectedAllEmployeeDetails}
                indeterminate={selectedSomeEmployeeDetails}
                onChange={handleSelectAllEmployees}
              />
            </Grid>
            <Grid item xs>
              {selectedBulkActions && (
                <Box flex={1} p={2}>
                  <BulkActions />
                </Box>
              )}
              {!selectedBulkActions && (
                <Box flex={1} sx={{ pb: '10px', pt: '10px' }}>
                  <Container maxWidth="lg">
                    <Grid container direction="row" spacing={2}>
                      <Grid item xs={12} md={10} sm={10} lg={11}>
                        <TextField
                          id="outlined-search"
                          label="Search field"
                          type="search"
                          value={searchQuery}
                          onChange={onSearchChange}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} md={2} sm={2} lg={1}>
                        <FormControl sx={{ ml: 1 }}>
                          <Select
                            options={filterOptions}
                            value={filter}
                            label=""
                            isObject={true}
                            itemText="label"
                            itemValue="value"
                            onChange={handleChange}
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Container>
                </Box>
              )}
            </Grid>
          </Grid>
        </Container>
      </Card>

      <Box sx={{ mt: 1, mb: 1 }}>
        <Grid container>
          {paginatedEmployees?.map((employeeDetail) => {
            const isEmployeeDetailSelected = selectedEmployees.includes(
              employeeDetail?.id
            );
            return (
              <Grid item xs={12} sm={6} md={4} lg={4} key={employeeDetail?.id}>
                <Card
                  sx={{
                    pr: 1,
                    pb: 1,
                    mr: 1,
                    mt: 1,
                    mb: 1
                  }}
                >
                  <CardHeader
                    action={
                      <Box pt={1} display="flex" alignItems="center">
                        <Box pr={2}>
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        </Box>
                      </Box>
                    }
                    title={employeeDetail?.name}
                    subheader={employeeDetail?.id}
                  />
                  <CardContent>
                    <Grid
                      container
                      direction="row"
                      spacing={4}
                      alignItems="center"
                    >
                      <Grid item lg={8} md={6} sm={6} xs={6}>
                        <Typography
                          gutterBottom
                          variant="caption"
                          className="RecentOrderTypography"
                        >
                          Designation
                        </Typography>
                        <Typography variant="h6">
                          {employeeDetail?.designation}
                        </Typography>
                      </Grid>
                      <Grid item lg={4} md={6} sm={6} xs={6}>
                        <Typography
                          gutterBottom
                          variant="caption"
                          className="RecentOrderTypography"
                        >
                          Date of Join
                        </Typography>
                        <Typography variant="h6">
                          {employeeDetail?.date_of_join}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions disableSpacing>
                    <Container maxWidth="lg">
                      <Grid container direction="row" alignItems="center">
                        <Grid item xs={8}>
                          <CheckBox
                            color="primary"
                            checked={isEmployeeDetailSelected}
                            onChange={(event: ChangeEvent<HTMLInputElement>) =>
                              handleSelectOneEmployee(event, employeeDetail?.id)
                            }
                            value={isEmployeeDetailSelected}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <Tooltip title="Edit Order" arrow>
                            <IconButton
                              className="RecentOrderEditButton"
                              color="inherit"
                              size="small"
                              onClick={() => handleButtonClick('clicked!')}
                            >
                              <EditTwoToneIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Delete Order" arrow>
                            <IconButton
                              className="RecentOrderDeleteButton"
                              color="inherit"
                              size="small"
                            >
                              <DeleteTwoToneIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        </Grid>
                      </Grid>
                    </Container>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <Card>
        <Box p={2}>
          <TablePagination
            component="div"
            count={paginatedEmployees.length}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10, 25, 30]}
          />
        </Box>
      </Card>
    </>
  );
};

EmployeeDetailsCard.propTypes = {
  employeeDetails: PropTypes.array.isRequired
};

// EmployeeDetailsCard.defaultProps = {
//   employeeDetails: []
// };

export default EmployeeDetailsCard;
