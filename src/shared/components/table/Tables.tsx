import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';
import { I18N, TABLE_PAGESIZE } from 'src/shared/constants/constants';
import {
  Box,
  Card,
  InputAdornment,
  MenuItem,
  Pagination,
  Select
} from '@mui/material';
import { Button, TextField, Typography } from '../index';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Pager,
  PaginationResponseDto
} from "src/core/model/pagination.dto";
import React, { FC, useEffect, useState } from 'react';
import { TabMenu } from '../tabmenu/TabMenu';

interface TableProps {
  rows?: any[];
  columns: any[];
  checkboxSelection?: boolean;
  loading?: boolean;
  showAddButton?: boolean;
  addBtnText?: string;
  className?: string;
  paginationData?: PaginationResponseDto<any>;
  showSearchField?: boolean;
  showViewByMenu?: boolean;
  viewByValueOptions?: any[];
  showPaginaton?: boolean;
  hideFooter?: boolean;
  showCard?: boolean;
  addButtonDisabled?: boolean;
  dataSelectedText?: string;
  handleAddButtonClick?: (value) => void;
  handleNextPaginationData?: (rowsPerPage: number, currentPage: number) => void;
  handleSearchEvent?: (event: any, rowsPerPage: number) => void;
  handleViewByEvent?: (tabId: { id: string; label: string }) => void;
}

const useStyles = makeStyles({
  datatable: {
    '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
      outline: 'none !important'
    }
  }
});
export const Tables = (props: TableProps) => {
  const {
    rows,
    columns,
    checkboxSelection = false,
    loading,
    showAddButton = false,
    addBtnText,
    className,
    handleAddButtonClick: onAddButtonClick,
    handleNextPaginationData: getNextPaginationData,
    handleSearchEvent: onSearchChange,
    handleViewByEvent,
    viewByValueOptions,
    paginationData,
    showSearchField = true,
    showViewByMenu = false,
    showPaginaton = true,
    hideFooter = true,
    showCard = true,
    addButtonDisabled = false,
    dataSelectedText
  } = props;

  //Constants
  const { t } = useTranslation(I18N.DEFAULT);
  const classes = useStyles();
  const noOfRowPerPage = TABLE_PAGESIZE;

  //State Variables
  const [open, setOpen] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(TABLE_PAGESIZE[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [isShowCustomPagination, setIsShowCustomPagination] =
    useState(showPaginaton);
  const [showDataTableFooter, setShowDataTableFooters] = useState(hideFooter);
  const [records, setRecords] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (rows) {
      setRecords(rows);
      setIsShowCustomPagination(false);
      setShowDataTableFooters(true);
    }
  }, [rows]);

  useEffect(() => {
    if (paginationData?.records) {
      setRecords(paginationData.records);
      const pager: Pager = paginationData.pager;
      setTotalPages(pager.totalPages);
      setIsShowCustomPagination(true);
      setShowDataTableFooters(false);
    }
  }, [paginationData]);

  //Methods
  const handleClose = () => {
    setOpen(false);
  };

  const handleIconClick = () => {
    setOpen(true);
  };

  function pageSizeChangeEvent(size) {
    setRowsPerPage(size);
    setCurrentPage(1);
    getNextPaginationData(size, 1);
  }

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    getNextPaginationData(rowsPerPage, value);
  };

  const handleSearchChange = (event: any) => {
    setSearchText(event?.target?.value);
    onSearchChange(event?.target?.value, rowsPerPage);
  };

  //HTML
  return (
    <Box className="tablestyle">
      {showCard ? (
        <Card>
          <Box sx={{ px: 3, mb: 1 }} className="flex-basic-space-between mt-20">
            <Box>
              {showSearchField && (
                <Box  sx={{paddingTop: '20px'}}>
                  <TextField
                    className="customField"
                    id="outlined-search"
                    placeholder="Search"
                    type="search"
                    value={searchText}
                    onChange={handleSearchChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                </Box>
              )}
            </Box>
            <Box className="d-flex alignitem">
              {showViewByMenu && (
                <Box className="mr-18">
                  <TabMenu
                    dataLabelText={t('table.viewBylabel')}
                    dataTabMenuOption={viewByValueOptions}
                    handleOnChange={handleViewByEvent}
                    dataSelectedText={dataSelectedText}
                  ></TabMenu>
                </Box>
              )}
              {showAddButton && (
                <Box>
                  <Button
                    btnText={addBtnText}
                    variant="contained"
                    onClick={onAddButtonClick}
                    disabled={addButtonDisabled}
                  />
                </Box>
              )}
            </Box>
          </Box>
          <DataGrid
            rows={records}
            columns={columns}
            checkboxSelection={checkboxSelection}
            disableColumnFilter={false}
            pageSizeOptions={noOfRowPerPage}
            disableColumnMenu
            className={'table ' + className}
            autoHeight={true}
            disableRowSelectionOnClick={true}
            disableDensitySelector={true}
            classes={{ root: classes.datatable }}
            localeText={{ noRowsLabel: t('table.noResultFound') }}
            // hideFooter={!showDataTableFooter ?? true}
            loading={loading}
          />
        </Card>
      ) : (
        <>
          <Box sx={{ px: 3, mb: 1 }} className="flex-basic-space-between mt-20">
            {showSearchField && (
              <Box>
                <TextField
                  className="customField"
                  id="outlined-search"
                  placeholder="Search"
                  type="search"
                  value={searchText}
                  onChange={handleSearchChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Box>
            )}
            {showAddButton && (
              <Box>
                <Button
                  btnText={addBtnText}
                  variant="contained"
                  onClick={onAddButtonClick}
                />
              </Box>
            )}
          </Box>
          <DataGrid
            rows={records}
            columns={columns}
            checkboxSelection={checkboxSelection}
            disableColumnFilter={false}
            pageSizeOptions={noOfRowPerPage}
            disableColumnMenu
            className={'table ' + className}
            autoHeight={true}
            disableRowSelectionOnClick={true}
            disableDensitySelector={true}
            classes={{ root: classes.datatable }}
            localeText={{ noRowsLabel: t('table.noResultFound') }}
            // hideFooter={!showDataTableFooter ?? true}
            loading={loading}
            getRowId={(row) => row?.id}
          />
        </>
      )}
      {isShowCustomPagination && (
        <Box className="flex-basic-space-between mt-16 paginationWrapper">
          <Box className="flex-basic-start ">
            <Typography
              className="font-weight-semibold mr-10 paginationPerPageText"
              variant={'body2'}
            >
              View
            </Typography>
            <Select
              value={rowsPerPage || 10}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              className="table-page-dropdown"
              open={open}
              onClose={handleClose}
              onOpen={() => setOpen(true)}
              IconComponent={() => (
                <ExpandMoreIcon
                  className="expandMoreIcon cursorPointer"
                  onClick={handleIconClick}
                />
              )}
              onChange={(e) => pageSizeChangeEvent(+e?.target?.value)}
            >
              {noOfRowPerPage.map((data) => (
                <MenuItem key={data} value={data}>
                  {data}
                </MenuItem>
              ))}
            </Select>
            <Typography
              className="ml-10 font-weight-semibold paginationPerPageText"
              variant={'body2'}
            >
              Per page
            </Typography>
          </Box>
          <Pagination
            className="pagination-class"
            count={totalPages}
            shape="rounded"
            boundaryCount={1}
            siblingCount={0}
            onChange={handleChange}
            page={currentPage}
          />
        </Box>
      )}
    </Box>
  );
};
