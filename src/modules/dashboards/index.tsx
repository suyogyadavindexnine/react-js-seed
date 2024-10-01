import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import PageHeader from './components/PageHeader';
import { PageTitleWrapper } from '../../shared/components/index';
import { Box, Container, Grid } from '@mui/material';
import Footer from 'src/core/footer';
import AccountBalance from './components/AccountBalance';
import Wallets from './components/Wallets';
import AccountSecurity from './components/AccountSecurity';
import WatchList from './components/WatchList';
import { getDashboardData } from './services/dashboards.service';

function DashboardCrypto() {
  const dispatch = useDispatch<any>();

  const [accountData, setAccountData] = useState({});
  const { dashboardData, loadingDashboardData } = useSelector(
    (state: any) => state?.dashboardData
  );
  console.log('dashboardData', dashboardData);

  useEffect(() => {
    dispatch(getDashboardData());
  }, []);

  useEffect(() => {
    console.log(dashboardData);
    const dashBoardDetails = dashboardData;
    setAccountData(dashBoardDetails);
  }, [dashboardData]);

  return (
    <>
      <Helmet>
        <title>Indexnine React TS Starter</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader user={dashboardData?.user} />
      </PageTitleWrapper>
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12}>
            <AccountBalance
              accountDetails={dashboardData.accountDetails}
              handleButtonClick={() => null}
            />
          </Grid>
          <Grid item lg={8} xs={12}>
            <Wallets
              walletDetails={dashboardData.walletDetails}
              handleButtonClick={() => null}
            />
          </Grid>
          <Grid item lg={4} xs={12}>
            <AccountSecurity securityDetails={dashboardData.accountSecurity} />
          </Grid>
          <Grid item xs={12}>
            <WatchList
              watchListDetails={dashboardData.watchList}
              Watchlistlabel={dashboardData.Watchlistlabel}
            />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default DashboardCrypto;
