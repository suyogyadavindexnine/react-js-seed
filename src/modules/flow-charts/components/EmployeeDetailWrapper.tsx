import React from 'react';
import {
  Card,
  CardHeader,
  Grid,
  Divider,
  Container,
  Box,
  Breadcrumbs,
  Link
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import CardContent from '@mui/material/CardContent';
import { Helmet } from 'react-helmet-async';
import {
  PageTitleWrapper,
  PageTitle,
  Typography
} from 'src/shared/components/index';
import EmployeeDetail from './EmployeeDetail';
import useQuery from 'src/hooks/useQuery';
import { DEPARTMENTS, DEPARTMENT_LABELS } from 'src/shared/constants/constants';

const EmployeeDetailWrappper = () => {
  // Constants
  const { t } = useTranslation(['english']);
  const query = useQuery();
  const departmentKey = query.get('department') || '';
  const employeeName = query.get('employee') || '';

  // Methods
  /**
   * This function checks and returns the Department Label
   * @param key String
   * @returns Department Label
   */
  const getDepartmentName = (key: string) => {
    switch (key) {
      case DEPARTMENTS.MANAGEMENT:
        return DEPARTMENT_LABELS.MANAGEMENT;
      case DEPARTMENTS.ENGINEERING:
        return DEPARTMENT_LABELS.ENGINEERING;
      case DEPARTMENTS.QA:
        return DEPARTMENT_LABELS.QA;
      case DEPARTMENTS.DESIGN:
        return DEPARTMENT_LABELS.DESIGN;
      default:
        return DEPARTMENT_LABELS.OPERATIONS;
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('sidebar-menu.indexnine_employee_info')}</title>
      </Helmet>
      <PageTitleWrapper>
        <PageTitle
          heading="Indexnine"
          subHeading={t('sidebar-menu.indexnine_employee_info')}
          showDocumentationText={false}
          docs="https://indexnine.com/"
        />
      </PageTitleWrapper>
      <Box>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item xs={12}>
            <Card sx={{ m: 1 }}>
              <CardHeader title={t('sidebar-menu.indexnine_org')} />
              <Box sx={{ px: 2, pb: 2 }}>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link
                    underline="hover"
                    color="inherit"
                    href="/management/indexnine-flow-chart"
                  >
                    Home
                  </Link>
                  <Link
                    underline="hover"
                    color="inherit"
                    href={`/management/indexnine-flow-chart/department-detail?department=${departmentKey}`}
                  >
                    {getDepartmentName(departmentKey)}
                  </Link>
                  <Typography color="text.primary">{employeeName}</Typography>
                </Breadcrumbs>
              </Box>
              <Divider />
              <CardContent>
                <EmployeeDetail />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default EmployeeDetailWrappper;
