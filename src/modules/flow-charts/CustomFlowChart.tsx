import React from 'react';
import {
  Card,
  CardHeader,
  Grid,
  Divider,
  Container,
  Box,
  Breadcrumbs
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import CardContent from '@mui/material/CardContent';
import { Helmet } from 'react-helmet-async';
import {
  PageTitleWrapper,
  PageTitle,
  Typography
} from 'src/shared/components/index';
import Departments from './components/Departments';

const CustomFlowChart = () => {
  // Constants
  const { t } = useTranslation(['english']);

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
      <Container maxWidth="lg">
        <Grid container direction="row" justifyContent="space-between">
          <Grid item xs={12}>
            <Card sx={{ m: 1 }}>
              <CardHeader title={t('sidebar-menu.indexnine_org')} />
              <Box sx={{ px: 2, pb: 2 }}>
                <Breadcrumbs aria-label="breadcrumb">
                  <Typography color="text.primary">Home</Typography>
                </Breadcrumbs>
              </Box>
              <Divider />
              <CardContent>
                <Departments />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CustomFlowChart;
