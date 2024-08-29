import React from 'react';
import { EmployeesSkillDetailsProp } from '../models/DashboardDetails';
import { GridColDef } from '@mui/x-data-grid';
import { titleCase } from 'src/shared/utils/utils';
import { Tables } from '../../../shared/components/index';
import { Box, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';

const EmployeesSkillDetails = ({ empSkillData }: EmployeesSkillDetailsProp) => {
  //Constants
  const { t } = useTranslation(['english']);
  const columns: GridColDef[] = [
    {
      field: 'id',
      sortable: false,
      headerName: t('dashboard.employee_skill_details.empId').toUpperCase(),
      width: 100
    },
    {
      field: 'employee_name',
      sortable: false,
      headerName: t('dashboard.employee_skill_details.empName').toUpperCase(),
      width: 150
    },
    {
      field: 'key',
      sortable: false,
      headerName: t('dashboard.employee_skill_details.skill').toUpperCase(),
      width: 90,
      renderCell: (params) => {
        return titleCase(params?.row?.key);
      }
    },
    {
      field: 'available',
      sortable: false,
      headerName: t('dashboard.employee_skill_details.available').toUpperCase(),
      width: 90,
      renderCell: (params) => {
        return titleCase(params?.row?.available);
      }
    },
    {
      field: 'projects',
      sortable: false,
      headerName: t('dashboard.employee_skill_details.projects').toUpperCase(),
      width: 200,
      renderCell: (params) => {
        if (params?.row?.projects?.join(', ')?.length > 25) {
          return (
            <Tooltip title={params?.row?.projects?.join(', ')} arrow>
              <Box sx={{ maxWidth: 300 }} className="text-ellipsis">
                {params?.row?.projects?.join(', ')}
              </Box>
            </Tooltip>
          );
        } else {
          <Box>{params?.row?.projects?.join(', ')}</Box>;
        }
      }
    }
  ];

  //HTML
  return (
    <Box className="customTable empDetailsBySkillTable">
      <Tables
        rows={empSkillData}
        columns={columns}
        hideFooter={true}
        // showCheckboxSelection={false}
      />
    </Box>
  );
};

export default EmployeesSkillDetails;
