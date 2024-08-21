import { Box, Card, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  Button,
  SimpleDialog,
  Tables,
  Typography
} from '../../../shared/components/index';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { GridColDef, GridRowParams } from '@mui/x-data-grid';
import { useDispatch } from 'react-redux';
import {
  getCompanySkillsData,
  getSkillSpecificEmpData
} from '../services/dashboards.service';
import JavaIcon from '../../../assets/icons/programming-language/java.svg';
import FlutterIcon from '../../../assets/icons/programming-language/flutter.svg';
import PythonIcon from '../../../assets/icons/programming-language/python.svg';
import AngularIcon from '../../../assets/icons/programming-language/angular.svg';
import ReactIcon from '../../../assets/icons/programming-language/react.svg';
import { EmployeesDetails } from '../models/DashboardDetails';
import EmployeesSkillDetails from './EmployeesSkillDetails';
import { titleCase } from 'src/shared/utils/utils';

const CompanySkills = () => {
  //constant
  const { t } = useTranslation(['english']);
  const dispatch = useDispatch<any>();
  const columns: GridColDef[] = [
    {
      field: 'name',
      sortable: false,
      headerName: t('dashboard.company_skills.skillName').toUpperCase(),
      width: 100,
      renderCell: (params) => {
        return (
          <Box className="flex-basic-center">
            <img
              src={getIcon(params?.row?.name?.toLowerCase())}
              alt={`${params?.row?.name}.svg`}
              height={17}
              width={17}
            />
            <Box sx={{ ml: 1 }}>{params?.row?.name}</Box>
          </Box>
        );
      }
    },
    {
      field: 'employees',
      sortable: false,
      headerName: t('dashboard.company_skills.employees').toUpperCase(),
      width: 80
    },
    {
      field: 'available',
      sortable: false,
      headerName: t('dashboard.company_skills.available').toUpperCase(),
      width: 80
    },
    {
      field: 'unavailable',
      sortable: false,
      headerName: t('dashboard.company_skills.unavailable').toUpperCase(),
      width: 90
    },
    {
      field: 'projects',
      sortable: false,
      headerName: t('dashboard.company_skills.projects').toUpperCase(),
      width: 80
    }
  ];

  //Redux
  const { companySkillsDetails, employeesDetailsBySkill, isDataRefresh } =
    useSelector((state: any) => state.dashboardData);

  //State
  const [skilledEmpDetails, setSkilledEmpDetails] = useState(
    [] as EmployeesDetails[]
  );
  const [showSkillEmpDetailsDialog, setShowSkillEmpDetailsDialog] =
    useState(false);
  const [selectedSkill, setSelectedSkill] = useState('');

  //useEffects
  useEffect(() => {
    dispatch(getCompanySkillsData(isDataRefresh));
  }, [isDataRefresh]);

  useEffect(() => {
    if (employeesDetailsBySkill && employeesDetailsBySkill?.length) {
      setSkilledEmpDetails(employeesDetailsBySkill);
    }
  }, [employeesDetailsBySkill]);

  useEffect(() => {
    if (skilledEmpDetails && skilledEmpDetails?.length) {
      setShowSkillEmpDetailsDialog(true);
    }
  }, [skilledEmpDetails]);

  //Methods
  /**
   * Get the programming language icons
   * @param programmingLanguage
   * @returns returns icon name
   */
  const getIcon = (programmingLanguage: string) => {
    switch (programmingLanguage) {
      case 'flutter':
        return FlutterIcon;

      case 'java':
        return JavaIcon;

      case 'python':
        return PythonIcon;

      case 'react':
        return ReactIcon;

      case 'angular':
        return AngularIcon;

      default:
        return '';
    }
  };

  /**
   * Handle row click event
   * @param params
   */
  const handleRowClick = (params: GridRowParams) => {
    setSelectedSkill(params?.row?.id);
    dispatch(getSkillSpecificEmpData(params?.row?.id));
  };

  /**
   * Handle dialog close event
   */
  const handleDialogClose = () => {
    setShowSkillEmpDetailsDialog(false);
  };

  return (
    <>
      <Card>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid item xs={12}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h4">
                {t('dashboard.company_skills.company_skills')}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{ maxHeight: 210 }}
              className="customTable scrollableTable"
            >
              <Tables
                rows={companySkillsDetails}
                columns={columns}
                hideFooter={true}
                isRowClickable={true}
                showCheckboxSelection={false}
                handleRowClick={handleRowClick}
              />
            </Box>
          </Grid>
        </Grid>
      </Card>

      <SimpleDialog
        customClass="skilledEmpDetailsPopup"
        open={showSkillEmpDetailsDialog}
        model_title={
          <Box sx={{ p: 2, pl: 0 }}>
            <Typography variant="h4">
              {t('dashboard.company_skills.empDetailsPopupTitle', {
                language: titleCase(selectedSkill)
              })}
            </Typography>
          </Box>
        }
        model_content={
          <EmployeesSkillDetails empSkillData={skilledEmpDetails} />
        }
        model_actions={
          <Box sx={{ mr: 2, mb: 2 }}>
            <Button
              btnText={t('dashboard.company_skills.close')}
              variant="text"
              size="large"
              onClick={handleDialogClose}
            />
          </Box>
        }
        onClose={handleDialogClose}
      />
    </>
  );
};

export default CompanySkills;
