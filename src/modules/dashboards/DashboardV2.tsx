import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import PageHeader from './components/PageHeader';
import { Button, PageTitleWrapper } from '../../shared/components/index';
import { Box, Container, Grid } from '@mui/material';
import Footer from 'src/core/footer';
import { getDashboardData, refreshData } from './services/dashboards.service';
import CompanyData from './components/CompanyData';
import AlertsData from './components/AlertsData';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useTranslation } from 'react-i18next';

function DashboardV2() {
  //Constants
  const dispatch = useDispatch<any>();
  const { t } = useTranslation(['english']);

  //Redux
  const { dashboardData } = useSelector((state: any) => state?.dashboardData);

  //useEffects
  useEffect(() => {
    dispatch(getDashboardData());
  }, []);

  //Methods
  const handleRefresh = () => {
    dispatch(refreshData());
  };

  return (
    <>
      <Helmet>
        <title>Indexnine React TS Starter</title>
      </Helmet>
      <PageTitleWrapper>
        <Box className="flex-basic-space-between">
          <PageHeader user={dashboardData?.user} />
          <Button
            btnText={t('dashboard.header.refresh')}
            variant="contained"
            size="large"
            icon={<RefreshIcon />}
            onClick={handleRefresh}
          />
        </Box>
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
        >
          <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
            <CompanyData />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <AlertsData />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default DashboardV2;
