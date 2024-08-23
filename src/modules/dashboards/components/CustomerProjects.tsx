import { useEffect, useState } from 'react';
import {
  Box,
  Divider,
  FormControl,
  IconButton,
  InputAdornment
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import {
  Card,
  Select,
  Tables,
  TextField,
  Typography
} from '../../../shared/components/index';
import { getProjectsData } from '../services/dashboards.service';
import {
  sortComparator,
  filterDataByWeekMonthYear
} from '../../../shared/utils/utils';
import { GridColDef } from '@mui/x-data-grid';

const CustomerProjects = () => {
  // Constant
  const { t } = useTranslation(['english']);
  const dispatch = useDispatch<any>();

  const columns: GridColDef[] = [
    {
      field: 'project_name',
      sortable: true,
      headerName: 'PROJECT NAME',
      width: 110
    },
    {
      field: 'project_manager',
      sortable: true,
      headerName: 'PROJECT MANAGER',
      width: 120
    },
    {
      field: 'start_date',
      headerName: 'START DATE',
      sortable: true,
      sortComparator: sortComparator
    },
    {
      field: 'end_date',
      headerName: 'END DATE',
      sortable: true,
      sortComparator: sortComparator
    },
    {
      field: 'team_size',
      headerName: 'TEAM SIZE',
      sortable: true
    },
    {
      field: 'project_status',
      headerName: 'PROJECT STATUS',
      sortable: true,
      width: 130
    },
    {
      field: 'project_domain',
      headerName: 'PROJECT DOMAIN',
      sortable: true,
      width: 130
    },
    {
      field: 'client_name',
      headerName: 'CLIENT NAME',
      sortable: true
    }
  ];

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

  // Redux Values
  let { projectDetails, isDataRefresh } = useSelector(
    (state: any) => state.dashboardData
  );

  // Use Effects
  useEffect(() => {
    dispatch(getProjectsData(isDataRefresh));
  }, [isDataRefresh]);

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
   * showing project details starting with search query
   */
  projectDetails = projectDetails.filter((m) =>
    m.project_name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  /**
   * Applying filter to data
   */
  projectDetails = filterDataByWeekMonthYear(
    projectDetails,
    filter,
    'start_date'
  );

  return (
    <Card>
      <Box>
        <Box sx={{ p: 2 }} className="flex-basic-space-between">
          <Box>
            <Typography variant="h4">
              {t('dashboard.customer_projects.customer_projects')}
            </Typography>
          </Box>
          <Box>
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
            <IconButton
              aria-label="filter-list"
              size="small"
              sx={{ ml: 1, border: '1px solid #D1D3D4' }}
            >
              <FilterListOutlinedIcon />
            </IconButton>
            <FormControl className="customSelect" sx={{ ml: 1 }} size="small">
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                options={filterOptions}
                value={filter}
                label=""
                isObject={true}
                itemText="label"
                itemValue="value"
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              />
            </FormControl>
          </Box>
        </Box>
        <Divider />
        <Box className="customTable">
          <Tables
            rows={projectDetails}
            columns={columns}
            showSearchField={false}
            // showCheckboxSelection={false}
          />
        </Box>
      </Box>
    </Card>
  );
};

export default CustomerProjects;
